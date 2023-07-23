import React from 'react';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { CartItem } from './CartItem';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { COffcanvas, COffcanvasHeader, COffcanvasTitle, COffcanvasBody, CButton, CCloseButton, CContainer, CListGroup, CListGroupItem } from '@coreui/react';
import './shoppingcart.css'; // Import the custom CSS file

type CartItem = {
  // CartItem type definition...
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
    <COffcanvas
      visible={isOpen}
      onHide={closeCart}
      placement="end"
    >
      <COffcanvasHeader>
        <COffcanvasTitle>Your Cart</COffcanvasTitle>
        <CCloseButton onClick={closeCart} /> {/* Apply custom style for CloseButton */}
      </COffcanvasHeader>
      <COffcanvasBody>
        <CContainer className="h-full flex flex-col"> {/* Use flex to make the container full height and display items in a column */}
          <CListGroup className="flex-grow overflow-auto"> {/* Allow the list group to take the remaining space */}
            {cartItems.map(item => (
              <CListGroupItem key={item.id} className="flex justify-between items-center">
                {/* Use flex to evenly distribute cart item content */}
                <CartItem {...item} />

              </CListGroupItem>
            ))}
          </CListGroup>
          {/* Add spacing between cart items and total price */}
          <div className="mt-4 font-bold">
            Total: {formatCurrency(totalPrice)}
          </div>
          <div className="mt-4 flex justify-end">
            <a href="/checkout">
              <button color="dark" className="font-bold py-2 px-4 rounded border-2 border-black hover:text-white hover:bg-black">
                Checkout
              </button>
            </a>
          </div>
        </CContainer>
      </COffcanvasBody>
    </COffcanvas>
  );
}
