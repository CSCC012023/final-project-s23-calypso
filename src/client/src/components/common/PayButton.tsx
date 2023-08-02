import axios from 'axios';
import {useSelector} from 'react-redux';
import React from 'react';

const YOUR_DOMAIN = 'http://localhost:3000';

const PayButton = ({ShoppingCartItems}:any) =>{
    const handleCheckout = () =>{
        console.log(ShoppingCartItems);
    };

    return (
        <>
        <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4" onClick={()=> handleCheckout()}>Checkout</button>
        </>
        
    );
};

export default PayButton;
