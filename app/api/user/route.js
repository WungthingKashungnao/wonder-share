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
        imageUrl: imgUrl, //new property added
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
      newPhoto.imageUrl.push(imgUrl); //new property added
      await newPhoto.save();
      return NextResponse.json({
        message: "Successfully added new Photo",
        data: newPhoto,
        userInfo: userData,
      });
    }
  } catch (error) {
    return NextResponse.json({ error });
    // console.log(error);
  }
};

export const GET = async (req, res) => {
  try {
    const allPhotos = await UserModel.find();
    return NextResponse.json({ allPhotos });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
