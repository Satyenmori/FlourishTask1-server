import mongoose from "mongoose";

export const connDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("DB Connected");
  } catch (error) {
    console.log(error, "DB Not Connected");
  }
};
