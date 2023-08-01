import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client'

import { Menu, Transition } from '@headlessui/react'

import HeaderNavBar from '../components/common/HeaderNavBar'
import ChatCard from './Message/ChatCard'
import MessageItem from './Message/MessageItem'


function MessagePage2() {
  const [user, setUser] = useState<any>(null);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const [chats, setChats] = useState<any>([]);
  const [displayChats, setDisplayChats] = useState<any>([]); // for search
  const [currentChat, setCurrentChat] = useState<any>(null);

  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<any>("");
  const [arrivalMessage, setArrivalMessage] = useState<any>(null);
  const socket = useRef<any>();

  const scrollRef = useRef<any>(null);

  function scrollToBottom() {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }

  function jumpToBottom() {
    scrollRef?.current?.scrollIntoView({ behavior: "instant" });
  }

  function onChatClick(chat: { id: string, name: string, pic: string, users: { id: string, name: string, pic: string }[], lastMessage: string }) {
    setCurrentChat(chat);
    getCurrentMessages(chat);
  }

  function searchChats(query: string) {
    if (query === "") {
      setDisplayChats(chats);
      return;
    }
    setDisplayChats(chats.filter((chat: { name: string }) => chat.name.toLowerCase().includes(query.toLowerCase())));
  }

  function getIsUserOnline(id: string) {
    // Return true or false based on whether the user is online
    return true;
  }

  async function getChats(id: string) {
    const { data } = await axios.get(`http://localhost:8080/api/chat/chat/${id}`);
    const promiseChats = data.chat.map(async (chat: any) => {
      const promiseUsers = chat.users.map(async (user: { _id: string }) => {
        const { data } = await axios.get(`http://localhost:8080/api/v0/users/${user._id}`);
        return data;
      });
      const users = await Promise.all(promiseUsers);

      const { data } = await axios.get(`http://localhost:8080/api/message/${chat._id}`);
      return {
        id: chat._id,
        name: (chat.users.length === 2) ? users.filter((user) => user.id !== id)[0].name : chat.chatName,
        pic: (chat.users.length === 2) ? users.filter((user) => user.id !== id)[0].pic : chat.pic,
        users: users.map((user: any) => {
          return {
            id: user.id,
            name: user.name,
            username: user.username,
            pic: user.pic
          }
        }),
        lastMessage: data.at(-1)?.content,
        isOnline: (chat.users.length === 2) ? getIsUserOnline(users.filter((user) => user.id !== id)[0].id) : false
      }
    });
    setChats(await Promise.all(promiseChats));
    setDisplayChats(await Promise.all(promiseChats));
  }

  async function getCurrentMessages(chat: { id: string, users: { id: string, name: string, pic: string }[] }) {
    const { data } = await axios.get(`http://localhost:8080/api/message/${chat.id}`);
    const promiseMessages = data.map(async (message: any) => {
      return {
        sender: {
          id: message.sender,
          name: chat.users.filter((u: { id: string }) => u.id === message.sender)[0].name,
          pic: chat.users.filter((u: { id: string }) => u.id === message.sender)[0].pic
        },
        content: message.content,
        createdAt: message.createdAt
      }
    });
    setMessages(await Promise.all(promiseMessages));
  }

  async function getCurrentUser(id: string) {
    const { data } = await axios.get(`http://localhost:8080/api/v0/users/${id}`);
    setUser(data);
    getChats(id);

    socket.current.emit("addUser", id);
    socket.current.on("getUsers", (users: any) => {
      console.log(users);
    });

    socket.current.on("getMessage", (data: any) => {
      setArrivalMessage({
        sender: data.senderId,
        content: data.text,
        createdAt: Date.now()
      });
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (newMessage === "") return;

    const receiverIDs = currentChat.users.filter((u: { id: string }) => u.id !== user.id).map((u: { id: string }) => u.id);
    receiverIDs.forEach(async (receiverID: string) => {
      socket.current.emit("sendMessage", {
        senderId: user.id,
        receiverId: receiverID,
        text: newMessage,
      });
    });

    const message = {
      sender: user.id,
      content: newMessage,
      chat: currentChat.id
    }

    const res = await axios.post(`http://localhost:8080/api/message/`, message);
    setMessages([...messages, {
      sender: {
        id: user.id,
        name: user.name,
        pic: user.pic
      },
      content: res.data.content,
      createdAt: res.data.createdAt
    }]);
    currentChat.lastMessage = res.data.content;
    setNewMessage("");
  }

  useEffect(() => {
    if (arrivalMessage === null) return;
    setMessages([...messages, {
      sender: {
        id: arrivalMessage.sender,
        name: currentChat.users.filter((u: { id: string }) => u.id === arrivalMessage.sender)[0].name,
        pic: currentChat.users.filter((u: { id: string }) => u.id === arrivalMessage.sender)[0].pic
      },
      content: arrivalMessage.content,
      createdAt: arrivalMessage.createdAt
    }]);
    currentChat.lastMessage = arrivalMessage.content;
  }, [arrivalMessage])

  useEffect(() => {
    if (messages.length === 0) return;
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (user !== null) {
      socket.current.emit("addUser", user.id);
      socket.current.on("getUsers", (users: any) => {
        console.log(users);
      });
    }
  }, [user]);

  useEffect(() => {
    async function verify() {
      if (!cookies.token) {
        navigate("/login");
      }

      const { data } = await axios.post('/api/users/verify', {});
      const { status, id } = data;
      if (status) {
        getCurrentUser(id);
      } else {
        removeCookie('token');
        navigate('/login');
      }
    }
    verify();
    socket.current = io("ws://localhost:8900");
  }, []);

  return (
    <div className="flex flex-row">
      <HeaderNavBar />
      <div className="flex flex-row w-full h-screen pt-16 lg:pt-[7.5rem]">
        <div className="flex flex-col flex-shrink-0 w-24 md:w-96 h-full bg-gray-100 relative py-4">
          <div className="flex-col space-y-4 pl-6 pr-6 hidden md:flex">
            <p className="text-2xl font-semibold">Messages</p>
            <div className="w-full relative flex-row">
              <div className="pointer-events-none absolute inset-0 pl-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <input className="block w-full bg-white border border-transparent rounded-lg py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-gray-200 focus:border-black focus:ring-black focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
                placeholder="Search" onChange={(e) => searchChats(e.target.value)} />
            </div>
          </div>
          <div className="flex flex-col overflow-y-auto my-4">
            {displayChats.map((chat: any) => (
              <button key={chat.id} className="py-3 flex items-center relative hover:bg-gradient-to-r from-gray-300 to-transparent focus:outline-none"
                onClick={() => onChatClick(chat)}>
                <div className="z-10 pl-4 md:pl-6">
                  <ChatCard chat={chat} />
                </div>
                {currentChat && currentChat.id === chat.id && (
                  <div className="absolute h-full w-full bg-gradient-to-r from-gray-300 to-transparent z-0 border-l-4 border-gray-700" />
                )}
              </button>
            ))}
          </div>
          <div className="absolute bottom-0 right-0 mr-4 mb-4 z-20">
            <button className="flex items-center justify-center shadow-sm h-12 w-12 bg-darkGrey text-white rounded-full hover:bg-gray-700 active:bg-gray-600 focus:outline-none"
              onClick={() => navigate("/message/search")}>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </button>
          </div>
        </div>
        {currentChat ? (
          <div className="flex flex-col h-full w-full">
            <div className="flex flex-row items-center m-4 py-4 px-6 rounded-2xl justify-between shadow">
              <div className="flex flex-row space-x-3 items-center">
                <div className="flex relative">
                  <img src={currentChat.pic} alt={currentChat.name} className="w-12 h-12 rounded-full" />
                  {currentChat.isOnline && <div className="absolute right-0 bottom-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
                </div>
                <div className="flex flex-col">
                  <p className="flex font-semibold text-xl text-ellipsis overflow-hidden whitespace-nowrap justify-start">{currentChat.name}</p>
                  <p className="flex text-md text-elipsis overflow-hidden whitespace-nowrap justify-start">{currentChat.users.filter((u: { id: string }) => u.id !== user.id).map((u: { username: string }) => u.username).join(', ')}</p>
                </div>
              </div>
              <Menu as="div">
                <Menu.Button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                  </svg>
                </Menu.Button>
                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute w-40 mt-1 right-20 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button className={`${active ? 'bg-gray-700 text-white' : 'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            onClick={() => setCurrentChat(null)}>
                            Close Chat
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="flex flex-col h-full w-full overflow-y-auto p-4 space-y-4"
              onLoad={jumpToBottom}>
              {messages.length !== 0 ? (
                messages.map((message: any) => (
                  <MessageItem message={message} isMine={message.sender.id === user.id} />
                ))
              ) : (
                <div className="flex flex-col h-full w-full justify-center items-center">
                  <p className="text-2xl font-semibold">No messages to show</p>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
            <form className="w-full p-4 flex flex-row items-center space-x-4"
              onSubmit={handleSubmit}>
              <div className="w-full relative flex-row">
                <div className="pointer-events-none absolute inset-0 pl-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <input className="block w-full h-12 bg-gray-100 border border-transparent rounded-3xl py-2 pl-14 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-black focus:ring-black focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
                  placeholder="Message" onChange={(e) => setNewMessage(e.target.value)} value={newMessage} />
              </div>
              <button className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-300 hover:bg-blue-400 active:blue-500 focus:outline-none" type="submit">
                <svg className="w-5 h-5 transform rotate-90 -mr-px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col h-full w-full justify-center items-center">
            <p className="text-2xl font-semibold">No chat selected</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessagePage2;