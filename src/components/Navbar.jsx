import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="w-full h-[70px] flex justify-end items-center space-x-8 p-4 bg-gray-900 text-white">
          <Link to={`/home`} className="hover:text-gray-400">Home</Link>
          <Link to={`/products`} className="hover:text-gray-400">Products</Link>
          <Link to={`/users`} className="hover:text-gray-400">Users</Link>
          <Link to={`/contact`} className="hover:text-gray-400">Contact</Link>
          <Link to={`/`} className="hover:text-gray-400">↗</Link>
      </nav>
  )
}

export default Navbar;
