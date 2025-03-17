import React from "react";
import Logo from "./assets/logo_main.png";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center  px-8 h-[6vh] bg-gradient-to-r from-[#00044B] to-[#3036A7] ">
        <div>
          <button className="bg-custom-red text-white p-1 rounded-md font-inter animate-blink">
            Latest
          </button>
        </div>

        <div className="flex  w-[25%] justify-between">
          <button className="bg-custom-blue text-white p-1 rounded-md font-inter">
            Pay Now
          </button>
          <button className="bg-custom-red text-white p-1 rounded-md font-inter">
            Client Login
          </button>
          <button className="bg-custom-orange text-white p-1 rounded-md font-inter">
            Affiliate SignUp
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center px-8 h-[13vh]">
        <div>
          <img src={Logo} className="h-10 w-15 " alt="logo_image" />
        </div>

        <div className="flex w-[50%] justify-between items-center">
          <div className="font-inter">Home</div>
          <div className="font-inter">Why MSG24X7</div>
          <div className="font-inter">Services</div>
          <div className="font-inter">Integration</div>
          <div className="font-inter">Pricing</div>
          <div className="font-inter">Resources</div>
        </div>

        <div className="flex w-[15%]  justify-between">
          <button className=" text-white p-2  rounded-md font-inter bg-gradient-to-tr from-indigo-700  to-blue-400 font-inter">
            Login
          </button>
          <button className="text-white p-2 rounded-md font-inter bg-gradient-to-tr from-indigo-700  to-blue-400 font-inter">
            Contact Sales
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
