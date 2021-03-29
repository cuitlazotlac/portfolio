import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({toogle}) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
      <Link to="/" className="pl-8">
        Logo
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toogle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
          <Link className="p-4" to="/"></Link>
          <Link className="p-4" to="/Work">Work</Link>
          <Link className="p-4" to="/Resume">Resume</Link>
          <Link className="p-4" to="/About">About+Connect</Link>
      </div>
    </nav>
  );
};

export default Navbar;
