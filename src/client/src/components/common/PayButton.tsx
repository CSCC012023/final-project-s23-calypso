import axios from 'axios';
import {useSelector} from 'react-redux';
import React from 'react';
import { useResolvedPath } from 'react-router-dom';

const YOUR_DOMAIN = 'http://localhost:3000';

const PayButton = ({ShoppingCartItems}:any) =>{
    const user = useSelector((state:any) => state.auth)
    const handleCheckout = () =>{
        console.log(ShoppingCartItems);
        console.log(`${YOUR_DOMAIN}/stripe/create-checkout-session`);

        axios.post(`${YOUR_DOMAIN}/api/stripe/create-checkout-session`,{
            ShoppingCartItems,
            userId:'1'

        }).then((res) =>{
            if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((err) =>console.log(err.message));
    };

    return (
        <>
        <button color="dark" className="font-bold py-2 px-4 rounded border-2 border-black hover:text-white hover:bg-black" onClick={()=> handleCheckout()}>Checkout</button>
        </>
        
    );
};

export default PayButton;