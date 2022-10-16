import React from "react";
import WalidPfp from "../../Assets/WalidPfp.png";

function Hero() {
  return (
    <section
      className="flex flex-col tablet:flex-row tablet:mt-32 tablet:mb-44 justify-center desktop:space-x-8 items-center flex-col-reverse mb-40 mt-16  desktop:mb-44 desktop:mt-36"
      id="About"
    >
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="text-xl tablet:text-2xl desktop:text-4xl text-white tracking-tighter text-center">
          Hello! I am Walid Rahim.
        </h1>
        <p className="text-sm tablet:text-base desktop:text-lg text-white tracking-tighter desktop:tracking-normal w-[20rem] tablet:w-[25rem] desktop:w-[31rem] text-center">
          I am a full-stack Web Developer with a background in Design and
          Marketing. Self-taught programmer, Bootcamp grad, and computer science
          enthusiast.
        </p>
      </div>
      <img
        className="w-[12rem] h-[12rem] tablet:w-[16rem] tablet:h-[16rem] desktop:w-[24rem] desktop:h-[24rem]"
        src={WalidPfp}
        alt="Picture of the developer"
      ></img>
    </section>
  );
}
export default Hero;
