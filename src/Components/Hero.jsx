import React from "react";
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full mx-auto text-center flex flex-col justify-center h-screen">
        <p className="uppercase text-blue-500 font-bold md:text-3xl">
          Growing with data analytics
        </p>
        <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl">
          Grow with data
        </h1>
        <div className="flex flex-col justify-center items-center space-x-2">
          <p className="text-slate-400 font-bold sm:text-xl text-lg">
            fast, flexible,financing for
          </p>
          <ReactTyped
            className="text-blue-200 tracking-widest font-semibold"
            strings={["Persons", "Businness", "StartUp"]}
            typeSpeed={100}
            loop
          />
          <button className="bg-slate-400 rounded-full px-5 mt-2 hover:bg-slate-700 transition-all ease-in-out duration-700">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};
