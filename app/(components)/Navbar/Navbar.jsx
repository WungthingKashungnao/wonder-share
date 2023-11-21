import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-full w-full flex justify-between items-center ">
      {/* brand and search bar start*/}
      <div className=" flex items-center gap-2">
        <h1 className="font-bold text-emerald-500 text-[1.5rem]">
          WonderShare
        </h1>
        <form className="bg-white border-2 border-gray-300 p-1 rounded-xl">
          <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
          <input
            type="text"
            className="outline-none px-2 text-gray-500"
            placeholder="search..."
          />
        </form>
      </div>
      {/* brand and search bar end*/}
      {/* login logout start */}
      <SignOutButton>
        <button className="px-[1.5rem] py-[0.5rem] text-[white] bg-emerald-500 rounded-2xl">
          Logout
        </button>
      </SignOutButton>

      {/* login logout end */}
    </div>
  );
};

export default Navbar;
