import React, { useEffect, useState } from 'react'
import axios from 'axios';
function MessagePage (){
    const [chats, setChats] = useState<any[]>([])
    const fetchChats = async () => {
        const {data} = await axios.get("../api/chat");
        setChats(data);
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return(
        <div className="flex h-screen">
            <div className="bg-[#121212] w-1/3 text-white">
                <p className='p-2 text-center bg-[#52D1DC] text-4xl'>Contacts</p>
            </div>
            <div className="flex flex-col bg-[#212121] w-2/3 p-2 text-white">
                <div className='flex-grow'>
                    {chats.map((chat) => (
                        <div key={chat._id}>{chat.chatName}</div>
                    ))}
                </div>
                <div className='flex gap-2'>
                    <input type="text" placeholder='Message...' className="text-black bg-white flex-grow border p-2 rounded-lg"></input>
                    <button className="bg-[#52D1DC] p-2 text-white rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
}
export default MessagePage