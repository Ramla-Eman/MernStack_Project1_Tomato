import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:4500";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Something went wrong");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Can't remove food item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px] flexcol">
      <p>All Foods List</p>
      <div className="">
        <div className="sm:grid hidden grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2.5 py-3 px-[15px] border border-[#cacaca] font-[13px] bg-[#f9f9f9]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div
            key={index}
            className="grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] grid-cols-[1fr_3fr_1fr] items-center gap-2.5 py-3 px-[15px] border border-[#cacaca] font-[13px]"
          >
            <img
              src={`${url}/images/${item.image}`}
              alt=""
              className="w-[50px]"
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p className="cursor-pointer" onClick={() => removeFood(item._id)}>
              x
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
