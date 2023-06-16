import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const items = useSelector((state)=>state.cart)
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white font-semibold text-lg">
          Logo
        </a>
        <ul className="flex space-x-4">
          <li>
            <Link to='/cart'>
                    Cart
            </Link>
          </li>
          <li>
            <a href="/" className="text-gray-300 hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-300 hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-300 hover:text-white">
              Contact
            </a>
            <span className=' rounded-lg p-2 bg-green-500 mx-10 text-white'> Cart item:{items.length}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
