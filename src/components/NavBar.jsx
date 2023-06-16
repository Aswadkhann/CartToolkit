


import React, { useState } from "react";
// import "../components/style.css";
import {HiMenu} from 'react-icons/hi'
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#1C1C1E] pt-4 pl-8 pr-8 md:pl-12 md:pr-12">
      <div className="container mx-auto ">
        <nav className="flex items-center justify-between h-20 text-white">
        <div className="flex-shrink-0 h-[71px] w-[83px]">
      <Link to='/'>
        <img src='assets/Logo.png' alt="logo" />
        </Link>
    </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4 text-white">
              <li className="px-4 cursor-pointer hover:text-purple-500 font-medium capitalize hover:scale-105 duration-200">
              <Link to="/about">About</Link>
              </li>
              <li className="px-4 cursor-pointer hover:text-purple-500 font-medium capitalize hover:scale-105 duration-200">
              <Link to="/beardcontest">Beard Contest</Link>
              </li>
              <li className="px-4 cursor-pointer hover:text-purple-500 font-medium capitalize hover:scale-105 duration-200">
              <Link to="/beardshop">Barber Shop</Link>
              </li>
              <li className="px-4 cursor-pointer hover:text-purple-500 font-medium capitalize hover:scale-105 duration-200">
              <Link to="/onlineshop">Online Shop</Link>
              </li>
              <li className="px-4 cursor-pointer hover:text-purple-500 font-medium capitalize hover:scale-105 duration-200">
                Contact
              </li>
            </ul>
          </div>
          <button className=" hidden md:flex font-medium text-white capitalize bg-purple-600 px-4 py-2 rounded-lg">
          Download App
        </button>
          <div className="md:hidden">
            <button
              className="flex items-center px-3 py-2 rounded text-white"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                      <HiMenu size={30}/>
                ) : (
                    <HiMenu size={30}/>
                )}
              </svg>
            </button>
          </div>
        </nav>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden py-4`}>
          <ul className="space-y-2 text-white">
            <li className="px-4 py-2 cursor-pointer hover:text-purple-500 font-medium capitalize hover:bg-gray-700">
                  امیر بھای بتاین کایسی اگی وھیتع
            </li>
            <li className="px-4 py-2 cursor-pointer hover:text-purple-500 font-medium capitalize hover:bg-gray-700">
              Beard Contest
            </li>
            <li className="px-4 py-2 cursor-pointer hover:text-purple-500 font-medium capitalize hover:bg-gray-700">
              Barber Shop
            </li>
            <li className="px-4 py-2 cursor-pointer  hover:text-purple-500 font-medium capitalize hover:bg-gray-700">
              Online Shop
            </li>
            <li className="px-4 py-2 cursor-pointer hover:text-purple-500 font-medium capitalize hover:bg-gray-700">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;



