import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGO);

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photos: {
    type: [{ url: String }],
  },
  imageUrl: {
    type: [String],
  },
});

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserModel;
