import React, { useState } from "react";
import { assets } from "../assets/assets";

const lists = [
  {
    name: "home",
    link: "#",
  },
  {
    name: "menu",
    link: "#menu",
  },
  {
    name: "mobile-app",
    link: "#app",
  },
  {
    name: "contact us",
    link: "#contact",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="max-w-7xl mx-auto px-5 flex justify-between items-center py-5">
      <img src={assets.logo} alt="" className="md:w-[150px] w-[115px]" />
      <ul className="md:flex hidden gap-5 text-color2 text-[18px]">
        {lists.map((item, index) => (
          <li
            key={index}
            className={
              menu === item.name ? "pb-0.5 border-b-2 border-color2" : ""
            }
            onClick={() => setMenu(item.name)}
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center lg:gap-10 gap-3">
        <img src={assets.search_icon} alt="" className="md:w-auto w-[20px]"/>
        <div className="relative">
          <img src={assets.basket_icon} alt="" className="md:w-auto w-[20px]"/>
          <div className="absolute min-w-2.5 min-h-2.5 bg-tomato rounded-[5px] -top-2 -right-2"></div>
        </div>
        <button className="text-color2 md:text-[16px] text-[12px] hover:bg-[#fff4f2] md:px-[30px] px-4 md:py-2.5 py-1 rounded-full border border-tomato transition-all duration-300 cursor-pointer">
          signin
        </button>
      </div>
    </div>
  );
};

export default Navbar;
