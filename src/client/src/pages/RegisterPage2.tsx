import React, { FormEvent } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterPage2() {
  const logo = {
    img: require("../assets/logo-withoutbg.png"),
  }

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setError('Please fill in all empty fields');
      return;
    }
    // Send a POST request to the server with the entered text
    const request = new Request('http://localhost:8080/api/users/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password
      }),
    });

    await fetch(request).then(async (response) => {
      if (response.status == 200) {
        // If the response is ok (server returns 200), update the user data
        // and navigate to login page
        console.log('Response worked!');
        const data = await response.json();
        const user = {
          id: data.id,
          username: data.email,
          name: data.firstName + ' ' + data.lastName,
          description: '',
          pic: 'https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg',
          banner: 'https://www.gravitasgroup.com.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBKzBiQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a75c21e39787f4cd3f6f664b4bc568012b4e691c/__banner-default.jpg',
        }

        axios.post(`http://localhost:8080/api/v0/users/register`, { user }, {
          headers: {
            'Content-Type': 'application/json'
          }})
          .then(response => {
            if (response.status === 200) {
              console.log("worked neo4j");
              navigate("/successful");
            } else {
              window.alert('something went wrong');
            }
          })
          .catch(err => console.log(err));
              

      }
      else if (response.status == 403) {
        console.log('Response failed!');
        setError("User Already Exists")
      }
      else {
        console.log('Response failed!');
        setError("Internal Server Error")
      }
    });

  }


  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(50%)',
          zIndex: -1,
        }}
      ></div> 
      <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
        <div className="text-white space-y-2">
          <a className="flex items-center justify-center" href="/landing">
            <img alt="" className="h-20" src={logo.img} />
          </a>
          <form onSubmit={handleSubmit} className='text-white w-full max-w-[500px] rounded-xl mx-auto p-8 px-8 space-y-6 bg-[#ffffff]' style= {{ width: '400px', height: error? '700px' : '620px'}}>
          <h1 className="flex justify-center items-center text-xl font-bold leading-tight tracking-tight text-black ">
            Create new account
          </h1>

          <div className='space-y-4'>
            <div>
              <label className="block mb-2 text-xl font-medium text-black ">First Name</label>
              <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} className="bg-white border-black text-black sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full h-[3rem] p-2.5 " placeholder="John" />
            </div>
            <div>
              <label className="block mb-2 text-xl font-medium text-black ">Last Name</label>
              <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} className="bg-white border-black text-black sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full h-[3rem] p-2.5 " placeholder="Doe" />
            </div>
            <div>
              <label className="block mb-2 text-xl font-medium text-black ">Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="bg-white border-black text-black sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full h-[3rem] p-2.5 " placeholder="name@email.com" />
            </div>
            <div>
              <label className="block mb-2 text-xl font-medium text-black">Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="••••••••" className="bg-white border-black text-black sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full h-[3rem] p-2.5" />
            </div>
          </div>
          {error &&
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error! </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          }
          <div className='flex flex-col items-center justify-center space-y-4'>
            <button type='submit' className="text-black bg-[#e7e7ea] hover:bg-[#858383] focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-lg text-bold px-20 py-2.5 text-center mb-2 ">
              Register
            </button>
            <div className="flex justify-center items-center space-x-1 font-light text-[#2d2c2c]">
              <p className='text-base'>
                Already have an account?
              </p>
              <a href="/login" className="font-medium text-[#2d2c2c] text-base hover:underline">Sign In</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default RegisterPage2