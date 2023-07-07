import React from 'react';
import ExampleNavBar from '../../components/common/HeaderNavBar';
import '../../App.css';
import { isWhiteSpaceLike } from 'typescript';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function SuccessfulTransactionPage() {

        return(
                <div className="flex flex-col bg-darkestGrey h-screen w-screen">

                        <ExampleNavBar/>
                        <h1 className="section-heading">Transaction Completed!</h1>
                        <h2 className = "section-heading">Your purchase will be in your library momentarily!</h2>
        
                </div>
 
                
        );
}
export default SuccessfulTransactionPage;