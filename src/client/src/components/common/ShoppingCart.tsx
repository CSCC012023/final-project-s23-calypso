import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import React from 'react';
import { CartItem } from './CartItem';
import sampleProductImage2 from '../../assets/sampleProductImage2.jpg'

const storeItems = [
    {
        id: 1,
        name: 'Lost Girl',
        price: 24.99,
        imgUrl: sampleProductImage2,
    },
]

type ShoppingCartProps = {
    isOpen: boolean;
}

  export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
    return (
      <Offcanvas keyboard={true} scroll={true} show={isOpen} onHide={closeCart} placement="end">
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
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find(i => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              )}
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    )
  }