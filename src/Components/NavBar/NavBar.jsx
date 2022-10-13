import React from "react";
import MainLogo from "../../Assets/MainLogo.png";
import NightMode from "../../Assets/NightMode.png";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  return (
    <header className="flex flex-row justify-between">
      <img className="w-14 h-14 animate-pulse" alt="" src={MainLogo}></img>
      <div className="flex justify-between flex-row items-center space-x-1.5">
        <ul className="flex justify-between flex-row items-center space-x-9 mr-2">
          <HashLink to="#About" smooth>
            <li className="text-base text-white ">About</li>
          </HashLink>
          <HashLink to="#Toolbox" smooth>
            <li className="text-base text-white">Toolbox</li>
          </HashLink>
          <li className="text-base text-white">Contact</li>
        </ul>

        <img src={NightMode} alt="" className="w-14 h-14" />
      </div>
    </header>
  );
}
export default NavBar;
