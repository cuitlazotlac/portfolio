import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-2 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
      {/* <Link className="p-4" to="/"></Link> */}
      <Link className="p-4" to="/Work">
        Work
      </Link>
      <Link className="p-4" to="/Resume">
        Resume
      </Link>
      <Link className="p-4" to="/About">
        About+Connect
      </Link>
    </div>
  );
};

export default Dropdown;
