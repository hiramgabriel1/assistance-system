import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const connectionDB = async () => {
  try {
    const data = await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    data
      ? console.log("connection sucessfully!".bgBlue)
      : console.log("INTERNAL ERRROR".bgRed);
  } catch (error) {
    throw new Error(error);
  }
};

export default connectionDB;