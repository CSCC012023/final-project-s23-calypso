import React from 'react'
import previewArt from '../../assets/previewArt.jpg'

export default function LargeStoryCard(props: any) {
  const titleText = props.titleText;
  const bodyText = props.bodyText;
  const buttonText = props.buttonText;
  const smallTitleText = props.smallTitleText;
  return (
    <div className="relative bg-white rounded-md">
      <div className="h-56 bg-gray-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={previewArt}
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-700">{smallTitleText}</p>
          <p className="mt-2 text-black text-3xl font-bold tracking-tight sm:text-4xl pb-4">{titleText}</p>
          <p className="mt-3 text-lg text-black-300 font-medium">
            {bodyText}
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-black hover:bg-gray-700"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

