import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import React from 'react';
import { CartItem } from './CartItem';
import sampleProductImage2 from '../../assets/sampleProductImage2.jpg';
import { useLocalStorage } from '../../hooks/useLocalStorage';


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

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  
  const { closeCart, cartItems } = useShoppingCart();
  const [storeItems, setItems] = useLocalStorage<CartItem[]>('shopping-cart', []);
    // Calculate the total price using cartItems directly
    const totalPrice = cartItems.reduce((total, cartItem) => {
      const item = cartItems.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
  return (
    <Offcanvas
      keyboard={true}
      scroll={true}
      show={isOpen}
      onHide={closeCart}
      placement="end"
    >
      <Offcanvas.Header closeButton={true}>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ml-auto font-bold text-xl">
            Total{" "}
            {formatCurrency(totalPrice
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
      <div className="flex justify-end">
        <a href="/checkout">
          <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4">
            Checkout
          </button>
        </a>
      </div>
    </Offcanvas>
  );
}
