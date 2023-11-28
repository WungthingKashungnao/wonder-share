import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGO);

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  photos: {
    type: [{ url: String }],
  },
});

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserModel;
