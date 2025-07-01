import React, { useState } from "react";
import { assets } from "../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Log In");
  return (
    <div className="absolute z-10 w-full h-full bg-[#00000090] flex items-center justify-center">
      <form className="w-[23vw, 330px] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-fade-in">
        <div className="flex justify-between items-center text-black">
          <h2 className="text-[24px] font-medium">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="w-[16px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-5">
          {currentState === "Log In" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your Name"
              required
              className=" outline-0 border border-[#c9c9c9] p-2.5 rounded-[4px]"
            />
          )}
          <input
            type="email"
            placeholder="Your Email"
            required
            className=" outline-0 border border-[#c9c9c9] p-2.5 rounded-[4px]"
          />
          <input
            type="password"
            placeholder="Your Password"
            required
            className=" outline-0 border border-[#c9c9c9] p-2.5 rounded-[4px]"
          />
        </div>
        <button className="border-0 p-2.5 rounded-[4px] text-white bg-tomato text-[15px] cursor-pointer">
          {currentState === "Sign Up" ? "Create Account" : "Log In"}
        </button>
        <div className="flex items-start gap-2 -mt-[15px]">
          <input type="checkbox" required className="mt-[5px]" />
          <p>By continuing, i agree to the Terms of Use and Privacy Policy.</p>
        </div>
        {currentState === "Log In" ? (
          <p>
            Create a new Account?{" "}
            <span
              onClick={() => setCurrentState("Sign Up")}
              className="text-tomato font-medium cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an Account?{" "}
            <span
              onClick={() => setCurrentState("Log In")}
              className="text-tomato font-medium cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
