import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
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
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }
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
              getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-2.5 min-h-2.5 bg-tomato rounded-[5px] -top-2 -right-2"
            }`}
          ></div>
        </div>
        {!token ? (
          <button
            className="text-color2 md:text-[16px] text-[12px] hover:bg-[#fff4f2] md:px-[30px] px-4 md:py-2.5 py-1 rounded-full border border-tomato transition-all duration-300 cursor-pointer"
            onClick={() => setShowLogin(true)}
          >
            signin
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} alt="" className="cursor-pointer md:w-auto w-[20px]" />
            <ul className="absolute hidden w-[150px] group-hover:flex group-active:flex flex-col gap-2.5 bg-[#fff2ef] py-3 px-[25px] rounded-[4px] border border-tomato outline-2 outline-white right-0 z-10">
              <li className="flex items-center gap-2.5 cursor-pointer hover:text-tomato">
                <img src={assets.bag_icon} alt="" className="w-[20px]" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logOut} className="flex items-center gap-2.5 cursor-pointer hover:text-tomato">
                <img src={assets.logout_icon} alt="" className="w-[20px]" />
                <p>Log Out</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
