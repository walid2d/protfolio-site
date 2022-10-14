import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactComponent as Html5logo } from "../../Assets/Logos/html5.svg";
import { ReactComponent as Express } from "../../Assets/Logos/express.svg";
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
      className="flex justify-between flex-col border-2"
      data-aos="zoom-in-up"
      id="Toolbox"
    >
      <div className="border-2 border-b-4 flex flex-row justify-between">
        <h2 className="text-white text-lg ml-1">/skills & Tools</h2>
        <div className="flex flex-row justify-center items-center">
          <div className="w-4 h-4 mr-1 border-2 rounded-full border-green-500 hover:bg-green-500"></div>
          <div className="w-4 h-4 mr-1 border-2 rounded-full border-gray-500 hover:bg-gray-500"></div>
          <div className="w-4 h-4 mr-1 border-2 rounded-full border-red-700 hover:bg-red-700"></div>
        </div>
      </div>
      <div className="flex justify-between flex-row mr-6 ml-6 mt-20 mb-20">
        <Html5logo className="w-20  h-20 " fill="white" />
        <Tailwindcss className="w-20  h-20 " fill="white" />
        <Sass className="w-20  h-20 " fill="white" />
        <Javascript className="w-20  h-20 " fill="white" />
        <Reactlogo className="w-20  h-20 " fill="white" />
        <Storybook className="w-20  h-20 " fill="white" />
        <Mysql className="w-20  h-20 " fill="white" />
        <Mongodb className="w-20  h-20 " fill="white" />
        <Nodedotjs className="w-20  h-20 " fill="white" />
        <Express fill="white" className="w-20 h-20 " fill="white" />
        <Github className="w-20  h-20 " fill="white" />
      </div>
    </section>
  );
}
export default Toolbox;
