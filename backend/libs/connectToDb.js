import mongoose from "mongoose";

export async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log("DATABASE CONNECTED!");
  } catch (error) {
    console.log(error);
  }
}
