"use client";
import { useUser } from "@clerk/nextjs";
import { createContext } from "react";

export const context = createContext();
const ContextApi = ({ children }) => {
  const userData = useUser().user;
  const { firstName, lastName, imageUrl, emailAddresses } = userData || {
    firstName: "",
    lastName: "",
    imageUrl: "",
    emailAddresses: "",
  };
  console.log(`user data=>`, emailAddresses[0]?.emailAddress);
  return (
    <context.Provider value={{ firstName, lastName, imageUrl, emailAddresses }}>
      {children}
    </context.Provider>
  );
};

export default ContextApi;
