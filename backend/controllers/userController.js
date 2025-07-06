import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if(!user){
            return res.json({
                success: false,
                message: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({
                success: false,
                message: "Invalid Crediantiols"
            })
        }

        const token = createToken(user._id);

        res.json({
            success: true,
            token
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Something went wrong"
        })
    }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // checking is usr already exist
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({
        success: false,
        message: "User already exist",
      });
    }
    // validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter valid email",
      });
    }

    if (password.length < 8) {
      res.json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassowrd = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassowrd,
    });

    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export { loginUser, registerUser };
