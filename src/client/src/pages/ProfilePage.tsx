import React from 'react'
import { useState } from 'react'

import UserCard from "../components/profile/UserCard"
import ProductList from "../components/profile/ProductsList"

import HeaderNavBar from "../components/common/HeaderNavBar"
import Footer from "../components/common/Footer"

const products1 = [
  {
    id: 1,
    name: 'Lost Girl',
    artist: 'Jennie Li',
    style: 'Oil on canvas',
    price: 500,
    href: 'product',
    imageSrc: require('../assets/sampleProductImage2.jpg'),
    imageAlt: 'LOST GIRL - JENNIE LI',
  },
  {
    id: 2,
    name: 'Dystopian Future',
    artist: 'Markus Lawerence',
    style: 'Digital',
    price: 3000,
    href: 'product',
    imageSrc: require('../assets/sampleLargeProductImage2.jpg'),
    imageAlt: 'DYSTOPIAN FUTURE - MARKUS LAWERENCE',
  },
  {
    id: 3,
    name: 'Fox-Masked Boy',
    artist: 'Natalie Hall',
    style: 'Watercolor on paper',
    price: 50,
    href: 'product',
    imageSrc: require('../assets/sampleProfilePicture1.png'),
    imageAlt: 'FOX MASKED BOY - NATALIE HALL',
  },
  {
    id: 4,
    name: 'Panda',
    artist: 'Panda Man',
    style: 'Sculpture',
    price: 900,
    href: 'product',
    imageSrc: require('../assets/panda.png'),
    imageAlt: 'PANDA - PANDA MAN',
  }
];

const user1 = {
  name: "Username",   // need to limit this to 25 characters
  description: "Description", // need to limit this to 300 characters
  profilePic: require('../assets/sampleProfilePicture1.png'),
  banner: require('../assets/sampleLargeProductImage2.jpg')
};

function ProfilePage() {
  const [user, setUser] = useState(user1);
  const [products, setProducts] = useState(products1);

  function updateUser(user: {name: string, description: string, profilePic: any, banner: any}) {
    // update user in mongoDB
    setUser(user);
  }

  function updateProducts(products: Array<{id: number, name: string, artist: string, style: string, price: number, href: string, imageSrc: any, imageAlt: string}>) {
    // update products in mongoDB
    setProducts(products);
  }

  return (
    <div className="flex flex-col bg-darkestGrey">
      <HeaderNavBar />
      <div className="w-full p-10 space-y-10">
        <UserCard user={user} updateUser={updateUser}/>
        <ProductList products={products} updateProducts={updateProducts}/>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage