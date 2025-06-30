import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div
      className="max-w-7xl px-5 mx-auto m-auto mt-[100px] md:text-[3vw] sm:text-4xl text-2xl text-center font-medium"
      id="app"
    >
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="flex justify-center gap-[10px] mt-10">
        <img
          src={assets.play_store}
          alt=""
          className="sm:w-[180px] w-[140px] transition-all duration-300 cursor-pointer hover:scale-105"
        />
        <img
          src={assets.app_store}
          alt=""
          className="sm:w-[180px] w-[140px] transition-all duration-300 cursor-pointer hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AppDownload;
