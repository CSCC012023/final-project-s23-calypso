import React from 'react'
import { useForm } from 'react-hook-form'
import { XIcon } from '@heroicons/react/outline'

interface Props {
  name: string,
  description: string,
  handleApplyClick: any,
  handleCancelClick: any
}

function EditProfilePopup({ name, description, handleApplyClick, handleCancelClick }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: name,
      description: description,
      profilePic: "",
      banner: ""
    }
  });

  function isImgUrl(url: string): Promise<boolean> {
    if (url.length === 0) {
      return new Promise((resolve) => resolve(true));
    }

    const img = new Image();
    img.src = url;
    return new Promise((resolve) => {
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center z-[100] p-[60px] bg-white bg-opacity-50">
      <div className="bg-darkGrey shadow-lg flex flex-col items-center rounded-xl overflow-hidden">
        <div className="flex flex-row justify-between items-center p-4 w-full">
          <label className="font-mono font-semibold text-xl text-white">Edit Profile</label>
          <button className="h-8 w-8 rounded-full p-1 bg-gray-300 hover:bg-gray-400 active:bg-gray-600" onClick={handleCancelClick}>
            <XIcon color="#314555" />
          </button>
        </div>
        <hr className="bg-gray-300 w-full h-1" />
        <form className="flex flex-col p-6 space-y-6 overflow-y-auto"
          onSubmit={handleSubmit((data) => {
            handleApplyClick(data.name, data.description, data.profilePic, data.banner)
          })}
        >
          <div className="space-y-2">
            <label className="leading-2 text-left block text-white">Name</label>
            <input id="name" className="block w-full border border-white rounded-md p-2 text-base" {...register("name", { required: "Name cannot be empty", maxLength: { value: 30, message: "Name must be 30 characters or less" } })} type="text" />
            {errors.name && <p className="text-[#FF0000] font-bold">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="leading-2 text-left block text-white">Description</label>
            <input id="description" className="block w-full border border-white rounded-md p-2 text-base" {...register("description", { maxLength: { value: 300, message: "Description must be 300 characters or less" } })} type="text" />
            {errors.description && <p className="text-[#FF0000] font-bold">{errors.description.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="leading-2 text-left block text-white">Profile Picture</label>
            <input id="profilePic" className="block w-full border border-white rounded-md p-2 text-base" {...register("profilePic", { validate: { checkUrl: async (url) => await isImgUrl(url) || "Please enter a valid image URL" } })} placeholder="URL" type="url" />
            {errors.profilePic && <p className="text-[#FF0000] font-bold">{errors.profilePic.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="leading-2 text-left block text-white">Banner</label>
            <input id="banner" className="block w-full border border-white rounded-md p-2 text-base" {...register("banner", { validate: { checkUrl: async (url) => await isImgUrl(url) || "Please enter a valid image URL" } })} placeholder="URL" type="url" />
            {errors.banner && <p className="text-[#FF0000] font-bold">{errors.banner.message}</p>}
          </div>
          <div className="py-4">
            <input id="apply" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 active:from-violet-800 active:to-blue-800 text-white p-5 text-lg font-semibold tracking-widest rounded-lg w-80" type="submit" value="APPLY"/>
          </div>
        </form>
      </div>
    </div>
  );
}


export default EditProfilePopup;