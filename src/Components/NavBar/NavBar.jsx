import React from "react";
import ProtLogo from "../../Assets/ProtLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <header className="flex flex-row justify-between">
      <img className="w-12 h-12 animate-spin" alt="" src={ProtLogo}></img>
      <div className="flex justify-between flex-row items-center space-x-1.5">
        <ul className="flex justify-between flex-row items-center space-x-9">
          <li className="text-base text-white ">About</li>
          <li className="text-base text-white">Uses</li>
          <li className="text-base text-white">Contact</li>
        </ul>
      </div>
      <FontAwesomeIcon icon="fa-duotone fa-sun-bright" size="xl" />
    </header>
  );
}
export default NavBar;
