import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Log In");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === "Log In") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    }else{
      alert(response.data.message)
    }
  };

  return (
    <div className="absolute z-10 w-full h-full bg-[#00000090] flex items-center justify-center">
      <form
        onSubmit={onLogin}
        className="w-[23vw, 330px] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-fade-in"
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="text-[24px] font-medium">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="w-[16px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-5">
          {currentState === "Log In" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="Your Name"
              required
              className=" outline-0 border border-[#c9c9c9] p-2.5 rounded-[4px]"
            />
          )}
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Your Email"
            required
            className=" outline-0 border border-[#c9c9c9] p-2.5 rounded-[4px]"
          />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Your Password"
            required
            className=" outline-0 border border-[#c9c9c9] p-2.5 rounded-[4px]"
          />
        </div>
        <button
          type="submit"
          className="border-0 p-2.5 rounded-[4px] text-white bg-tomato text-[15px] cursor-pointer"
        >
          {currentState === "Sign Up" ? "Create Account" : "Log In"}
        </button>
        <div className="flex items-start gap-2 -mt-[15px]">
          <input type="checkbox" required className="mt-[5px]" />
          <p>By continuing, i agree to the Terms of Use and Privacy Policy.</p>
        </div>
        {currentState === "Log In" ? (
          <p>
            Create a new Account?{" "}
            <span
              onClick={() => setCurrentState("Sign Up")}
              className="text-tomato font-medium cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an Account?{" "}
            <span
              onClick={() => setCurrentState("Log In")}
              className="text-tomato font-medium cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
