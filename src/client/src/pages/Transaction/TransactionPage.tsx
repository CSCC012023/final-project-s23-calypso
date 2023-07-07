import React from 'react';
import ExampleNavBar from '../../components/common/HeaderNavBar';
import '../../App.css';
import { isWhiteSpaceLike } from 'typescript';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SuccessfulTransactionPage from './SuccessfulTransactionPage';


type Props = {};

interface TextInputProps {
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder }) => {
  const [text, setText] = React.useState('');
  const placeholderLength = placeholder.length;
  const inputWidth = placeholderLength * 10; // Adjust the multiplier as needed

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder={placeholder}
      style={{ width: `${inputWidth}px` }}
    />
  );

};

const TransacationPage: React.FC<Props> = () => {
  const previewArtPanel = {
    img: require('../../assets/previewArt.jpg'),
    name: 'Preview Art',
  };

  return (
    <div className="flex flex-col bg-darkestGrey h-screen w-screen">
      <ExampleNavBar />
      <div className="container">
        <div className="section-left">
          <div className="content-container">
            <h1 className="section-heading">Shopping Cart</h1>
            <div className="image-container">
              <img
                src={previewArtPanel.img}
                alt="Image"
                style={{ width: '50%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h2 className="section-heading">Total: $4999.99</h2>
          </div>
        </div>
        <div className="section-right">
          <h1 className="section-heading">Enter Payment Details</h1>
          <div className = "input-container">
            <TextInput placeholder="Name as it appears on card"/>

          </div>
          <div className = "input-container">
            <TextInput placeholder="Credit Card Number"/>
            <TextInput placeholder="MM/YY    "/>
            <TextInput placeholder="CVV    "/>
          </div>
          <div className = "input-container">
            <TextInput placeholder="Billing Address                 "/>
            <TextInput placeholder="City    "/>
            <TextInput placeholder="Province / State     "/>
            <TextInput placeholder="Postal Code / ZIP"/>
          </div>
          <Link to="/transaction/success">
            <button className="buy-button">Buy</button>
          </Link>
            
          

        </div>
      </div>
    </div>
  );
};

export default TransacationPage;

