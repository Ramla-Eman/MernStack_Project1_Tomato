import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="max-w-7xl px-5 mx-auto mt-[30px]">
      <h2 className="text-[32px] font-semibold">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] mt-[30px] gap-[30px] row-gap-[50px]">
        {food_list.map((item, index) => {
          if ((category === "All" || category === item.category)) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.discription}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
