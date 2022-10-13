import React from "react";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Toolbox from "../Toolbox/Toolbox";
import Projects from "../Projects/Projects";

function Layout() {
  return (
    <div className="box-border bg-black border-8 border-green-400 w-auto h-auto px-20 py-2.5">
      <NavBar />
      <Hero />
      <Toolbox />
      <Projects />
    </div>
  );
}
export default Layout;
