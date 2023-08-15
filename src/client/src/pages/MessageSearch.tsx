import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'

import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import { XIcon } from '@heroicons/react/outline'

const initUser = {
  id: '0',
  username: 'username',
  description: 'description',
  pic: require('../assets/sampleProfilePicture1.png'),
  banner: require('../assets/sampleLargeProductImage2.jpg'),
  visits: 0
}

const MessageSearch = () => {
  const [userid, setuserid] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const [createGroupChatSel, setCreateGroupChatSel] = useState(false);
  const [createDirectMessageSel, setCreateDirectMessageSel] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      chatName: '',
      pic: '',
    }
  });

  const [searchUsers, setSearchUsers] = useState<any[]>([]);
  const [groupChatUsers, setGroupChatUsers] = useState<any[]>([]);
  const [groupChatError, setGroupChatError] = useState('');

  const [dmUser, setDmUser] = useState<any>(null);
  const [dmError, setDmError] = useState('');

  async function findUsers(query: string) {
    if (query.length > 0) {
      await findUsersByName(query);
      await findUsersById(query);
    }
  }

  async function findUsersByName(query: string) {
    const { data } = await axios.get(`http://localhost:8080/api/v0/users/partName/${query}`);
    if (data !== null) {
      setSearchUsers(data.filter((user: { id: any; }) => userid !== user.id && !searchUsers.includes(user)));
    }
  }

  async function findUsersById(query: string) {
    const { data } = await axios.get(`http://localhost:8080/api/v0/users/${query}`);
    if (data !== null) {
      setSearchUsers([data]);
    }
  }

  async function createGroupChat(chatName: string, groupUsers: any[], pic: string) {
    const mongoUsers = groupUsers.map(async (user: { id: string; }) => {
      const { data } = await axios.get(`http://localhost:8080/api/chat/user/${user.id}`);
      return data;
    });
    const users = await Promise.all(mongoUsers);
    const res = await axios.post(`http://localhost:8080/api/chat/group`, { id: userid, name: chatName, users: users, pic: pic });
    if (res.status === 200) {
      navigate('/message');
    } else {
      window.alert('Failed to create chat');
    }
  }

  async function createDirectMessage(dmUser: any) {
    if (dmUser === null) {
      setDmError('Please select a user');
      return;
    }

    const { data } = await axios.get(`http://localhost:8080/api/chat/user/${dmUser.id}`);
    const res = await axios.post(`http://localhost:8080/api/chat/`, { id: userid, email: data.email, pic: data.pic });
    if (res.status === 200) {
      window.alert(`Direct Message with ${dmUser.name} already exists`);
      navigate('/message');
    } else if (res.status === 201) {
      navigate('/message');
    } else {
      window.alert('Failed to create chat');
    }
  }

  function isImgUrl(url: string): Promise<boolean> {
    if (url.length === 0) {
      return new Promise((resolve) => resolve(true));
    }

    const img = new Image();
    img.src = url;
    return new Promise((resolve) => {
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }

  useEffect(() => {
    const verify = async () => {
      if (!cookies.token) {
        navigate("/login");
      }

      const { data } = await axios.post('/api/users/verify', {});
      const { status, id } = data;
      if (status) {
        setuserid(id)
      } else {
        removeCookie('token');
        navigate('/login');
      }
    }
    verify();
  }, []);

  return (
    <div className="fixed flex inset-0 justify-center items-center bg-cover bg-center overflow-y-auto "
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'
      }}>
      <div className="bg-white rounded-xl">
        <div className="flex flex-row justify-between items-center w-full p-3">
          <label className="font-mono font-semibold text-xl">Create New Chat</label>
          <button className="h-8 w-8 rounded-full p-1 bg-gray-300 hover:bg-gray-400 active:bg-gray-600" onClick={() => navigate("/message")}>
            <svg color="#314555" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <hr className="bg-gray-800 w-full h-1" />
        <div className="flex flex-row space-x-5 p-4">
          <button className="w-40 rounded-full border-2 border-blue-500 p-3 hover:bg-blue-200 active:bg-blue-400"
            onClick={() => { setCreateGroupChatSel(true); setCreateDirectMessageSel(false); setSearchUsers([]) }}>
            <p className="text-sm font-semibold text-black">Group Chat</p>
          </button>
          <button className="w-40 rounded-full border-2 border-blue-500 p-3 hover:bg-blue-200 active:bg-blue-400"
            onClick={() => { setCreateGroupChatSel(false); setCreateDirectMessageSel(true); setSearchUsers([]) }}>
            <p className="text-sm font-semibold text-black">Direct Message</p>
          </button>
        </div>
        {createGroupChatSel && (
          <form className="flex flex-col pb-4 px-4 space-y-5"
            onSubmit={handleSubmit((data) => {
              if (groupChatUsers.length === 0) {
                setGroupChatError('Please add at least one user');
                return;
              }
              createGroupChat(data.chatName, groupChatUsers, data.pic || 'https://user-images.githubusercontent.com/1468166/37978116-46efb0e0-31b3-11e8-8d51-8d7af47d6f1c.png');
            })}>
            <div className="flex flex-col space-y-2">
              <label className="leading-2 text-left block text-black">Chat Name</label>
              <input id="chatName" className="block w-full border border-black rounded-md p-2 text-base" {...register("chatName", { required: "name cannot be empty" })} type="text" placeholder="New Group Chat" />
              {errors.chatName && <p className="text-[#FF0000] font-bold">{errors.chatName.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
              <label className="leading-2 text-left block text-black">Chat Pic</label>
              <input id="pic" className="block w-full border border-black rounded-md p-2 text-base" {...register("pic", { validate: { checkUrl: async (url) => await isImgUrl(url) || "Please enter a valid image URL" } })} type="url" placeholder="URL" />
              {errors.pic && <p className="text-[#FF0000] font-bold">{errors.pic.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
              <label className="leading-2 text-left block text-black">Search Users</label>
              <div className="flex flex-row items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input id="searchUser" className="block w-full border border-black rounded-md p-2 text-base" type="text" placeholder="Name, username, userid"
                  onChange={(e) => { setSearchUsers([]); findUsers(e.target.value) }} />
              </div>
            </div>
            {searchUsers.length > 0 && (
              <div className="flex flex-col max-h-40 overflow-y-auto space-y-5">
                {searchUsers.map((user: any) => (
                  <div key={user.id} className="flex flex-row justify-between pr-2">
                    <div className="flex flex-row items-center space-x-3">
                      <div className="h-10 w-10">
                        <img src={user.pic} alt={user.name} className="h-full w-full rounded-full" />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="font-semibold text-sm text-black text-ellipsis overflow-hidden whitespace-nowrap">{user.name}</p>
                        <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">{user.username}</p>
                      </div>
                    </div>
                    {groupChatUsers.some((u: { id: string }) => u.id === user.id) ? (
                      <button className="h-10 w-10 rounded-full p-2 border-2 border-red-500"
                        onClick={(e) => { e.preventDefault(); setGroupChatUsers(groupChatUsers.filter((u: { id: string }) => u.id !== user.id)) }}>
                        <svg color="#FF0000" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-full h-full">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    ) : (
                      <button className="h-10 w-10 rounded-full p-2 border-2"
                        onClick={(e) => { e.preventDefault(); setGroupChatUsers([user, ...groupChatUsers]); setGroupChatError('') }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#314555" className="w-full h-full">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
            {groupChatUsers.length > 0 && (
              <div className="flex flex-col space-y-2">
                <label className="leading-2 text-left block text-black">Added Users</label>
                <div className="flex flex-col max-h-40 overflow-y-auto space-y-5">
                  {groupChatUsers.map((user: any) => (
                    <div key={user.id} className="flex flex-row justify-between pr-2">
                      <div className="flex flex-row items-center space-x-3">
                        <div className="h-10 w-10">
                          <img src={user.pic} alt={user.name} className="h-full w-full rounded-full" />
                        </div>
                        <div className="flex flex-col space-y-1">
                          <p className="font-semibold text-sm text-black text-ellipsis overflow-hidden whitespace-nowrap">{user.name}</p>
                          <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">{user.username}</p>
                        </div>
                      </div>
                      <button className="h-10 w-10 rounded-full p-2 border-2 border-red-500"
                        onClick={(e) => { e.preventDefault(); setGroupChatUsers(groupChatUsers.filter((u: { id: string }) => u.id !== user.id)) }}>
                        <svg color="#FF0000" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-full h-full">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {groupChatError !== '' && <p className="text-[#FF0000] font-bold">{groupChatError}</p>}
            <input type="submit" className="bg-blue-500 hover:bg-blue-600 active:bg-blue-800 rounded-md p-2 text-white font-semibold" value="Create Group Chat" />
          </form>
        )}
        {createDirectMessageSel && (
          <div className="flex flex-col pb-4 px-4 space-y-5">
            <div className="flex flex-col space-y-2">
              <label className="leading-2 text-left block text-black">Search Users</label>
              <div className="flex flex-row items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input id="searchUser" className="block w-full border border-black rounded-md p-2 text-base" type="text" placeholder="Name, username, userid"
                  onChange={(e) => { setSearchUsers([]); findUsers(e.target.value) }} />
              </div>
            </div>
            {searchUsers.length > 0 && (
              <div className="flex flex-col max-h-40 overflow-y-auto">
                {searchUsers.map((user: any) => (
                  user.id !== dmUser?.id && (
                    <button key={user.id} className="flex flex-row items-center p-2 rounded-md space-x-3 hover:bg-gray-300 active:bg-gray-500"
                      onClick={() => { setDmUser(user); setSearchUsers([]); setDmError('') }}>
                      <img src={user.pic} alt={user.name} className="h-10 w-10 rounded-full" />
                      <div className="flex flex-col space-y-1">
                        <p className="flex font-semibold text-sm text-black text-ellipsis overflow-hidden whitespace-nowrap justify-start">{user.name}</p>
                        <p className="flex text-sm text-ellipsis overflow-hidden whitespace-nowrap justify-start">{user.username}</p>
                      </div>
                    </button>
                  )))}
              </div>
            )}
            {dmUser && (
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center space-x-3">
                  <div className="h-10 w-10">
                    <img src={dmUser.pic} alt={dmUser.name} className="h-full w-full rounded-full" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <p className="font-semibold text-sm text-black text-ellipsis overflow-hidden whitespace-nowrap">{dmUser.name}</p>
                    <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">{dmUser.username}</p>
                  </div>
                </div>
                <button className="h-10 w-10 rounded-full p-2 border-2 border-red-500"
                  onClick={(e) => { e.preventDefault(); setDmUser(null) }}>
                  <svg color="#FF0000" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            {dmError !== '' && <p className="text-[#FF0000] font-bold">{dmError}</p>}
            <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-800 rounded-md p-2 text-white font-semibold"
              onClick={() => createDirectMessage(dmUser)}>
              Create Direct Message
            </button>
          </div>

        )}
      </div>
    </div >
  )
}

export default MessageSearch
