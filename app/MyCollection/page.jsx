"use client";
import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { context } from "../(components)/context/ContextApi";

const getPhotos = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/api/user/${id}`);
  return data.userData;
};
getPhotos();
const page = () => {
  const [apiData, setApiData] = useState();
  const { emailAddresses } = useContext(context);
  const id = emailAddresses[0]?.emailAddress;
  useEffect(() => {
    const res = getPhotos(id).then((data) => {
      setApiData(data);
    });
  }, []);

  // console.log(apiData?.imageUrl?.map((val) => val));

  return (
    <div className=" w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 ">
      {apiData &&
        apiData?.imageUrl?.map((val, idx) => (
          <div
            key={idx}
            className=" border border-emerald-400 relative w-[100%] sm:w-auto aspect-square  sm:aspect-auto   "
          >
            <Image src={val} fill alt="user image" className="object-cover " />
          </div>
        ))}
    </div>
  );
};
export default page;
