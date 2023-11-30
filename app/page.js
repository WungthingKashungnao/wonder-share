"use client";
import { useContext } from "react";
import Image from "next/image";
import FormUploadImage from "./(components)/FormUploadImage/FormUploadImage";
import { context } from "./(components)/context/ContextApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const { imageUrl, firstName, lastName, toggleImgForm, setToggleImgForm } =
    useContext(context);
  return (
    <div className="w-full h-full flex-col flex justify-center items-center">
      {/* user profile image start */}
      <div className="h-[300px] w-[300px] rounded-full overflow-hidden border border-emerald-600 ">
        <Image
          src={imageUrl}
          width={500}
          height={500}
          // fill
          alt="uer image"
          className="object-cover "
        />
      </div>
      <div>
        <span className="text-emerald-500 font-bold text-[2rem]">
          {firstName}{" "}
        </span>
        <span className="text-emerald-500 font-bold text-[2rem]">
          {lastName}
        </span>
      </div>

      <button
        className="bg-emerald-500 text-white px-2 py-1 rounded-lg"
        onClick={() => setToggleImgForm(true)}
      >
        Add Image
      </button>
      {/* user profile image end */}

      {/* form upload image start */}
      {toggleImgForm && <FormUploadImage />}
      {/* form image upload end */}
      <ToastContainer />
    </div>
  );
};

export default page;
