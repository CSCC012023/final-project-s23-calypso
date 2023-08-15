import React from 'react';
import ExampleNavBar from '../../components/common/HeaderNavBar';
import Footer from '../../components/common/Footer';
import '../../App.css';


function SuccessfulTransactionPage() {
        return (
          <div className="flex flex-col bg-darkestGrey h-screen w-screen justify-between">
            <ExampleNavBar />
            <div className="text-content flex flex-col justify-center items-center flex-grow">
              <h1 className="section-heading">Transaction Incomplete</h1>
              <h2 className="section-heading">An error occured while trying to complete your transaction. Please try again later.</h2>
            </div>
            <Footer />
          </div>
        );
      }
      export default SuccessfulTransactionPage;
      
