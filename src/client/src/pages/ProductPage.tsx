import React from 'react'
import ExampleNavBar from "../components/common/HeaderNavBar"

type Props = {}

type Product = {
  image: string,
  title: string,
  price: number
}

function ProductCard({image, title, price}: Product) {
  return (
    <a href="/product" className="flex flex-row h-32 bg-darkGrey rounded-lg space-x-10 overflow-hidden justify-between">
      <div className="flex flex-row space-x-5">
        <img className="flex-shrink-0 h-32 w-32" src={image} />
        <p className="text-4xl font-semibold my-2">{title}</p>
      </div>
      <div className="flex flex-col justify-end p-5">
        <p className="text-xl font-bold">$ {price}</p>
      </div>
    </a>
  );
}

function ProductPage({}: Props) {

  const previewArtPanel = {
    img: require("../assets/previewArt.jpg"),
    name: 'Preview Art',
  }

  return (
    //<div>ProductPage
    <div className="flex flex-col bg-darkestGrey text-white h-screen w-screen"> 
      <ExampleNavBar/>
      <div 
        style = {{
          width: '900px',
          height: '500px',
          //display: 'flex',
          //backgroundColor: 'white',
          border: '1px solid black',
          position: 'absolute',
          top: '250px',
          left: '250px',
          //justifyContent: 'center',
          //alignItems: 'center',
          
        }}
        >
          <img
            src= {previewArtPanel.img} //"image-url.jpg" // Replace with the actual image URL
            alt="Image"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          <div className= "text-white text-center mt-2">
            {previewArtPanel.name}
          </div>

          <div>
            
          </div>

        </div>





    </div>
  )
}

export default ProductPage