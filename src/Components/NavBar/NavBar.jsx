import React from "react";
import MainLogo from "../../Assets/MainLogo.png";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  return (
    <header className="flex flex-col justify-between items-center ">
      <img
        className="w-14 h-14 animate-pulse"
        alt="main logo"
        src={MainLogo}
      ></img>
      <div className="flex justify-between flex-row items-center space-x-1.5">
        <ul className="flex justify-center flex-row items-center">
          <HashLink to="#About" smooth>
            <li className="text-base text-white group transition duration-300 mr-4">
              About
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-green-500"></span>
            </li>
          </HashLink>
          <HashLink to="#Toolbox" smooth>
            <li className="text-base text-white group transition duration-300 mr-4">
              Toolbox
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-500"></span>
            </li>
          </HashLink>
          <HashLink to={"#Contact"} smooth>
            <li className="text-base text-white group transition duration-300 ">
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
