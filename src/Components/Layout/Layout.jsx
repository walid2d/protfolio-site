import React from "react";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Toolbox from "../Toolbox/Toolbox";
import Projects from "../Projects/Projects";
import Sayhello from "../Sayhello/Sayhello";
import Footer from "../Footer/Footer";
function Layout() {
  return (
    <div className="box-border bg-black border-8 border-green-400 w-auto h-auto tablet:px-20 tablet:py-2.5 px-4 py-1.5">
      <NavBar />
      <Hero />
      <Toolbox />
      <Projects />
      <Sayhello />
      <Footer />
    </div>
  );
}
export default Layout;
