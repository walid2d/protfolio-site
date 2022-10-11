import React from "react";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Toolbox from "../Toolbox/Toolbox";

function Layout() {
  return (
    <div className="box-border bg-black border-4 border-green-400 w-auto h-auto px-20 py-2.5">
      <NavBar />
      <Hero />
      <Toolbox />
    </div>
  );
}
export default Layout;
