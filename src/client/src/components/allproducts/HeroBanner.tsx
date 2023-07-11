import React, { useEffect, useState } from "react";
import { Transition } from '@headlessui/react'


interface Props {
    titleText: string,
    bodyText: string,
    imageSrc: string,
    imageAlt: string,
    href: string,
}


export default function HeroBanner({ titleText, bodyText, imageSrc, imageAlt, href }: Props) {
    return (
        < div className="relative bg-gray-900 h-64" >
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-center object-cover"
                />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
            
            <div className="relative max-w-2xl mx-auto  px-6 flex flex-col items-center text-center  lg:px-0">
                <h1 className="text-4xl font-extrabold tracking-tight pt-8 text-white lg:text-6xl">{titleText}</h1>
                <p className="mt-4 text-xl text-white">{bodyText}</p>     
            </div>
        </div >
    );
}
