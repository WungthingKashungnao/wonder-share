"use client";
import React, { useContext } from "react";
import { context } from "../context/ContextApi";
import axios from "axios";

const FormUploadImage = () => {
  const { imgUrl, setImgUrl, setToggleImgForm } = useContext(context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newImage = await axios.post("/api/user", { imgUrl });
    console.log(newImage);
    setImgUrl("");
  };
  return (
    <>
      <div
        className="bg-black opacity-70 w-full h-full  fixed top-0 left-0  "
        onClick={() => setToggleImgForm(false)}
      ></div>
      <form
        onSubmit={handleSubmit}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  z-10 "
      >
        <div>
          <label className="mr-1 text-white font-bold">Enter URL</label>
          <input
            type="url"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            className="outline-none border border-emerald-500 rounded-md p-1 mr-1"
            required
          />
          <button
            type="submit"
            className="bg-emerald-500 px-2 py-1 rounded-md text-white font-bold"
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FormUploadImage;
