import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="lg:h-[34vw] h-[38vw] max-w-7xl px-5 my-[30px] mx-auto relative">
      <img src={assets.header_img} alt="" className="object-cover" />
      <div className="absolute bottom-[10%] sm:left-[6vw] left-[8vw] flex flex-col items-start gap-3 lg:max-w-[50%] md:max-w-[45%] max-w-[75%] animate-fade-in">
        <h2 className="text-white font-medium text-[max(4.5vw,22px)]">
          Order your favourite food here
        </h2>
        <p className="text-white md:block hidden text-[1vw]">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingrediants and culinary experties. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white md:text-[1vw] text-[12px] rounded-full">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
