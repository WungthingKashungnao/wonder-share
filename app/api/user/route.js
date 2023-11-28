import UserModel from "@/app/(models)/userModel";
import { auth, useUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { userId } = auth();
    const { imgUrl } = await req.json();

    const user = await UserModel.findOne({ clerkId: userId });
    if (!user) {
      console.log("no user yet");
      let newUser = await UserModel({
        clerkId: userId,
        photos: { url: imgUrl },
      });
      await newUser.save();
      // console.log(newUser);
      return NextResponse.json({
        message: "Successfully added",
        data: newUser,
      });
    }
    if (user) {
      console.log("we have an existing user");
      // let newPhoto = await UserModel({
      //   photos: { url: imgUrl },
      // });
      let newPhoto = await UserModel.findOne({ clerkId: userId });
      newPhoto.photos.push({ url: imgUrl });
      await newPhoto.save();
      return NextResponse.json({
        message: "Successfully added new Photo",
        data: newPhoto,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const GET = (req) => {
  try {
    console.log(`Hello from the api mother fucker`);
    return NextResponse.json({ message: `im from the api` });
  } catch (error) {
    console.log(error);
  }
};
