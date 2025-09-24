"use client";
import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { MdStore } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-14">
         
          <div className="flex flex-col leading-tight cursor-pointer">
            <span className="text-2xl font-extrabold -ml-10 italic text-blue-600">Flipkart</span>
            <span className="text-xs font-semibold italic -ml-10 text-gray-600">
              Explore <span className="text-yellow-500 font-semibold">Plus✨</span>
            </span>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center mx-6">
            <div className="flex items-center bg-[#f0f5ff] rounded-md px-3 h-9 w-full max-w-[950px]">
              <FiSearch className="text-gray-500 mr-2" size={22} />
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
                className="flex-1 bg-transparent w-800px] outline-none text-md"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center text-md gap-8 -mr-15 font-medium space-x-15">
            <div className="flex items-center space-x-3 cursor-pointer">
              <FiUser  size={22} />
              <span className="-mr-8 text-[16px]">Login</span>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer">
              <FiShoppingCart size={22} />
              <span className="-mr-8 text-[16px]">Cart</span>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer">
              <MdStore size={22} />
              <span className="-mr-8 text-[16px]">Become a Seller</span>
            </div>
            <div className="flex items-center cursor-pointer">
              <HiOutlineDotsVertical size={22} className="-mr-10" />
            </div>
          </div>

         
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4">
         
          <div className="flex w-full bg-[#f0f5ff] rounded-md px-3 py-2 items-center mb-4">
            <FiSearch className="text-gray-500 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>

         
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer">
              <FiUser size={18} />
              <span>Login</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <FiShoppingCart size={18} />
              <span>Cart</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <MdStore size={18} />
              <span>Become a Seller</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



 
