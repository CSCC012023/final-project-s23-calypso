import axios from 'axios';
import React, { useEffect, useState } from 'react'


const MessageSearch = () => {
    const myUser = "64b451c1804386e1e8f81a35";
    const [allUsers, setAllUsers] = useState<any[]>([]);
    const [chatName, setChatName] = useState('');
    const [chatUsers, setChatUsers] = useState<any[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get("../api/chat/users");
                setAllUsers(res.data.users.filter((user: { _id: string; }) => user._id !== myUser));
            } catch (error){
                console.log(error);
            }
        }
        getUsers();
    }, []);
    const [checked, setChecked] = useState(new Array(allUsers.length).fill(false));
    const handleChange = (index: number, email: string) => {
        const firstItem = allUsers.filter((user: { email: string; }) => user.email === email);
        setChatUsers([firstItem[0], ...chatUsers]);
        //const filteredItems = allUsers.filter((item) => item.email !== email);
        //setAllUsers([firstItem[0], ...filteredItems]);
        //const newChecked = new Array(checked.length);
        //newChecked[0] = true;
        //newChecked[index] = false;
        //const filteredChecked = checked.filter((item) => item.email !== email);
        //checked[index] = false;
        //checked[index] = true;
        //setChecked([checked]);
    };
    const createChat = async () => {
        try {
            if (chatUsers.length == 1){
                try{
                    const res = await axios.post("../api/chat/", {email: chatUsers[0].email});
                    alert("chat created successfully")
                }catch(error){
                    alert("Failed to create chat")
                }
            }
            if (chatUsers.length > 1){
                try{
                    const userEmails = new Array(chatUsers.length);
                    for (var i = 0; i < chatUsers.length; i++){
                        userEmails[i] = chatUsers[i].email;
                    }
                    if (chatName === null){
                        setChatName("New Group Chat");
                    }
                    const res = await axios.post("../api/chat/group", {users: userEmails, name: chatName});
                    alert("chat created successfully")
                }catch(error){
                    alert("Failed to create chat")
                }
            }

        } catch (error){
            alert("Failed to create chat")
        }
    }

    const handleChatName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setChatName(e.target.value);
    };

    return (
        <div className="h-screen" style={{backgroundImage: `url(https://wallpapers.com/images/hd/simple-blue-aesthetic-smooth-texture-iv9233jyyijg7r2g.jpg`}}>
        <div className="h-screen flex items-center justify-center">
            <div className="relative w-full max-w-lg max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Create Chat
                        </h3>
                    </div>
                    <form className="w-full max-w-sm">
                        <div className="flex items-center border-b border-teal-500 p-2">
                            <input className="p-2 appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="Group Chat Name"
                                aria-label="Full name"
                                onChange={handleChatName}>
                            </input>
                        </div>
                    </form>
                    <form>   
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search User..."></input>
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-teal-500 hover:bg-teal-600 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                        </div>
                    </form>
                    <ul className="toppings-list p-2">
                        {allUsers.map(({ firstName, lastName, email }, index) => {
                        return (
                            <li key={index}>
                                <div className="user-list">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={firstName}
                                        value={checked[index]}
                                        checked={checked[index]}
                                        onChange={(e) => handleChange(index, email)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {firstName} {lastName}
                                        <p className=' inline text-xs float-right'> {email}</p>
                                    </label>
                                </div>
                            </li>
                        );
                        })}
                    </ul>
                    <div className="flex justify-center items-center p-2">
                        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 border border-teal-600 hover:border-transparent rounded font-medium rounded-lg"
                        onClick={() => {
                            createChat()
                            window.location.replace('http://localhost:3000/message/');
                        }}>
                            Create Chat
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MessageSearch
