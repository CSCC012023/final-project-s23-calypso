import { useContext, createContext, ReactNode } from 'react';
import React from 'react';

// Define the type for the props of the ShoppingCartProvider component
type ShoppingCartProviderProps = {
    children: ReactNode;
}

// Create a new context for the shopping cart data
const ShoppingCartContext = createContext({})

// Custom hook to access the shopping cart data from the context
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

// ShoppingCartProvider component responsible for providing the shopping cart data to its children
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    return (
        // Provide the shopping cart data through the context
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}