import React, { useEffect, useState } from "react";
import ExampleNavBar from '../components/common/HeaderNavBar';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from '../components/common/CartItem';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useParams } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';
import { SummaryItem } from '../components/common/SummaryItem';

type CartItem = {
  id: number;
  quantity: number;
  name: string,
  artist: string,
  style: string,
  price: number,
  href: string,
  imageSrc: string,
  imageAlt: string,
  date: number,
  rarity: string,
  medium: string,
  material: string,
}

type Props = {
  product: {
    id: number
    name: string,
    artist: string,
    style: string,
    price: number,
    href: string,
    imageSrc: string,
    imageAlt: string,
    date: number,
    rarity: string,
    medium: string,
    material: string,
  }
}

interface QueryParams {
  [key: string]: string[];
}


function PurchaseSummaryPage({}: any) {

  const { id } = useParams();
  // const descriptionText = 'Artwork ID:' + id;
  const { closeCart, cartItems } = useShoppingCart();
  const [storeItems, setItems] = useLocalStorage<CartItem[]>('shopping-cart', []);

    // Calculate the total price using cartItems directly
    const totalPrice = cartItems.reduce((total, cartItem) => {
      const item = cartItems.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
  return (
    <div className="flex-col bg-darkestGrey min-h-screen">
      <ExampleNavBar />
      <div className="text-white mt-24 mx-32">
        <h1 className="font-bold text-4xl">Cart Summary</h1>
        <p className="">Confirm your order details and checkout.</p>
      </div>
      <div className="flex flex-col mx-32">
        {/* Move the map function here and adjust the layout */}
        {storeItems.map(item => (
          <div className="my-1" key={item.id}>
            <SummaryItem {...item} />
          </div>
        ))}
        {/* Move the total and checkout button to the right */}
        <div className="flex justify-end text-white mt-4">
          <div className="font-bold">Your Total: {formatCurrency(totalPrice)}</div>
          <a href="/checkout" className="mx-4">
            <button className="font-bold py-2 px-4 rounded text-black bg-white border-2 border-black hover:text-white hover:bg-black hover:border-white">
              Checkout
            </button>
          </a>


        </div>
      </div>
    </div>
  );
}

export default PurchaseSummaryPage;
