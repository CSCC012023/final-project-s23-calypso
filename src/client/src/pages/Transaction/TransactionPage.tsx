import React from 'react';
import ExampleNavBar from '../../components/common/HeaderNavBar';
import '../../App.css';

type Props = {};

interface TextInputProps {
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder }) => {
  const [text, setText] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder={placeholder}
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
        <div className="section">
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
        <div className="section">
          <h1 className="section-heading">Enter Payment Details</h1>
          <div className = "input-container">
            <TextInput placeholder="Name as it appears on card"/>

          </div>
          <div className = "input-container">
            <TextInput placeholder="Credit Card Number"/>
            <TextInput placeholder="Expiry Date MMYY"/>
            <TextInput placeholder="CVV"/>
          </div>
          <div className = "input-container">
            <TextInput placeholder="Address"/>
            <TextInput placeholder="Expiry Date MMYY"/>
            <TextInput placeholder="CVV"/>
          </div>


        </div>
      </div>
    </div>
  );
};

export default TransacationPage;

