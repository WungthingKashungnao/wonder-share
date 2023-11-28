import UserModel from "@/app/(models)/userModel";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const userData = await currentUser();
    const email = userData.emailAddresses[0].emailAddress;
    const { userId } = auth();
    const { imgUrl } = await req.json();

    const user = await UserModel.findOne({ clerkId: userId });
    if (!user) {
      let newUser = await UserModel({
        clerkId: userId,
        email: email,
        photos: { url: imgUrl },
      });
      await newUser.save();
      // console.log(newUser);
      return NextResponse.json({
        message: "Successfully added",
        data: newUser,
        userInfo: userData,
      });
    }
    if (user) {
      let newPhoto = await UserModel.findOne({ clerkId: userId });
      newPhoto.photos.push({ url: imgUrl });
      await newPhoto.save();
      return NextResponse.json({
        message: "Successfully added new Photo",
        data: newPhoto,
        userInfo: userData,
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
