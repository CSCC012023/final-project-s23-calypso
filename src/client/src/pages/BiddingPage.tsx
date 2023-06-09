import React from 'react'

type Props = {}

function BiddingPage({}: Props) {

  const previewArtPanel = {
    img: require("../assets/previewArt.jpg"),
    name: 'Preview Art',
  }

  

  return (
    <div className="flex bg-darkestGrey text-white h-screen">
      <div className="w-1/12 h-1/12"></div>
      <div className="m-10 space-y-5 w-9/12">
        <h1 className="text-4xl font-semibold">Art Name</h1>
        <p className="text-2xl font-semibold">Creator</p>
        <div className="flex bg-darkGrey rounded-lg">
          <img className="h-52 w-52 object-cover z-10" src={previewArtPanel.img} />
          <p className="text-5xl font-semibold">{previewArtPanel.name}</p>

        </div>
      </div>

    </div>

  )
}

export default BiddingPage