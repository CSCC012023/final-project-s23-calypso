import React from 'react'
import Menu from '../../components/Menu'

type Props = {}

function BiddingPage({}: Props) {

  const previewArtPanel = {
    img: require("../../assets/previewArt.jpg"),
    name: 'Preview Art',
  }

  const creatorPanel = {
    img: require("../../assets/sampleProfilePicture1.png"),
  }

  const descriptionPanel = {
    description: 'Description:',
    price: 'Current Price:'
  }
  

  return (
    <div className="flex bg-darkestGrey text-white overflow-clip">
      <Menu />
      <div>
        <button className="bg-darkGrey text-white text-center ml-8 mt-8 font rounded-lg text-2xl p-5 space-y-5">{"<"}</button>
      </div>
      <div className="bg-darkestGrey text-white h-screen w-3/4 mx-auto my-20 space-y-5">
        <h1 className="text-4xl font-semibold">Art Name</h1>
        <div className="flex items-center">
          <img className="h-1/12 w-1/12 rounded-full" src={creatorPanel.img}/>
          <p className="text-2xl font-semibold mx-8">Creator</p>
        </div>
        
        <img className="h-1/3 w-full object-cover" src={previewArtPanel.img} />
        <div className="bg-darkGrey rounded-lg p-5 space-y-5">
          <p className="text-xl font-semibold mb-40">{descriptionPanel.description}</p>
          <p className="text-xl font-semibold">{descriptionPanel.price}</p>
        </div>
        <div className="rounded-lg p-5 space-y-5">
          <div className="flex justify-between space-x-16 ml-20 mr-40">
            <button className="bg-white text-black text-center rounded-sm p-5 space-y-5">Purchase for myself</button>
            <a href="/bidding/purchase" className="bg-white text-black text-center rounded-sm p-5 space-y-5">Place Bid</a>
            <button className="bg-white text-black text-center rounded-sm p-5 space-y-5">Purchase as a gift</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BiddingPage