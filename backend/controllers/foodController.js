import foodModel from "../models/foodModel.js";
import fs from "fs";
import cloudinary from "../utils/cloudinary.js";

// add food item
const addFood = async (req, res) => {
  let image_url = "";

  if (req.file) {
    const uploadedImage = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(req.file.buffer);
    });

    image_url = uploadedImage.secure_url;
  }

  const food = new foodModel({
    name: req.body.name,
    discription: req.body.discription,
    price: req.body.price,
    category: req.body.category,
    image: image_url,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food item added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `Failed to add food item ${error}` });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    console.log(foods) // listFood ke andar

    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `Failed to get food list ${error}` });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    // Delete image from Cloudinary
    if (food.image) {
      const publicId = food.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food item removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: `Failed to remove food item ${error}`,
    });
  }
};

export { addFood, listFood, removeFood };
