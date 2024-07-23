import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border border-red-500 bg-slate-200 rounded-lg p-5">
      <ul className="flex justify-evenly">
        <li className="mr-5">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-5">
          <Link to="/about">About Us</Link>
        </li>
        <li className="mr-5">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="mr-5">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;