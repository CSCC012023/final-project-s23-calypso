import React from 'react'

function RegisterPage() {
  const logo = {
    img: require("../assets/logo.jpg"),
  }

  return (
    <div className='grid bg-[#212121] text-white h-screen w-full overflow-scroll lg:overflow-clip grid-cols-1 sm:grid-cols-2'>
      <div className='hidden sm:block'>
        <img 
          className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1535385793343-27dff1413c5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'
        />
      </div>

      <div className='flex flex-col items-center justify-center px-6 py-8  md:h-screen lg:py-0'>
        <a href='/landing'>
          <img className="h-20" src={logo.img} />
        </a>
        <form className='text-white w-full max-w-[500px] rounded-xl mx-auto p-8 px-8 space-y-8'>
          <h1 className="flex justify-center items-center text-2xl font-bold leading-tight tracking-tight text-white ">
            Create new account
          </h1>

          <div className='space-y-4'>
            <div>
                <label className="block mb-2 text-2xl font-medium text-white ">Name</label>
                <input type="email" name="email" id="email" className="bg-black border-black text-white sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full h-[3rem] p-2.5 " placeholder="John Doe"/>
            </div>
            <div>
                <label className="block mb-2 text-2xl font-medium text-white ">Email</label>
                <input type="email" name="email" id="email" className="bg-black border-black text-white sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full h-[3rem] p-2.5 " placeholder="name@email.com"/>
            </div>
            <div>
              <label className="block mb-2 text-2xl font-medium text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-black border-black text-white sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full h-[3rem] p-2.5"/>
            </div>
            <div>
              <label className="block mb-2 text-2xl font-medium text-white">Re-enter Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-black border-black text-white sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full h-[3rem] p-2.5"/>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center space-y-4'>
            <form action="http://localhost:3000/login" method="get">
              <button className="text-black bg-[#ffffff] hover:bg-[#7f7f7f] focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-lg text-bold px-20 py-2.5 text-center mb-2 ">
                Register
              </button>
            </form>

            {/* <button type="button" className="text-black bg-[#00dac5] hover:bg-[#04b4a3] focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-full text-bold px-5 py-2.5 text-center mb-2 ">Register</button> */}
            
            <div className="flex justify-center items-center space-x-1 font-light text-gray-500">
              <p className='text-base'>
                Already have an account? 
              </p>
              <a href="/login" className="font-medium text-primary-600 text-base hover:underline">Sign In</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage