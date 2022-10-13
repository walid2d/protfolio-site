import React from "react";
import WalidPfp from "../../Assets/WalidPfp.png";

function Hero() {
  return (
    <section className="flex flex-row justify-around mt-32 mb-48" id="About">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl text-white tracking-tighter max-w-lg">
          Hello, I am Walid Rahim
        </h1>
        <h3 className="text-base text-white mt-2 tracking-tight min-w-lg max-w-lg">
          I am a full-stack Web Developer with a background in Design and
          Marketing. Self-taught programmer, Bootcamp grad, and computer science
          enthusiast.
        </h3>
      </div>
      <img
        className="w-1/3 h-1/3"
        src={WalidPfp}
        alt="Picture of the developer"
      ></img>
    </section>
  );
}
export default Hero;
