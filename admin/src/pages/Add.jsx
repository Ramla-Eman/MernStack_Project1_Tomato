import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setdata] = useState({
    name: "",
    discription: "",
    price: "",
    category: "salad",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("discription", data.discription);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setdata({
        name: "",
        discription: "",
        price: "",
        category: "salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
        toast.error(response.data.message)
    }
  };
  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]">
      <form className="gap-[20px] flexcol" onSubmit={onSubmitHandler}>
        <div className="flexcol">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className="w-[120px]"
            />
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            id="image"
            hidden
            required
          />
        </div>
        <div className="flexcol w-[max(40%,280px)]">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            className="p-2.5 border rounded border-[#C6C6C6]"
          />
        </div>
        <div className="flexcol w-[max(40%,280px)]">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.discription}
            name="discription"
            rows="6"
            placeholder="Write content here"
            className="p-2.5 border rounded border-[#C6C6C6]"
          ></textarea>
        </div>
        <div className="flex gap-[30px]">
          <div className="flexcol">
            <p>Product Category</p>
            <select
              name="category"
              onChange={onChangeHandler}
              className="max-w-[120px] p-2.5 border rounded border-[#C6C6C6]"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodlles">Noodlles</option>
            </select>
          </div>
          <div className="flexcol">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
              className="max-w-[120px] p-2.5 border rounded border-[#C6C6C6]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="max-w-[120px] border-0 p-2.5 bg-black text-white cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
