import React from "react";
import MainLogo from "../../Assets/Logos/MainLogo.png";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-black opacity-75 flex flex-col justify-between items-center tablet:flex-row">
      <img
        className="w-14 h-14 animate-pulse"
        alt="main logo"
        src={MainLogo}
      ></img>
      <div className="flex justify-between flex-row items-center space-x-1.5">
        <ul className="flex justify-center flex-row items-center">
          <HashLink to="#About" smooth>
            <li className="text-sm tablet:text-base text-white group transition duration-300 mr-4">
              About
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-green-500"></span>
            </li>
          </HashLink>
          <HashLink to="#Toolbox" smooth>
            <li className="text-sm tablet:text-base text-white group transition duration-300 mr-4">
              Projects
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-500"></span>
            </li>
          </HashLink>
          <HashLink to={"#Contact"} smooth>
            <li className="text-sm tablet:text-base text-white group transition duration-300 ">
              Contact
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-red-500"></span>
            </li>
          </HashLink>
        </ul>
      </div>
    </header>
  );
}
export default NavBar;
