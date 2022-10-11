import React from "react";
import ProtLogo from "../../Assets/ProtLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <header className="flex flex-row justify-between">
      <img className="w-12 h-12 animate-spin" alt="" src={ProtLogo}></img>
      <div className="flex justify-between flex-row items-center space-x-1.5">
        <ul className="flex justify-between flex-row items-center space-x-9 mr-2">
          <li className="text-base text-white ">About</li>
          <li className="text-base text-white">Toolbox</li>
          <li className="text-base text-white">Contact</li>
        </ul>
        <FontAwesomeIcon icon={faSun} className="text-white text-base" />
      </div>
    </header>
  );
}
export default NavBar;
