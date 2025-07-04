import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%]">
      <img src={assets.logo} alt="" className="w-[max(10%,80px)]"/>
      <img src={assets.profile_image} alt="" className="w-[40px]"/>
    </div>
  );
};

export default Navbar;
