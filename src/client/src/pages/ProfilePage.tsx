import React from 'react'
import { useState, useEffect } from 'react'

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

const initUser = {
  id: '0',
  username: 'username',
  description: 'description',
  pic: require('../assets/sampleProfilePicture1.png'),
  banner: require('../assets/sampleLargeProductImage2.jpg')
}

function ProfilePage() {
  const [user, setUser] = useState<any>(initUser);
  const [products, setProducts] = useState<any[]>(products1);

  function updateUser(user: { id: string, username: string, description: string, pic: any, banner: any }) {
    // update user in DB
    const request = new Request(`http://localhost:8080/api/v0/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    });

    fetch(request)
      .then(async response => {
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          window.alert('something went wrong');
        }
      });
  }

  function updateProducts(products: { id: number, name: string, artist: string, style: string, price: number, href: string, imageSrc: any, imageAlt: string }[]) {
    // update products in DB
    setProducts(products);
  }

  function getUserByID(id: string) {
    fetch(`http://localhost:8080/api/v0/users/${id}`)
      .then(async response => {
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          window.alert('something went wrong');
        }
      });
  }

  useEffect(() => {
    // GET user with id=1
    getUserByID('1');
  }, []);

  return (
    <div className="flex flex-col bg-darkestGrey">
      <HeaderNavBar />
      <div className="w-full p-10 space-y-10">
        <UserCard user={user} updateUser={updateUser} />
        <ProductList products={products} updateProducts={updateProducts} />
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;