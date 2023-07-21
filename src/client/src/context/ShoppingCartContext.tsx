import { useState, useContext, createContext, ReactNode } from 'react';
import React from 'react';
import { ShoppingCart } from '../components/common/ShoppingCart';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Define the type for the props of the ShoppingCartProvider component
type ShoppingCartProviderProps = {
    children: ReactNode;
}

type CartItem = {
    id: number;
    quantity: number;
}

type ProductItem = {
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

type ShoppingCartContext = {
    getQuantity: (id: number) => number;
    addItem: (id: number) => void;
    removeItem: (id: number) => void;
    openCart: () => void;
    closeCart: () => void;
    cartQuantity: number;
    cartItems: CartItem[];
}

// Create a new context for the shopping cart data
const ShoppingCartContext = createContext({} as ShoppingCartContext)

// Custom hook to access the shopping cart data from the context
export function useShoppingCart() {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
    }
    return context;
}

// ShoppingCartProvider component responsible for providing the shopping cart data to its children
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);
    const [isOpen, setIsOpen] = useState(false);
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    function getQuantity(id: number) {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }

    function addItem(id: number) {
        setCartItems(prev => {
            if (prev.find(item => item.id === id)) {
                return prev; // Item already exists in the cart, do not add it again
            } else {
                return [...prev, { id, quantity: 1 }];
            }
        });
    }

    function removeItem(id: number) {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === id);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    return prev.filter(item => item.id !== id);
                } else {
                    return prev.map(item => {
                        if (item.id === id) {
                            return { ...item, quantity: item.quantity - 1 };
                        } else {
                            return item;
                        }
                    });
                }
            }
            return prev;
        });
    }
    return (
        // Provide the shopping cart data through the context
        <ShoppingCartContext.Provider value={{ getQuantity, addItem, removeItem, openCart, closeCart, cartItems, cartQuantity }}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    );
}