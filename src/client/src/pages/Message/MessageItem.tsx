import React from 'react'

interface Props {
  message: {
    content: string,
    sender: {
      id: string,
      name: string,
      pic: string
    },
    createdAt: string
  },
  isMine: boolean
}

function MessageItem({ message, isMine }: Props) {
  return (
    isMine ? (
      <div className="flex flex-col w-full items-end">
        <div className="flex flex-row space-x-2 items-center">
          <p className="flex text-md text-ellipsis overflow-hidden whitespace-nowrap justify-start">{message.sender.name}</p>
          <img src={message.sender.pic} alt={message.sender.name} className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex w-full px-12 justify-end">
          <div className="relative text-sm bg-blue-200 px-3 py-2 shadow rounded-xl min-w-[10rem] max-w-[66%]">
            {message.content}
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-col w-full items-start">
        <div className="flex flex-row space-x-2 items-center">
          <img src={message.sender.pic} alt={message.sender.name} className="w-12 h-12 rounded-full" />
          <p className="flex text-md text-ellipsis overflow-hidden whitespace-nowrap justify-start">{message.sender.name}</p>
        </div>
        <div className="flex w-full px-12 justify-start">
          <div className="relative text-sm bg-gray-200 px-3 py-2 shadow rounded-xl min-w-[10rem] max-w-[66%]">
            {message.content}
          </div>
        </div>
      </div>
    )
  );
}

export default MessageItem;