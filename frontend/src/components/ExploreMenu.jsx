import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="max-w-7xl px-5 mx-auto flex flex-col gap-5" id="menu">
      <h1 className="text-[#262626] font-medium text-[32px]">
        Explore our menu
      </h1>
      <p className="md:max-w-[60%] text-[#808080]">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-[30px] text-center my-5 overflow-x-scroll hide-scrollbar">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-all duration-300 ${
                category === item.menu_name
                  ? "border-4 border-tomato p-0.5"
                  : ""
              }`}
            />
            <p className="mt-2.5 text-[#747474] cursor-pointer text-[max(1.4vw, 16px)]">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="my-2.5 h-0.5 bg-[#e2e2e2] border-0" />
    </div>
  );
};

export default ExploreMenu;
