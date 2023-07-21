import axios from 'axios';
import React, { useEffect, useState } from 'react'
type ConversationProps = {
  chatName: string;
  photoURL: string;
  users: Array<Object>;
  currentUser: string
};
const Conversation = ({chatName, photoURL, users, currentUser}: ConversationProps) => {
  const [user, setUser] = useState(null);

  // IMPLEMENT WHEN USERS CAN LOGIN
  useEffect(() => {
    const friendId = users.find((m: any)=>m !== currentUser)
    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (error){
        console.log(error);
      }
    }
  }, [])

  return (
        < div className="p-2 flex items-center space-x-4 hover:bg-slate-900">
          {/* change this */}
            <img className="flex-shrink-0 w-8 h-8 rounded-full" src={photoURL}></img>
            <span className="">{chatName}</span>
        </div>
  )
}

export default Conversation
