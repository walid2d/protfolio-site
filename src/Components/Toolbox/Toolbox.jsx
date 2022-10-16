import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactComponent as Html5logo } from "../../Assets/Logos/html5.svg";
import { ReactComponent as Expresslogo } from "../../Assets/Logos/express.svg";
import { ReactComponent as Javascript } from "../../Assets/Logos/javascript.svg";
import { ReactComponent as Github } from "../../Assets/Logos/github.svg";
import { ReactComponent as Mongodb } from "../../Assets/Logos/mongodb.svg";
import { ReactComponent as Mysql } from "../../Assets/Logos/mysql.svg";
import { ReactComponent as Nodedotjs } from "../../Assets/Logos/nodedotjs.svg";
import { ReactComponent as Reactlogo } from "../../Assets/Logos/react.svg";
import { ReactComponent as Sass } from "../../Assets/Logos/sass.svg";
import { ReactComponent as Storybook } from "../../Assets/Logos/storybook.svg";
import { ReactComponent as Tailwindcss } from "../../Assets/Logos/tailwindcss.svg";
AOS.init();

function Toolbox() {
  return (
    <section
      className="flex justify-between flex-col border-2 tablet:w-[588px] mx-auto desktop:w-[50rem] desktop:h-[20rem]"
      data-aos="zoom-in-up"
      id="Toolbox"
    >
      <div className="border-2 border-b-4 flex flex-row justify-between">
        <h2 className="text-white text-base ml-1 ">/skills & Tools</h2>
        <div className="flex flex-row justify-center items-center">
          <div className="w-4 h-4 mr-1 border-2 rounded-full border-green-500 hover:bg-green-500"></div>
          <div className="w-4 h-4 mr-1 border-2 rounded-full border-gray-500 hover:bg-gray-500"></div>
          <div className="w-4 h-4 mr-1 border-2 rounded-full border-red-700 hover:bg-red-700"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between flex-row m-6">
        <Html5logo
          className="w-14  h-14 desktop:w-20 desktop:h-20  m-[1rem] "
          fill="white"
        />
        <Tailwindcss
          className="w-14  h-14 desktop:w-20 desktop:h-20  m-[1rem] "
          fill="white"
        />
        <Sass
          className="w-14  h-14 desktop:w-20 desktop:h-20  m-[1rem] "
          fill="white"
        />
        <Javascript
          className="w-14  h-14 desktop:w-20 desktop:h-20  m-[1rem] "
          fill="white"
        />
        <Reactlogo
          className="w-14  h-14 desktop:w-20 desktop:h-20  m-[1rem] "
          fill="white"
        />
        <Storybook
          className="w-14  h-14 desktop:w-20 desktop:h-20  m-[1rem] "
          fill="white"
        />
        <Mysql
          className="w-14  h-14 desktop:w-20 desktop:h-20  m-[1rem] "
          fill="white"
        />
        <Mongodb
          className="w-14  h-14 desktop:w-20 desktop:h-20  m-[1rem] "
          fill="white"
        />
        <Nodedotjs
          className="w-14  h-14 desktop:w-20 desktop:h-20  m-[1rem] "
          fill="white"
        />
        <Expresslogo
          fill="white"
          className="w-14 h-14  desktop:w-20 desktop:h-20 m-[1rem]"
        />
        <Github
          className="w-14  h-14 desktop:w-20 desktop:h-20  m-[1rem] "
          fill="white"
        />
      </div>
    </section>
  );
}
export default Toolbox;
