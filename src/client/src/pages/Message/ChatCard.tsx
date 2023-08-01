import React, { useState } from 'react'

interface Props {
  chat: {
    id: string,
    name: string,
    pic: string,
    users: {
      id: string,
      name: string,
      username: string,
      pic: string
    }[],
    lastMessage: string
    isOnline: boolean
  }
}

function ChatCard({ chat }: Props) {
  return (
    <div className="flex flex-row space-x-3 items-center">
      <div className="flex relative">
        <img src={chat.pic} alt={chat.name} className="w-12 h-12 rounded-full" />
        {chat.isOnline && <div className="absolute right-0 bottom-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
      </div>
      <div className="flex-col hidden md:flex">
        <p className="flex font-semibold text-md text-ellipsis overflow-hidden whitespace-nowrap justify-start">{chat.name}</p>
        <p className="flex font-light text-sm text-ellipsis overflow-hidden whitespace-nowrap justify-start">{chat.lastMessage}</p>
      </div>
    </div>
  );
}

export default ChatCard;