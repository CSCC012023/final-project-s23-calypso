import React from 'react'
import Menu from "../components/Menu"
import { useRef, useState } from 'react'
import { XIcon } from '@heroicons/react/outline'

type Props = {}

type UserCardProps = {
  name: string,
  description: string,
  profilePic: string,
  banner: string,
  handleEditClick: any
}

type ProductCardProps = {
  image: string,
  title: string,
  price: number
}

type EditProfilePopupProps = {
  name: string,
  description: string,
  handleApplyClick: any,
  handleCancelClick: any
}

function UserCard({name, description, profilePic, banner, handleEditClick}: UserCardProps) {
  return (
    <div className="flex flex-row h-64 rounded-3xl overflow-hidden justify-between relative">
      <img className="h-full w-full object-cover absolute z-0" src={banner} alt={require('../assets/sampleUserBanner.jpg')}/>
      <div className="flex flex-row items-center overflow-hidden z-10">
        <img className="flex-shrink-0 w-32 h-32 mx-10 rounded-full border-2" src={profilePic} alt={require('../assets/sampleProfilePicture1.png')} />
        <div className="h-full mt-40">
          <p className="font-mono text-7xl font-bold">{name}</p>
          <p className="font-sans text-xl break-words">{description}</p>
        </div>
      </div>
      <div className="flex flex-col justify-end p-8 z-10">
        <button className="w-40 h-12 rounded-3xl border-2 border-gray-300 hover:border-white bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-lg font-mono text-gray-300 hover:font-semibold hover:text-white focus:outline-none focus:ring focus:ring-violet-300" onClick={handleEditClick}>
          Edit Profile
        </button> 
      </div>
    </div>
  );
}

