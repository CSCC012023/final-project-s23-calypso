import React from 'react'

type Props = {}

function BiddingPage({}: Props) {

  const previewArtPanel = {
    img: require("../assets/previewArt.jpg"),
    name: 'Preview Art',
  }

  const descriptionPanel = {
    description: 'Description',
    price: 'Current Price'
  }
  

  return (
    <div className="flex bg-darkestGrey text-white h-screen">
      <div className="w-1/12 h-1/12"></div>
      <div className="m-10 space-y-5 w-9/12">
        <h1 className="text-4xl font-semibold">Art Name</h1>
        <p className="text-2xl font-semibold">Creator</p>
        <div className="flex bg-darkGrey rounded-lg ">
          <img className="h-52 w-52 object-cover z-10" src={previewArtPanel.img} /> 
        </div>

        <div className="bg-darkGrey rounded-lg p-5 space-y-5">
          <p className="text-xl font-semibold">{descriptionPanel.description}</p>
          <p className="text-xl font-semibold">{descriptionPanel.price}</p>
        </div>

        <div className="bg-darkGrey rounded-lg p-5 space-y-5">
        </div>

      </div>

    </div>

  )
}

export default BiddingPage