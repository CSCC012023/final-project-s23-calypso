import React from 'react'
import { useState } from 'react'

import EditProfilePopup from './EditProfilePopup'

interface Props {
  user: {
    id: string,
    username: string,
    description: string,
    pic: string,
    banner: string
  },
  updateUser: Function
}

function UserCard({ user, updateUser }: Props) {
  const [profileEditIsOpen, setProfileEditIsOpen] = useState(false);

  function handleApplyClick(name: string, des: string, pic: string, banner: string) {
    const user1 = {
      id: user.id,
      username: name,
      description: des,
      pic: (pic.length === 0 ? user.pic : pic),
      banner: (banner.length === 0 ? user.banner : banner)
    }
    updateUser(user1);
    setProfileEditIsOpen(false);
  }

  return (
    <div className="flex flex-row h-64 rounded-3xl overflow-hidden justify-between relative shadow-lg">
      <img className="h-full w-full object-cover absolute z-0" src={user.banner} alt="User Banner" />
      <div className="flex flex-row items-center overflow-hidden z-10">
        <img className="flex-shrink-0 w-32 h-32 mx-10 rounded-full border-2" src={user.pic} alt="Profile Picture" />
        <div className="h-full mt-40">
          <p className="font-mono text-7xl font-bold text-white">{user.username}</p>
          <p className="font-sans text-xl break-words text-white">{user.description}</p>
        </div>
      </div>
      <div className="flex flex-col justify-end p-8 z-10">
        <button className="w-12 h-12 lg:w-40 rounded-full justify-center items-center shadow-md bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 active:from-violet-800 active:to-blue-800 text-lg font-mono text-gray-300 font-semibold hover:text-white focus:outline-none focus:ring focus:ring-violet-300"
          onClick={() => setProfileEditIsOpen(true)}>
          <p className="hidden lg:inline-block">Edit Profile</p>
          <div className="flex lg:hidden justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
          </div>
        </button>
      </div>
      {profileEditIsOpen ? <EditProfilePopup name={user.username} description={user.description} handleApplyClick={handleApplyClick} handleCancelClick={() => setProfileEditIsOpen(false)} /> : null}
    </div>
  );
}

export default UserCard;