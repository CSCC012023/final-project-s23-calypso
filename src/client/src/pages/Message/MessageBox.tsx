import React from 'react'
type MessageProps = {
    content: string;
    own: boolean;
}
const MessageBox = ({content, own}: MessageProps) => {
  return (
    <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        {own ? 
            (<div>
                <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-s max-w-xs mx-2 order-1 items-end">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-slate-800 text-white ">{content}</span></div>
                    </div>
                    <img src="https://wallpapers.com/images/hd/cute-girl-vector-art-profile-picture-jhbu3wt713zj2bti.jpg" alt="My profile" className="w-6 h-6 rounded-full order-2"></img>
                </div>
            </div>) : 
            (<div>
                <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-s max-w-xs mx-2 order-2 items-start">
                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{content}</span></div>
                    </div>
                    <img src="https://www.pngkey.com/png/full/503-5035055_a-festival-celebrating-tractors-profile-picture-placeholder-round.png" alt="Other profile" className="w-6 h-6 rounded-full order-1"></img>
                </div>
            </div>) }
    </div>
  )
}

export default MessageBox
