import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ramlaemanra:OcyeZ3YxzJXjlJfF@cluster0.yeu3p1r.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB is Connected");
    });
};
