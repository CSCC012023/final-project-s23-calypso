import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

interface Props {
  handleAddClick: any,
  handleCancelClick: any
}

const defaultImage = "https://t3.ftcdn.net/jpg/03/03/48/34/360_F_303483463_zbI02LCzq9O4IHQ6tJccIVG75dLv2bSs.jpg"

function AddMusicPopup({ handleAddClick, handleCancelClick }: Props) {
  const [imageUrl, setImageUrl] = useState(defaultImage);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      artist: "",
      description: "",
      duration: "",
      genres: "",
      pic: "",
      price: 0
    }
  });

  function isImgUrl(url: string): Promise<boolean> {
    if (url === "") return Promise.resolve(true);
    const img = new Image();
    img.src = url;
    return new Promise((resolve) => {
      img.onload = () => { setImageUrl(url); resolve(true); }
      img.onerror = () => { setImageUrl(defaultImage); resolve(false); }
    });
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center z-[100] p-[60px] bg-white bg-opacity-50">
      <div className="bg-darkGrey shadow-lg flex flex-col items-center rounded-xl overflow-hidden">
        <div className="flex flex-row justify-between items-center p-4 w-full">
          <label className="font-mono font-semibold text-xl text-white">Add Music</label>
          <button className="h-8 w-8 rounded-full p-1 bg-gray-300 hover:bg-gray-400 active:bg-gray-600" onClick={handleCancelClick}>
            <svg color="#314555" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <hr className="bg-gray-300 w-full h-1" />
        <div className="flex flex-row overflow-y-auto p-6 space-x-6">
          <div className="flex">
            <div className="flex w-96 h-96 border-2 border-dashed border-gray-600 items-center justify-center object-contain rounded-lg text-white">
              <img className="text-white" src={imageUrl} alt="Image" />
            </div>
          </div>
          <form className="flex flex-col space-y-6"
            onSubmit={handleSubmit((data: any) => {
              handleAddClick(data.name, data.artist, data.description, data.duration, data.genres.split(','), data.pic, data.price);
              }
            )}
          >
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Name</label>
              <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                {...register("name", { required: "name cannot be empty" })}
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Artist</label>
              <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                {...register("artist", { required: "artist cannot be empty" })}
              />
              {errors.artist && <p className="text-red-500">{errors.artist.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Description</label>
              <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                {...register("description", { required: false })}
              />
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Duration</label>
              <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                placeholder="mm:ss" type="text"
                {...register("duration", { required: "duration cannot be empty" })}
              />
              {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">{'Genres (separated by commas (,))'}</label>
              <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                {...register("genres", { required: false })}
              />
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Image</label>
              <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                placeholder="URL" type="url"
                {...register("pic", { required: false, validate: { checkUrl: async (url) => await isImgUrl(url) || "Please enter a valid image URL" } })}
              />
              {errors.pic && <p className="text-red-500">{errors.pic.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="leading-2 text-left block text-white">Price</label>
              <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="number" step="0.01" defaultValue={0.00}
                {...register("price", { required: true })}
              />
              {errors.price && <p className="text-red-500">{errors.price.message}</p>}
            </div>
            <div className="py-4">
              <input id="apply" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 active:from-violet-800 active:to-blue-800 text-white p-5 text-lg font-semibold tracking-widest rounded-lg w-80" type="submit" value="ADD" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddMusicPopup;