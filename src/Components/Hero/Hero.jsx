import React from "react";
import WalidPfp from "../../Assets/WalidPfp.png";

function Hero() {
  return (
    <section className="flex flex-row justify-around my-24">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl text-white tracking-tighter">
          Hello, I am Walid Rahim
        </h1>
        <h3 className="text-base text-white mt-1 tracking-tighter">
          I'm a full-stack web developer based in Calgary,Canada.
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
