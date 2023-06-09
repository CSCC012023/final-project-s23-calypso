import React from 'react'
import Menu from "../components/Menu"

type Props = {}

type User = {
  name: string,
  description: string,
  profilePic: string,
  banner: string
}

type Product = {
  image: string,
  title: string,
  price: number
}

function UserCard({name, description, profilePic, banner}: User) {
  return (
    <div className="flex flex-row h-64 rounded-3xl overflow-hidden justify-between relative">
      <img className="h-full w-full object-cover absolute z-0" src={banner} alt="banner"/>
      <div className="flex flex-row items-center overflow-hidden z-10">
        <img className="flex-shrink-0 w-32 h-32 mx-10 rounded-full border-2" src={profilePic} alt="Profile Picture" />
        <div className="h-full mt-40">
          <p className="font-mono text-7xl font-bold">{name}</p>
          <p className="font-sans text-xl break-words">{description}</p>
        </div>
      </div>
      <div className="flex flex-col justify-end p-8 z-10">
        <button className="w-32 h-10 border-2 rounded-3xl">
          Edit Profile
        </button> 
      </div>
    </div>
  );
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


function ProfilePage({}: Props) {
  const user = {
    name: "Tasif Hussain",   // need to limit this to 30 characters
    description: "Description", // also need to limit to some number of chars
    profilePic: require('../assets/panda.png'),
    banner: require('../assets/sampleUserBanner.jpg')
  }

  const product1 = {
    image: require('../assets/sampleProductImage.png'),
    title: "Things",
    price: 4.99
  }

  const product2 = {
    image: require('../assets/sampleProductImage2.jpg'),
    title: "More Things",
    price: 25.00
  }

  const product3 = {
    image: require('../assets/panda.png'),
    title: "Panda",
    price: 12.54
  }

  const product4 = {
    image: require('../assets/sampleUserBanner.jpg'),
    title: "Boat",
    price: 100
  }

  return (
    <div className="flex bg-darkestGrey text-white h-screen w-screen overflow-clip">
      <Menu />
      <div className="w-full overflow-y-auto p-10 space-y-10">
        <UserCard name={user.name} description={user.description} profilePic={user.profilePic} banner={user.banner}/>
        <p className="font-sans text-2xl font-bold">Products For Sale</p>
        <ProductCard image={product1.image} title={product1.title} price={product1.price} />
        <ProductCard image={product2.image} title={product2.title} price={product2.price} />
        <ProductCard image={product3.image} title={product3.title} price={product3.price} />
        <ProductCard image={product4.image} title={product4.title} price={product4.price} />
      </div>
    </div>
  );
}

export default ProfilePage