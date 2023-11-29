import UserModel from "@/app/(models)/userModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    const userData = await UserModel.findOne({ email: id });
    return NextResponse.json({ userData });
  } catch (error) {
    return NextResponse.json({ error });
    // console.log(error);
  }
};
