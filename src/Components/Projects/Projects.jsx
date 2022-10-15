import React from "react";
import AOS from "aos";
import Folder from "../../Assets/Folder.svg";
import { appData } from "../../Data/Data";
import "aos/dist/aos.css";
AOS.init();

function Projects() {
  return (
    <section
      className="flex justify-between flex-col border-2 mt-8"
      data-aos="zoom-in-up"
    >
      <div className="border-2 border-b-4 flex flex-row justify-between">
        <h2 className="text-white text-base ml-1">/Projects</h2>
        <div className="flex flex-row justify-center items-center">
          <div className="w-4 h-4 mr-1 border-2 rounded-full   border-green-500 hover:bg-green-500"></div>
          <div className="w-4 h-4 mr-1 border-2 rounded-full border-gray-500 hover:bg-gray-500"></div>
          <div className="w-4 h-4 mr-1 border-2 rounded-full border-red-700 hover:bg-red-700"></div>
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-between items-center m-6">
        {appData.map((value) => {
          return (
            <a
              className="flex flex-col justify-center items-center w-20 h-30 m-[1rem]"
              href={value.link}
              target={"_blank"}
              id={value.id}
            >
              <img
                className="w-12  h-12 self-center"
                src={Folder}
                alt="folder icon"
              />
              <div className="flex flex-col justify-center align-center">
                <h3 className="text-white text-sm self-center">
                  {value.title}
                </h3>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