function ProductCard({image, title, price}: ProductCardProps) {
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

function EditProfilePopup({name, description, handleApplyClick, handleCancelClick}: EditProfilePopupProps) {
  const [nameError, setNameError] = useState("");
  const [desError, setDesError] = useState("");
  const [picError, setPicError] = useState("");
  const [bannerError, setBannerError] = useState("");
  const inputName = useRef(null);
  const inputDes = useRef(null);
  const inputProfilePic = useRef(null);
  const inputBanner = useRef(null);

  function checkNameValidity(e: React.ChangeEvent<HTMLInputElement>) {
    let name = e.target.value;
    if (name.length > 25) {
      setNameError("Name must be 25 characters or less");
    } else if (name.length == 0) {
      setNameError("Name cannot be empty");
    } else {
      setNameError("");
    }
  }

  function checkDescValidity(e: React.ChangeEvent<HTMLInputElement>) {
    let des = e.target.value;
    if (des.length > 300) {
      setDesError("Description must be 300 characters or less");
    } else {
      setDesError("")
    }
  }

  function checkUrlValidity(e: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<any>) {
    const url = e.target.value;

    if (url.length == 0) {
      setPicError("");
    } else {
      const img = new Image();
      img.src = url;
      img.onerror = () => setState("Please enter a valid image URL");
      img.onload = () => setState("");
    }
  }

  function doNothing() {

  }

  return (
    <div className="fixed inset-0 flex flex-col items-center z-[100] p-20 bg-white bg-opacity-50">
      <div className="bg-white shadow-lg flex flex-col items-center rounded-3xl flex-shrink-0 flex-grow-0">
        <div className="flex flex-row justify-between items-center p-4 w-full">
          <label className="font-mono font-semibold text-xl text-black">Edit Profile</label>
          <button className="h-8 w-8 rounded-full p-1 bg-gray-300 hover:bg-gray-400" onClick={handleCancelClick}>
            <XIcon color="#314555"/>
          </button>
        </div>
        <hr className="bg-gray-700 w-full h-1"/>
        <div className="space-y-5 flex flex-col items-end p-6">
          <div className="flex flex-col justify-center items-end">
            <div className="space-x-5">
              <label className="text-black text-lg font-mono">Name:</label>
              <input className="bg-grey-50 border border-grey-300 text-black rounded-lg p-1" ref={inputName} defaultValue={name} onBlur={e => checkNameValidity(e)} onChange={e => setNameError("")}/>
            </div>
            {nameError != "" ? (<p className="font-mono text-black">{nameError}</p>): null}
          </div>
          <div className="flex flex-col justify-center items-end">
            <div className="space-x-5">
              <label className="text-black text-lg font-mono">Description:</label>
              <input className="bg-grey-50 border border-grey-300 text-black rounded-lg p-1" ref={inputDes} defaultValue={description} onBlur={e => checkDescValidity(e)} onChange={e => setDesError("")}/>
            </div>
            {desError != "" ? (<p className="font-mono text-black">{desError}</p>): null}
          </div>
          <div className="flex flex-col justify-center items-end">
            <div className="space-x-5">
              <label className="text-black text-lg font-mono">Profile Pic:</label>
              <input className="bg-grey-50 border border-grey-300 text-black rounded-lg p-1" type="url" ref={inputProfilePic} placeholder="URL" onBlur={e => checkUrlValidity(e, setPicError)} onChange={e => setPicError("")}/>
            </div>
            {picError != ""? (<p className="font-mono text-black">{picError}</p>) : null}
          </div>
          <div className="flex flex-col justify-center items-end">
            <div className="space-x-5">
              <label className="text-black text-lg font-mono">Banner:</label>
              <input className="bg-grey-50 border border-grey-300 text-black rounded-lg p-1" type="url" ref={inputBanner} placeholder="URL" onBlur={e => checkUrlValidity(e, setBannerError)} onChange={e => setBannerError("")}/>
            </div>
            {bannerError != ""? (<p className="font-mono text-black">{bannerError}</p>) : null}
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-5 w-full pb-8 px-8 pt-2">
          <button className="w-full h-14 border-2 border-black rounded-3xl text-black hover:bg-gray-300 active:bg-gray-400"
            onClick={(nameError == "" && desError == "" && picError == "" && bannerError == "") ? (() => handleApplyClick(inputName, inputDes, inputProfilePic, inputBanner)): doNothing}>
            <label className="text-lg font-mono font-semibold">Apply Changes</label>
          </button>
        </div>
      </div>
    </div>
  );
}


function ProfilePage({}: Props) {
  const user1 = {
    name: "Tasif Hussain",   // need to limit this to 25 characters
    description: "Description", // need to limit this to 300 characters
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

  const [user, setUser] = useState(user1);
  const [editIsOpen, setEditIsOpen] = useState(false);

  function handleApplyClick(inputName: React.MutableRefObject<any>, inputDes: React.MutableRefObject<any>, inputProfilePic: React.MutableRefObject<any>, inputBanner: React.MutableRefObject<any>) {
    const name = inputName.current.value;
    const des = inputDes.current.value;
    const pic = inputProfilePic.current.value;
    const banner = inputBanner.current.value;
  
    setUser(prevUser => {  
      const user = {
        name: name,
        description: des,
        profilePic: (pic.length == 0) ? (prevUser.profilePic) : (pic),
        banner: (banner.length == 0) ? (prevUser.banner) : (banner)
      };

      return user;
    });
    setEditIsOpen(false);
  }

  function handleEditClick() {
    setEditIsOpen(true);
  }

  return (
    <div className="flex bg-darkestGrey text-white h-screen w-screen overflow-clip">
      <Menu />
      <div className="w-full overflow-y-auto p-10 space-y-10">
        <UserCard name={user.name.length > 0 ? user.name : "-"} description={user.description} profilePic={user.profilePic} banner={user.banner} handleEditClick={() => handleEditClick()} />
        <p className="font-sans text-2xl font-bold">Products For Sale</p>
        <ProductCard image={product1.image} title={product1.title} price={product1.price} />
        <ProductCard image={product2.image} title={product2.title} price={product2.price} />
        <ProductCard image={product3.image} title={product3.title} price={product3.price} />
        <ProductCard image={product4.image} title={product4.title} price={product4.price} />
      </div>
      {editIsOpen ? <EditProfilePopup name={user.name} description={user.description} handleApplyClick={handleApplyClick} handleCancelClick={() => setEditIsOpen(false)} /> : null}
    </div>
  );
}

export default ProfilePage