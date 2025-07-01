import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

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

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="max-w-7xl mx-auto px-5 flex justify-between items-center py-5">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="md:w-[150px] w-[115px]" />
      </Link>
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
        <img src={assets.search_icon} alt="" className="md:w-auto w-[20px]" />
        <div className="relative">
          <Link to={"/cart"}>
            <img
              src={assets.basket_icon}
              alt=""
              className="md:w-auto w-[20px]"
            />
          </Link>
          <div
            className={`${
              getTotalCartAmount()===0
                ? ""
                : "absolute min-w-2.5 min-h-2.5 bg-tomato rounded-[5px] -top-2 -right-2"
            }`}
          ></div>
        </div>
        <button
          className="text-color2 md:text-[16px] text-[12px] hover:bg-[#fff4f2] md:px-[30px] px-4 md:py-2.5 py-1 rounded-full border border-tomato transition-all duration-300 cursor-pointer"
          onClick={() => setShowLogin(true)}
        >
          signin
        </button>
      </div>
    </div>
  );
};

export default Navbar;
