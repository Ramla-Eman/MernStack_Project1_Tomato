import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const sidebarOptions = [
  {
    name: "Add Items",
    icon: assets.add_icon,
    path: "/add",
  },
  {
    name: "List Items",
    icon: assets.order_icon,
    path: "/list",
  },
  {
    name: "Orders",
    icon: assets.order_icon,
    path: "/order",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[20%] min-h-[100vh] border-r-[1.5px] border-[#a9a9a9] text-[max(1vvw,10px)]">
      <div className="pt-[50px] pl-[20%] flex flex-col gap-[20px]">
        {sidebarOptions.map((option, index) => (
          <NavLink
            to={option.path}
            key={index}
            className="flex items-center gap-[12px] border-[1px] border-r-0 border-[#a9a9a9] rounded-l-[3px] py-[8px] px-[10px] cursor-pointer"
          >
            <img src={option.icon} alt="" />
            <p className="lg:block hidden">{option.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
