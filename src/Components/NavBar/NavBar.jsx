import React from "react";
import ProtLogo from "../../Assets/ProtLogo.png";

function NavBar() {
  return (
    <header className="flex flex-row justify-between">
      <img className="w-11 h-11" alt="" src={ProtLogo}></img>
      <div className="flex justify-between flex-row items-center space-x-1.5">
        <ul className="flex justify-between flex-row items-center space-x-2">
          <li className="text-sm text-white ">About</li>
          <li className="text-sm text-white">Uses</li>
          <li className="text-sm text-white">Contact</li>
        </ul>
        <button>🔆</button>
      </div>
    </header>
  );
}
export default NavBar;
