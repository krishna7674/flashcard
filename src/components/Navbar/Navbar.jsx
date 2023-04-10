import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="px-4 py-2 bg-white flex justify-center items-center md:justify-start">
          <img src={logo} alt="logo" className="w-36" />
        </div>
        <div className="mx-7 sm:mx-12 md:mx-20 lg:mx-24 mt-10">
          <h1 className="mb-3 text-xl font-bold"> Create Flashcard </h1>
          <ul className="flex border-b-gray-500 mx-1 text-sm text-gray-500 space-x-4">
            <li className="font-semibold text-base cursor-pointer">
              <Link
                className="hover:text-red-500 hover:border-b-2 border-red-500"
                to="/"
              >
                Create New
              </Link>
            </li>
            <li className="font-semibold text-base cursor-pointer">
              <Link
                className="hover:text-red-500 hover:border-b-2 border-red-500"
                to="/mycards"
              >
                My Flashcard
              </Link>
            </li>
          </ul>
          <div className="bg-gray-300 h-1 w-full "></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
