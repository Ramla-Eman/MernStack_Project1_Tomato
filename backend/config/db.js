import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB is Connected");
  } catch (error) {
    console.error("DB connection failed:", error);
    // Exit process with failure
    process.exit(1);
  }
};
