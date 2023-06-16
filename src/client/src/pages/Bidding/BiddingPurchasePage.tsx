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
    <div className="flex bg-darkestGrey text-white h-screen overflow-clip">
      <Menu />
      <div className="bg-darkestGrey text-white h-screen w-full px-10 mx-auto py-10 space-y-5 overflow-scroll">
      <div>
        <a href="/bidding" className="bg-darkGrey text-white text-center font rounded-lg text-2xl px-5 py-3 space-y-5">{"<"}</a>
      </div>
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
          <p className="text-xl font-semibold"> Bid Amount</p>
          <div className="flex justify-between">
            <input className="text-black rounded-lg p-5 space-y-5" type="text" placeholder="Enter Bid Amount" pattern="[0-9]+"/>
            <button className="bg-white text-black text-center rounded-sm p-5 space-y-5">Place Bid</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BiddingPage
