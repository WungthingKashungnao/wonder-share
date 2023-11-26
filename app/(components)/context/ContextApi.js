"use client";
import { useUser } from "@clerk/nextjs";
import { createContext, useState } from "react";

export const context = createContext();
const ContextApi = ({ children }) => {
  // user data from clerk js start
  const userData = useUser().user;
  const { firstName, lastName, imageUrl, emailAddresses } = userData || {
    firstName: "",
    lastName: "",
    imageUrl: "",
    emailAddresses: "",
  };
  // user data from clerk js start
  const [imgUrl, setImgUrl] = useState(""); //state to store image url
  const [toggleImgForm, setToggleImgForm] = useState(false); //state to toggle image form

  return (
    <context.Provider
      value={{
        firstName,
        lastName,
        imageUrl,
        emailAddresses,
        imgUrl,
        setImgUrl,
        toggleImgForm,
        setToggleImgForm,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextApi;
