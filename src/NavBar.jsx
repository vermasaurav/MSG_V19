import React, { useState } from "react";
import Logo from "./assets/logo_main.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex md:justify-between items-center sm:justify-center px-8 h-[6vh] bg-gradient-to-r from-[#00044B] to-[#3036A7]">
        <div className="sm:hidden md:block">
          <button className="bg-custom-red text-white p-1 rounded-md font-inter animate-blink">
            Latest
          </button>
        </div>

        <div className="flex md:w-[25%] sm:w-[55%] justify-between">
          <button className="bg-custom-blue text-white p-1 rounded-md font-inter">Pay Now</button>
          <button className="bg-custom-red text-white p-1 rounded-md font-inter">Client Login</button>
          <button className="bg-custom-orange text-white p-1 rounded-md font-inter">Affiliate SignUp</button>
        </div>
      </div>

      <div className="flex justify-between items-center px-8 h-[13vh]">
        <div>
          <img src={Logo} className="h-10 w-15" alt="logo_image" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[50%] justify-between items-center">
          <div className="font-inter">Home</div>
          <div className="font-inter">Why MSG24X7</div>
          <div className="font-inter">Services</div>
          <div className="font-inter">Integration</div>
          <div className="font-inter">Pricing</div>
          <div className="font-inter">Resources</div>
        </div>

        <div className="hidden md:flex w-[15%] justify-between">
          <button className="text-white p-2 rounded-md font-inter bg-gradient-to-tr from-indigo-700 to-blue-400">
            Login
          </button>
          <button className="text-white p-2 rounded-md font-inter bg-gradient-to-tr from-indigo-700 to-blue-400">
            Contact Sales
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white text-black py-4 space-y-4">
          <div className="font-inter">Home</div>
          <div className="font-inter">Why MSG24X7</div>
          <div className="font-inter">Services</div>
          <div className="font-inter">Integration</div>
          <div className="font-inter">Pricing</div>
          <div className="font-inter">Resources</div>
          <button className="text-white p-2 rounded-md font-inter bg-gradient-to-tr from-indigo-700 to-blue-400 w-full text-center">
            Login
          </button>
          <button className="text-white p-2 rounded-md font-inter bg-gradient-to-tr from-indigo-700 to-blue-400 w-full text-center">
            Contact Sales
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
