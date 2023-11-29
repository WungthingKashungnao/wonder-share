"use client";
import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { context } from "./(components)/context/ContextApi";

const getPhotos = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/api/user/${id}`);
  return data.userData;
};
getPhotos();
const Home = () => {
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
    <div className=" w-full h-full flex ">
      {apiData &&
        apiData?.imageUrl?.map((val, idx) => (
          // <div key={idx}>{console.log(val.photos.map((val) => val.url))}</div>
          <div
            key={idx}
            className="h-[300px] w-[300px] border border-emerald-400 "
          >
            <Image
              src={val}
              width={500}
              height={500}
              alt="user image"
              className="object-cover"
            />
          </div>
        ))}
    </div>
  );
};
export default Home;
