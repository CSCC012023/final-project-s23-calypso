import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Conversation from './Message/Conversation'
import MessageBox from './Message/MessageBox'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const initUser = {
    id: 0,
    username: 'username',
    description: 'description',
    pic: "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png",
    banner: require('../assets/sampleLargeProductImage2.jpg')
}

function MessagePage() {
    const [userProfile, setUserProfile] = useState(initUser);
    const [user, setUser] = useState<any>(null);
    const [otherUserProfile, setOtherUserProfile] = useState<any>(initUser);
    const [conversations, setConversations] = useState<any[]>([]);
    const [currentChat, setCurrentChat] = useState<any>(null);
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [otherUserProfilePic, setOtherUserProfilePic] = useState("https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png");
    const navigate = useNavigate();
    //const scrollRef = useRef<any>();

    // gets and sets the user profile of the current user
    function getUserProfileByID(id: string) {
        axios.get(`http://localhost:8080/api/v0/users/${id}`)
            .then(response => {
                if (response.status === 200) {
                    const data = response.data;
                    setUserProfile(data);
                } else {
                    console.log("Failed to get user profile");
                }
            });
    }

    // gets and sets the user profile of other users
    async function getOtherUserProfilePic(id: string) {
        const res = await axios.get(`http://localhost:8080/api/v0/users/${id}`)
        try {
            setOtherUserProfilePic(res.data.pic);
        } catch (error) {
            console.log(error);
        }
    }

    // gets and sets the user profile of other users
    async function getOtherUserProfileByID(id: string) {
        await axios.get(`http://localhost:8080/api/v0/users/${id}`)
            .then(response => {
                if (response.status === 200) {
                    const data = response.data;
                    setOtherUserProfile(data);
                } else {
                    console.log("Failed to get user profile");
                }
            });
    }

    // used to get the user information from their id
    async function getUserByID(id: string) {
        const res = await axios.get("http://localhost:8080/api/chat/user/" + id);
        setUser(res.data);
    }

    // get the current user's id
    useEffect(() => {
        async function verify() {
            if (!cookies.token) {
                navigate("/login");
                alert("Please login");
            }

            const { data } = await axios.post('/api/users/verify', {});
            const { status, id } = data;
            if (status) {
                getUserByID(id);
                getUserProfileByID(id);
            } else {
                removeCookie('token');
                alert("Please login");
                navigate('/login');
            }

        }
        verify();
    }, []);

    // get all conversations that the current user is in
    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/chat/chat/" + user._id);
                //const firstItem = res.data.chat[0].user.filter((user: { email: string; }) => user.email === email);
                getOtherUserProfileByID(res.data.chat.filter((u: { id: any; }) => u.id !== user._id));
                setConversations(res.data.chat);
            } catch (error) {
                console.log(error);
            }
        }
        getConversations();
    }, [user]);

    // get all of the messages from the current chat
    useEffect(() => {
        const getMessages = async () => {
            if (currentChat != null) {
                try {
                    const res = await axios.get("http://localhost:8080/api/message/" + currentChat._id);
                    setMessages(res.data);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        getMessages();
    }, [user, currentChat]);

    // send message
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await getOtherUserProfileByID(user._id);
        const message = {
            sender: user,
            content: newMessage,
            chat: currentChat._id,
        };
        try {
            const res = await axios.post("http://localhost:8080/api/message/", message);
            setMessages([...messages, res.data])
            setNewMessage("");
        } catch (error) {
            console.log(error);
        }
    }

    async function getUserPicture(id: string) {
        await getOtherUserProfilePic(id);
    }

    return (
        <div className="flex h-screen overflow-y-hidden">
            <div className="bg-[#121212] w-1/3 text-white">
                <p className='p-2 text-center bg-[#52D1DC] text-4xl'>Contacts</p>
                <div className="p-2 flex justify-center items-center">
                    <form className="" action="http://localhost:3000/message/search" method="get">
                        <button className="bg-[#15909f] hover:bg-[#127987] text-white font-bold py-2 px-4 rounded-full">
                            Create a new chat
                        </button>
                    </form>
                </div>
                <div className="h-full overflow-y-auto">
                    {conversations.map((c) => (
                        (c.users.length === 2 ? (
                            <div onClick={() => setCurrentChat(c)}>
                                {/* CHANGE CHAT NAME TO SOMETHING LIKE THIS: chatName={(c.users.filter((item: { id: string; }) => item.id !== user._id))[0].firstName} */}
                                <Conversation key={c._id} chatName={c.users.filter((u: { _id: string }) => u._id !== user._id)[0].firstName} photoURL={c.pic} users={c.users} currentUser={user._id} />
                            </div>
                        ) : (
                            <div onClick={() => setCurrentChat(c)}>
                                <Conversation key={c._id} chatName={c.chatName} photoURL={c.pic} users={c.users} currentUser={user._id} />
                            </div>
                        ))
                    ))}
                </div>
            </div>
            <div className="flex flex-col bg-[#212121] w-2/3 text-white">
                {currentChat ? (
                    <>
                        <div className="flex items-center py-2 bg-slate-900">
                            <img className="h-12 px-5 rounded-full" src={currentChat.pic}></img>
                            <div className=""> {currentChat.chatName} </div>
                        </div>

                        <div className="flex-grow overflow-y-auto">
                            {messages.map((m) => (
                                <div onLoad={() => getUserPicture(m.sender)}>
                                    <MessageBox key={m._id} content={m.content} own={m.sender === user._id} ownPic={userProfile.pic} otherPic={otherUserProfilePic} />
                                </div>
                            ))}
                        </div>
                        <div className='p-2'>
                            <form onSubmit={handleSubmit}>
                                <div className='flex items-stretch space-x-2'>
                                    <input
                                        type="text"
                                        placeholder='Message...'
                                        className="flex-grow text-black bg-white border p-2 rounded-lg"
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        value={newMessage}
                                    ></input>
                                    <button className="bg-[#52D1DC] p-2 text-white rounded-lg" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className='h-screen flex items-center justify-center'>
                        <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                            <div className="flex items-center">
                                <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                                <div>
                                    <p className="font-bold">No Chats Open</p>
                                    <p className="text-sm">Click on a chat to the left to open one up!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default MessagePage