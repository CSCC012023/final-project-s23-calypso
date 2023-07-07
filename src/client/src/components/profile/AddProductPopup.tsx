import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { XIcon } from '@heroicons/react/outline'

interface Props {
  handleAddClick: any,
  handleCancelClick: any
}

function AddProductPopup({ handleAddClick, handleCancelClick }: Props) {
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      artist: "",
      style: "",
      price: 0,
      image: "",
    }
  });

  function isImgUrl(url: string): Promise<boolean> {
    const img = new Image();
    img.src = url;
    return new Promise((resolve) => {
      img.onload = () => {setImageUrl(url); resolve(true);}
      img.onerror = () => {setImageUrl(""); resolve(false);}
    });
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center z-[100] p-[60px] bg-white bg-opacity-50">
      <div className="bg-darkGrey shadow-lg flex flex-col items-center rounded-xl overflow-hidden">
        <div className="flex flex-row justify-between items-center p-4 w-full">
          <label className="font-mono font-semibold text-xl text-white">Add Product</label>
          <button className="h-8 w-8 rounded-full p-1 bg-gray-300 hover:bg-gray-400 active:bg-gray-600" onClick={handleCancelClick}>
            <XIcon color="#314555" />
          </button>
        </div>
        <hr className="bg-gray-300 w-full h-1" />
        <div className="flex flex-row overflow-y-auto p-6 space-x-6">
          <div className="flex">
            <div className="flex w-96 h-96 border-2 border-dashed border-gray-600 items-center justify-center object-contain rounded-lg text-white">
              {imageUrl !== "" ? (<img className="text-white" src={imageUrl} alt="Image"/>) : "Image"}
            </div>
          </div>
          <form className="flex flex-col space-y-6"
            onSubmit={handleSubmit((data) => {
              handleAddClick(data.name, data.artist, data.style, data.price, data.image);
            })}
          >
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Name</label>
              <input id="name" className="block w-full border border-white rounded-md p-2 text-base" {...register("name", { required: "Name cannot be empty" })} type="text" />
              {errors.name && <p className="text-[#FF0000] font-bold">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Artist</label>
              <input id="artist" className="block w-full border border-white rounded-md p-2 text-base" {...register("artist", { required: "Artist cannot be empty" })} type="text" />
              {errors.artist && <p className="text-[#FF0000] font-bold">{errors.artist.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Style</label>
              <input id="style" className="block w-full border border-white rounded-md p-2 text-base" {...register("style", { required: "Style cannot be empty" })} type="text" />
              {errors.style && <p className="text-[#FF0000] font-bold">{errors.style.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Image</label>
              <input id="image" className="block w-full border border-white rounded-md p-2 text-base" {...register("image", { validate: { checkUrl: async (url) => await isImgUrl(url) || "Please enter a valid image URL" } })} placeholder="URL" type="url" />
              {errors.image && <p className="text-[#FF0000] font-bold">{errors.image.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">{"Product (WIP)"}</label>
              <input id="product" className="block w-full border border-white rounded-md p-2 text-base text-white" type="file" />
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Price</label>
              <div className="flex flex-row items-center space-x-3">
                <p className="text-white">$</p>
                <input id="profilePic" className="w-full border border-white rounded-md p-2 text-base" {...register("price")} type="number" defaultValue={0.00} />
              </div>
              {errors.price && <p className="text-[#FF0000] font-bold">{errors.price.message}</p>}
            </div>
            <div className="py-4">
              <input id="apply" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 active:from-violet-800 active:to-blue-800 text-white p-5 text-lg font-semibold tracking-widest rounded-lg w-80" type="submit" value="ADD" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProductPopup;