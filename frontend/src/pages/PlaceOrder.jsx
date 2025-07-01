import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="max-w-7xl mx-auto px-5 flex md:flex-row flex-col items-start justify-between gap-[50px] mt-[100px]">
      <div className="w-full md:max-w-[45%]">
        <p className="text-[30px] font-semibold mb-[50px]">
          Delievery Information
        </p>
        <div className="flex gap-[10px]">
          <input
            type="text"
            placeholder="First Name"
            className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline-tomato rounded-[4px]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline-tomato rounded-[4px]"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline-tomato rounded-[4px]"
        />
        <input
          type="text"
          placeholder="Street"
          className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline-tomato rounded-[4px]"
        />
        <div className="flex gap-[10px]">
          <input
            type="text"
            placeholder="City"
            className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline-tomato rounded-[4px]"
          />
          <input
            type="text"
            placeholder="State"
            className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline-tomato rounded-[4px]"
          />
        </div>
        <div className="flex gap-[10px]">
          <input
            type="text"
            placeholder="Zip Code"
            className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline-tomato rounded-[4px]"
          />
          <input
            type="text"
            placeholder="Country"
            className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline-tomato rounded-[4px]"
          />
        </div>
        <input
          type="number"
          placeholder="Phone"
          className="mb-[15px] w-full p-2.5 border border-[#c5c5c5] outline-tomato rounded-[4px]"
        />
      </div>
      <div className="w-full md:max-w-[40%]">
        <div className="flex-[1] flex flex-col gap-[20px]">
          <h2 className="text-[24px] font-medium">Cart Total</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="h-[1px] bg-[#e2e2e2] border-0 my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <p>Delievery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="h-[1px] bg-[#e2e2e2] border-0 my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button className="border-0 text-white bg-tomato md:w-[220px] w-full py-3 rounded-[4px] cursor-pointer mt-[30px]">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
