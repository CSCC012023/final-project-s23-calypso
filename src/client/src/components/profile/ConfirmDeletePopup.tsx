import React from 'react'

interface Props {
  name: string
  artist: string,
  handleDeleteClick: any,
  handleCancelClick: any
}

function ConfirmDeletePopup({ name, artist, handleDeleteClick, handleCancelClick }: Props) {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 z-[100] h-screen w-screen flex items-center justify-center">
      <div className="bg-darkGrey shadow-lg flex flex-col items-center rounded-xl overflow-hidden">
        <div className="flex flex-row justify-between items-center p-4 w-full space-x-5">
          <label className="font-semibold text-2xl text-white">Are You Sure?</label>
          <button className="h-8 w-8 rounded-full p-1 bg-gray-300 hover:bg-gray-400 active:bg-gray-600" onClick={handleCancelClick}>
            <svg color="#314555" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* <hr className="bg-gray-300 w-full h-1" /> */}
        <div className="flex flex-row justify-center items-center pt-6 pb-3 px-4 space-x-2">
          <p className="text-white text-xl">You are about to delete:</p>
          <p className="text-white text-xl font-semibold">{name + ' - ' + artist}</p>
        </div>
        <div className="flex flex-row items-center justify-center pb-6 pt-3 space-x-4">
          <button className="flex w-24 h-14 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full items-center justify-center font-bold text-white text-xl"
            onClick={handleDeleteClick}>
            YES
          </button>
          <button className="flex w-24 h-14 bg-gray-400 hover:bg-gray-500 active:bg-gray-400 rounded-full items-center justify-center font-bold text-white text-xl"
            onClick={handleCancelClick}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeletePopup;