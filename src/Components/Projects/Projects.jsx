import React from "react";
import AOS from "aos";
import Folder from "../../Assets/Folder.png";
import "aos/dist/aos.css";
AOS.init();

function Projects() {
  return (
    <section
      className="flex justify-between flex-col border-2 mt-8"
      data-aos="zoom-in-up"
    >
      <div className="border-2 border-b-4 flex flex-row justify-between">
        <h2 className="text-white text-lg ml-1">/Projects</h2>
        <div className="flex flex-row justify-center items-center">
          <div className="w-4 h-4 mr-1 border-2 rounded-full   border-green-500 hover:bg-green-500"></div>
          <div className="w-4 h-4 mr-1 border-2 rounded-full border-gray-500 hover:bg-gray-500"></div>
          <div className="w-4 h-4 mr-1 border-2 rounded-full border-red-700 hover:bg-red-700"></div>
        </div>
      </div>
      <div className="flex justify-between flex-row mr-6 ml-6 mt-20 mb-20">
        <img className="w-40  h-40" src={Folder} alt="folder icon" />
        <img className="w-40  h-40" src={Folder} alt="folder icon" />
        <img className="w-40  h-40" src={Folder} alt="folder icon" />
        <img className="w-40  h-40" src={Folder} alt="folder icon" />
        <img className="w-40  h-40" src={Folder} alt="folder icon" />
      </div>
    </section>
  );
}

export default Projects;
