import React, { useEffect, useState } from "react";
import { Transition } from '@headlessui/react'


interface Props {
    titleText: string,
    bodyText: string,
    buttonText: string,
    images: string[],
    imageAlt: string,
    href: string,
}


export default function LargeHeroBanner({ titleText, bodyText, buttonText, images, imageAlt, href }: Props) {
    const [currentImage, setImage] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    return (
        < div className="relative bg-gray-900" >
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                <img
                    src={images[currentImage]}
                    alt={imageAlt}
                    className="w-full h-full object-center object-cover"
                />
            </div>

            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
            <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">{titleText}</h1>
                <p className="mt-4 text-xl text-white">{bodyText}</p>
                <a
                    href={href}
                    className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-lg font-medium text-gray-900 hover:bg-gray-200"
                >
                    {buttonText}
                </a>
            </div>
        </div >
    );
}
