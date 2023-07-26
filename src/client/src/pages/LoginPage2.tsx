import React, { FormEvent, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function LoginPage2() {
  const logo = {
    img: require("../assets/logo-withoutbg.png"),
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

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

    await fetch(request).then(async (response) => {
      if (response.status == 200) {
        // If the response is ok (server returns 200), update the user data
        // and navigate to home page
        console.log('Response worked!');
        const data = await response.json();
        setCookie('token', data.token , { path: '/' })
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
          <form onSubmit={handleSubmit} className='text-white w-full max-w-[500px] rounded-xl mx-auto p-8 px-8 space-y-6 bg-[#ffffff]' style= {{ width: '400px', height: error? '420px' : '370px'}}>
            <div className='space-y-4'>
              <div>
                <label className="block mb-2 text-xl font-medium text-black ">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="bg-grey border-grey text-black sm:text-sm rounded-lg focus:ring-black focus:border-white block w-full h-[3rem] p-2.5 " placeholder="name@email.com"/>
              </div>
              <div>
                <label className="block mb-2 text-xl font-medium text-black">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="••••••••" className="bg-grey border-grey text-black sm:text-sm rounded-lg focus:ring-black focus:border-white block w-full h-[3rem] p-2.5"/>
              </div>
            </div>
            {error && 
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
                <strong className="font-bold">Error! </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            }
            <div className='flex flex-col items-center justify-center space-y-3'>
              <button type='submit' className="text-black bg-[#e7e7ea] hover:bg-[#858383] focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-lg text-bold px-20 py-2.5 text-center mb-2 ">
                Login
              </button>
              <div className="flex justify-center items-center space-x-1 font-light text-[#2d2c2c]">
                <p className='text-base'>
                  Don't have an account? 
                </p>
                <a href="/register" className="font-medium text-[#2d2c2c] text-base hover:underline">Sign Up</a>
              </div>
            </div>
        </form>   
      </div>
    </div>
  </div>

)}

export default LoginPage2