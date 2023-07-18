import React, { FormEvent } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const logo = {
    img: require("../assets/logo.jpg"),
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send a POST request to the server with the entered text
    const request = new Request('http://localhost:8080/api/users/retrieve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email, 
        password,
      }),
    });

    await fetch(request).then((response) => {
      if (response.status == 200) {
        // If the response is ok (server returns 200), update the user data
        // and navigate to home page
        console.log('Response worked!');
        navigate("/")
      }
      else if (response.status == 403){
        console.log('Response failed!');
        setError("Invalid Email or Password")
      }
      else {
        console.log('Response failed!');
        setError("Internal Server Error")
      }
    });

  }

  return (
    <div>
      <div className='grid bg-[#212121] text-white h-screen w-full overflow-scroll lg:overflow-clip grid-cols-1 sm:grid-cols-2'>
        <div className='hidden sm:block'>
          <img 
            className='object-cover w-full h-full'
            src='https://images.unsplash.com/photo-1535385793343-27dff1413c5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'
            alt=''/>
        </div>

        <div className='flex flex-col items-center justify-center px-6 py-8  md:h-screen lg:py-0'>
          <a href='/landing'>
            <img alt="" className="h-20" src={logo.img} />
          </a>

          <form onSubmit={handleSubmit} className='text-white w-full max-w-[500px] rounded-xl mx-auto p-8 px-8 space-y-5'>
            <div className='space-y-4'>
              <div>
                <label className="block mb-2 text-2xl font-medium text-white ">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="bg-black border-black text-white sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full h-[3rem] p-2.5 " placeholder="name@email.com"/>
            </div>
            <div>
              <label className="block mb-2 text-2xl font-medium text-white">Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="••••••••" className="bg-black border-black text-white sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full h-[3rem] p-2.5"/>
            </div>
              
              <div className="space-y-3 md:space-y-6">
                <div className="text-medium font-medium text-primary-600 hover:underline">Forgot password?</div>
              </div>
            </div>
            {error && 
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline">{error}</span>
              </div>
            }
            <div className='flex flex-col items-center justify-center space-y-4'>
              <button type='submit' className="text-black bg-[#ffffff] hover:bg-[#7f7f7f] focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-lg text-bold px-20 py-2.5 text-center mb-2 ">
                Login
              </button>
              <div className="flex justify-center items-center space-x-1 font-light text-gray-500">
                <p className='text-base'>
                  Don't have an account? 
                </p>
                <a href="/register" className="font-medium text-primary-600 text-base hover:underline">Sign Up</a>
            </div>
          </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage