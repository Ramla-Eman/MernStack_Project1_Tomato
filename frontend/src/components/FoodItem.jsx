import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, image, price, description }) => {
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
  return (
    <div className="w-full m-auto rounded-2xl shadow transition-all duration-300 animate-fade-in">
      <div className="relative">
        <img src={image} alt="" className="rounded-t-2xl w-full" />
        {!cartItems[id] ? (
          <img
            alt=""
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
            className="w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full"
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-2.5 p-1.5 rounded-full bg-white">
            <img
              src={assets.remove_icon_red}
              alt=""
              onClick={() => removeFromCart(id)}
              className="w-[30px]"
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt=""
              onClick={() => addToCart(id)}
              className="w-[30px]"
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-[20px] font-medium">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px]" />
        </div>
        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-tomato text-[22px] font-medium my-2.5">$ {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
