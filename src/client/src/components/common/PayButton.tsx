import axios from 'axios';
import {useSelector} from 'react-redux';
import React from 'react';
import { useResolvedPath } from 'react-router-dom';

const YOUR_DOMAIN = 'http://localhost:3000';

const PayButton = () =>{
    // const user = useSelector((state:any) => state.auth)
    // const handleCheckout = () =>{
    //     console.log(ShoppingCartItems);
    //     console.log(`${YOUR_DOMAIN}/stripe/create-checkout-session`);

    //     axios.post(`${YOUR_DOMAIN}/api/stripe/create-checkout-session`,{
    //         ShoppingCartItems,
    //         userId:'1'

    //     }).then((res) =>{
    //         if(res.data.url){
    //             window.location.href = res.data.url
    //         }
    //     }).catch((err) =>console.log(err.message));
    // };

    return (
        <form action="http://localhost:4242/create-checkout-session" method="POST">
            <button type="submit">
            Checkout
            </button>
        </form>
        
    );
};

export default PayButton;