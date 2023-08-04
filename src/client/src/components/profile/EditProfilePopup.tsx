import React from 'react'
import { useForm } from 'react-hook-form'
import { XIcon } from '@heroicons/react/outline'

interface Props {
  username: string,
  name: string,
  description: string,
  handleApplyClick: any,
  handleCancelClick: any
}

function EditProfilePopup({ username, name, description, handleApplyClick, handleCancelClick }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: username,
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
      <div className="bg-menu shadow-lg flex flex-col items-center rounded-xl overflow-hidden w-25">
        <div className="flex flex-row justify-between items-center p-4 w-full">
          <label className=" font-sans font-semibold text-2xl text-white">Edit Profile</label>
          <button className="h-8 w-8 rounded-full p-1 bg-gray-300 hover:bg-[#bab9b9] active:bg-gray-600" onClick={handleCancelClick}>
            <XIcon color="#314555" />
          </button>
        </div>
        {/* <hr className="bg-gray-300 w-full h-1" /> */}
        <form className="flex flex-col p-2 space-y-6 overflow-y-auto w-80 mt-0"
          onSubmit={handleSubmit((data) => {
            handleApplyClick(data.username, data.name, data.description, data.profilePic, data.banner)
          })}
        >
          <div className="space-y-2">
            <label className="leading-2 text-left block text-white">Username</label>
            <input id="username" className="block w-full border border-white rounded-md p-2 text-base" {...register("username", { required: "Username cannot be empty", maxLength: { value: 30, message: "Username must be 30 characters or less" }, pattern: { value: /^[a-zA-Z0-9_]*$/, message: "Username must be alphanumeric" } })} type="text" />
            {errors.username && <p className="text-[#FF0000] font-bold">{errors.username.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="leading-2 text-left block text-white">Name</label>
            <input id="name" className="block w-full border border-white rounded-md p-2 text-base" {...register("name", { required: "Name cannot be empty", pattern: { value: /^[a-zA-Z ]*$/, message: "Please enter a valid name" } })} type="text" />
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
          <div className="py-2 flex items-center justify-center">
            <input id="apply" className="w-40 h-10  rounded justify-center items-center shadow-md bg-gray-300 text-medium text-gray-600 font-semibold hover:text-black focus:outline-none focus:ring focus:ring-white hover:bg-[#bab9b9]" type="submit" value="APPLY"/>
          </div>
        </form>
      </div>
    </div>
  );
}


export default EditProfilePopup;