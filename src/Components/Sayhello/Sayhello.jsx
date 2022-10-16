import React from "react";
function Sayhello() {
  return (
    <div className="flex justify-center" id="Contact">
      <section className="flex justify-between flex-col border-2 my-12 h-56 w-[326px] tablet:w-[400px] desktop:w-[28rem]">
        <div className="border-2 border-b-4 flex flex-row justify-between">
          <h2 className="text-white text-base ml-1">/Get in Touch</h2>
          <div className="flex flex-row justify-center items-center">
            <div className="w-4 h-4 mr-1 border-2 rounded-full  border-green-500 hover:bg-green-500"></div>
            <div className="w-4 h-4 mr-1 border-2 rounded-full border-gray-500 hover:bg-gray-500"></div>
            <div className="w-4 h-4 mr-1 border-2 rounded-full border-red-700 hover:bg-red-700"></div>
          </div>
        </div>
        <div className="flex justify-center flex-col align-center flex-grow m-6">
          <h3 className="text-white tablet:text-base text-center mb-4 text-sm">
            Want to work together or have any questions?
          </h3>
          <button
            className="text-white text-sm font-bold bg-green-500 w-32 h-12 self-center mt-3"
            onClick={() => window.open("mailto:ar_olid@outlook.com", "_blank")}
          >
            Say Hello 👋
          </button>
        </div>
      </section>
    </div>
  );
}
export default Sayhello;
