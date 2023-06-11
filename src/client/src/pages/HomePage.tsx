import React from 'react'
import HeaderNavBar from '../components/common/HeaderNavBar'
import LargeStoryCard from '../components/home/LargeStoryCard'

type Props = {}

function HomePage({}: Props) {
  return (
    <div className="bg-darkestGrey h-screen" >
      <div className="mb-12">
        <HeaderNavBar />
      </div>
      
      {/* For full screen width card */}
      {/* <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">{<LargeStoryCard />}</div>
      </div> */}

      {/* For sectioned middle width card */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">{<LargeStoryCard />}</div>
      </div>
      
    </div>
  );
}

export default HomePage