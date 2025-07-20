import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);
  const navigate = useNavigate()
  return (
    <div className="max-w-7xl mx-auto px-5 mt-[100px]">
      <div className="">
        <div className="grid items-center grid-cols-6 text-gray-500 md:text-[1vw] text-[12px]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-[1px] bg-[#e2e2e2] border-0" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="grid items-center sm:text-start text-center grid-cols-6 text-black md:text-[1vw] text-[12px] my-2.5">
                  <img src={item.image} alt="" className="w-[50px]" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-0" />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-[80px] flex md:flex-row flex-col-reverse justify-between gap-[12vw]">
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
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className="h-[1px] bg-[#e2e2e2] border-0 my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} className="border-0 text-white bg-tomato md:w-[220px] w-full py-3 rounded-[4px] cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-[1]">
          <div>
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
              <input
                type="text"
                placeholder="Promo Code"
                className="bg-none outline-0 border-0 pl-2.5"
              />
              <button className="md:w-[10vw] w-[160px] py-3 px-1.5 bg-black text-white border-0 rounded-[4px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
