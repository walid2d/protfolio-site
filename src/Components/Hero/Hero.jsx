import React from "react";
import WalidPfp from "../../Assets/WalidPfp.png";

function Hero() {
  return (
    <section
      className="flex flex-col flex-col-reverse mb-8 lg:flex-row  lg:justify-center lg:mt-32 lg:mb-48 md:my-12  md:items-center"
      id="About"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl text-white tracking-tighter lg:w-[30rem] text-center">
          Hello! I am Walid Rahim.
        </h1>
        <p className="text-sm text-white lg:mt-2 tracking-tighter w-[20rem] text-center">
          I am a full-stack Web Developer with a background in Design and
          Marketing. Self-taught programmer, Bootcamp grad, and computer science
          enthusiast.
        </p>
      </div>
      <img
        className="w-34 h-30 md:w-50 md:h-50"
        src={WalidPfp}
        alt="Picture of the developer"
      ></img>
    </section>
  );
}
export default Hero;
