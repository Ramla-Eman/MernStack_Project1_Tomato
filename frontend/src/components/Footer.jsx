import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-[#323232]" id="contact">
      <div className="text-[#d9d9d9] max-w-7xl mx-auto px-5  flex flex-col items-center gap-2.5 p-[20px_8vw] pt-[80px] mt-[100px]">
        <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[80px]">
          <div className="flex flex-col items-start gap-[20px]">
            <img src={assets.logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum
              nam ex illum eos dolorum sunt dicta dignissimos. Asperiores,
              nesciunt!
            </p>
            <div className="flex">
              <img
                src={assets.facebook_icon}
                alt=""
                className="w-[40px] mr-[15px]"
              />
              <img
                src={assets.twitter_icon}
                alt=""
                className="w-[40px] mr-[15px]"
              />
              <img
                src={assets.linkedin_icon}
                alt=""
                className="w-[40px] mr-[15px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-[20px]">
            <h2 className="text-2xl font-medium text-white">Company</h2>
            <ul className="flex flex-col gap-2.5">
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-[20px]    ">
            <h2 className="text-2xl font-medium text-white">Get in Touch</h2>
            <ul className="flex flex-col gap-2.5">
              <li>+92 123 456789</li>
              <li>Conatct@tomato.com</li>
            </ul>
          </div>
        </div>
        <hr className="w-full h-0.5 my-5 bg-gray-400 border-0" />
        <p className="text-center">Copyright 2024 Tomato.com - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
