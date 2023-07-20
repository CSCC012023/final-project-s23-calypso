import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { XIcon } from '@heroicons/react/outline'

interface Props {
  handleAddClick: any,
  handleCancelClick: any
}

function AddArtworkPopup({ handleAddClick, handleCancelClick }: Props) {
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      style: "",
      price: 0,
      image: "",
      material: "",
      medium: "",
      rarity: "",
      date: new Date().getFullYear(),
    }
  });

  function isImgUrl(url: string): Promise<boolean> {
    const img = new Image();
    img.src = url;
    return new Promise((resolve) => {
      img.onload = () => { setImageUrl(url); resolve(true); }
      img.onerror = () => { setImageUrl(""); resolve(false); }
    });
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center z-[100] p-[60px] bg-white bg-opacity-50">
      <div className="bg-darkGrey shadow-lg flex flex-col items-center rounded-xl overflow-hidden">
        <div className="flex flex-row justify-between items-center p-4 w-full">
          <label className="font-mono font-semibold text-xl text-white">Add Artwork</label>
          <button className="h-8 w-8 rounded-full p-1 bg-gray-300 hover:bg-gray-400 active:bg-gray-600" onClick={handleCancelClick}>
            <XIcon color="#314555" />
          </button>
        </div>
        <hr className="bg-gray-300 w-full h-1" />
        <div className="flex flex-row overflow-y-auto p-6 space-x-6">
          <div className="flex">
            <div className="flex w-96 h-96 border-2 border-dashed border-gray-600 items-center justify-center object-contain rounded-lg text-white">
              {imageUrl !== "" ? (<img className="text-white" src={imageUrl} alt="Image" />) : "Image"}
            </div>
          </div>
          <form className="flex flex-col space-y-6"
            onSubmit={handleSubmit((data) => {
              handleAddClick(data.name, data.style, data.material, data.medium, data.rarity, data.image, data.date, data.price);
            })}
          >
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Name</label>
              <input id="name" className="block w-full border border-white rounded-md p-2 text-base" {...register("name", { required: "Name cannot be empty" })} type="text" />
              {errors.name && <p className="text-[#FF0000] font-bold">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Style</label>
              <input id="style" className="block w-full border border-white rounded-md p-2 text-base" {...register("style", { required: "Style cannot be empty" })} type="text" />
              {errors.style && <p className="text-[#FF0000] font-bold">{errors.style.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Material</label>
              <input id="mateiral" className="block w-full border border-white rounded-md p-2 text-base" {...register("material", { required: "Material cannot be empty" })} type="text" />
              {errors.material && <p className="text-[#FF0000] font-bold">{errors.material.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Medium</label>
              <input id="medium" className="block w-full border border-white rounded-md p-2 text-base" {...register("medium", { required: "Medium cannot be empty" })} type="text" />
              {errors.medium && <p className="text-[#FF0000] font-bold">{errors.medium.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Date</label>
              <input id="date" className="block w-full border border-white rounded-md p-2 text-base" {...register("date", { required: "Date cannot be empty", min: { value: 1, message: "Year must be at least 1" } })} type="number"/>
              {errors.date && <p className="text-[#FF0000] font-bold">{errors.date.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Rarity</label>
              <select id="Rarity" className="block w-full border border-white rounded-md p-2 text-base" {...register("rarity", { required: "Rarity cannot be empty" })}>
                <option value="open">open</option>
                <option value="limited">limited</option>
                <option value="unique">unique</option>
              </select>
              {errors.rarity && <p className="text-[#FF0000] font-bold">{errors.rarity.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Image</label>
              <input id="image" className="block w-full border border-white rounded-md p-2 text-base" {...register("image", { validate: { checkUrl: async (url) => await isImgUrl(url) || "Please enter a valid image URL" } })} placeholder="URL" type="url"
                onChange={(e) => isImgUrl(e.target.value)} />
              {errors.image && <p className="text-[#FF0000] font-bold">{errors.image.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">{"Artwork (WIP)"}</label>
              <input id="artwork" className="block w-full border border-white rounded-md p-2 text-base text-white" type="file" />
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Price</label>
              <div className="flex flex-row items-center space-x-3">
                <p className="text-white">$</p>
                <input id="profilePic" className="w-full border border-white rounded-md p-2 text-base" {...register("price")} type="number" defaultValue={0.00} step="0.01" />
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

export default AddArtworkPopup;