import React, { FormEvent } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserCreatedPage() {
    const logo = {
        img: require("../assets/logo-withoutbg.png"),
    }

    const navigate = useNavigate();

    const handleSubmit = async () => {
        navigate("/login")
      }

  return (
    <div>
        <div
            style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                filter: 'brightness(20%)',
            }}
        ></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
            <div className="text-white text-center space-y-6">
                <a className="flex items-center justify-center" href="/landing">
                    <img alt="" className="h-20" src={logo.img} />
                </a>
                <h2 className="mb-4 text-3xl font-semibold">
                    User Successfully Created
                </h2>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="rounded border-2 border-neutral-50 px-6 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 mt-4"
                >
                Login Now
                </button>
            </div>
        </div>
    </div>
    
  )
}

export default UserCreatedPage