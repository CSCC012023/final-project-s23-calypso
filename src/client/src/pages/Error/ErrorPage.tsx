import React from 'react'
import HeaderNavBar from '../../components/common/HeaderNavBar'
import Footer from '../../components/common/Footer'



function ErrorPage() {
  return (
    <div className="relative">
        {/* Will keep this here for now, and can replace later on */}
        {/* <HeaderNavBar />  */}
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl text-center">404 Error</h1>
                <p className="mt-4 text-xl text-white text-center">Page not found!</p>
            </div>
            <div className="flex items-center justify-center">
                <img src="https://i.imgur.com/qIufhof.png" alt="404 Error" className="w-auto h-56" />
            </div>
            <div className="flex items-center justify-center">
                <a href="/home" className="text-white font-semibold px-4 py-4 bg-gray-500 rounded-lg opacity-90">
                Take Me Back!
                </a>
            </div>
        </div>
    </div>


  )
}

export default ErrorPage
