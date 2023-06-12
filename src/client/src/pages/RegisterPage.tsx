import React from 'react'

function RegisterPage() {

  return (
    <div className='grid bg-darkestGrey text-white h-screen w-full overflow-scroll lg:overflow-clip grid-cols-1 sm:grid-cols-2'>
      <div className='hidden sm:block'>
        <img 
          className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1535385793343-27dff1413c5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'
          alt=''/>
      </div>

      <div className='flex flex-col items-center justify-center px-6 py-8  md:h-screen lg:py-0'>
        <form className='text-white w-full max-w-[400px] rounded-xl mx-auto p-8 px-8 space-y-8'>
          <h1 className="flex justify-center items-center text-3xl font-bold leading-tight tracking-tight text-white ">
            Welcome to Calypso
          </h1>

          <div className='space-y-4'>
          <div>
                <label className="block mb-2 text-lg font-medium text-white ">Your name</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="John Doe"/>
            </div>
            <div>
                <label className="block mb-2 text-lg font-medium text-white ">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@email.com"/>
            </div>
            <label className="block mb-2 text-lg font-medium text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
            <label className="block mb-2 text-lg font-medium text-white">Re-enter Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
          </div>

          <div>
            <a type="submit" href="/login" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center">Register</a>
            <p className="flex justify-center items-center text-base space-x-3 font-light text-gray-500">
              Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline">Sign in</a>
            </p>
          </div>
      

        </form>
      </div>
    </div>
  )
}

export default RegisterPage