import React from "react";
import { IoPeopleSharp, IoPerson } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";

export const Cards = () => {
  return (
    <div className="w-full py-40 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-lg p-6 flex flex-col  items-center hover:scale-110 rounded-md transition-all ease-out duration-200">
          <IoPerson className="text-6xl text-gray-700" />
          <h1 className="font-bold text-2xl"> Single User</h1>
          <h2 className="font-bold text-4xl">$90</h2>
          <p className="mt-2 my-2 border-b border-gray-300 ">1gb storage</p>
          <p className="mt-2 my-2 border-b border-gray-300 ">10 user alowed</p>
          <p className="mt-2 my-2 border-b border-gray-300 ">send up to 20gb</p>
          <button className="bg-blue-800 text-white rounded-md mt-2 p-3 hover:bg-blue-950 transition-all ease-out duration-500 font-bold tracking-widest">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-lg p-6 flex flex-col  items-center hover:scale-110 rounded-md transition-all ease-out duration-200 bg-slate-100">
          <IoPeopleSharp className="text-6xl text-gray-700" />
          <h1 className="font-bold text-2xl"> Single User</h1>
          <h2 className="font-bold text-4xl">$90</h2>
          <p className="mt-2 my-2 border-b border-gray-300 ">1gb storage</p>
          <p className="mt-2 my-2 border-b border-gray-300 ">10 user alowed</p>
          <p className="mt-2 my-2 border-b border-gray-300 ">send up to 20gb</p>
          <button className="bg-blue-800 text-white rounded-md mt-2 p-3 hover:bg-blue-950 transition-all ease-out duration-500 font-bold tracking-widest">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-lg p-6 flex flex-col  items-center hover:scale-110 rounded-md transition-all ease-out duration-200">
          <FaPeopleGroup className="text-6xl text-gray-700" />
          <h1 className="font-bold text-2xl"> Single User</h1>
          <h2 className="font-bold text-4xl">$90</h2>
          <p className="mt-2 my-2 border-b border-gray-300 ">1gb storage</p>
          <p className="mt-2 my-2 border-b border-gray-300 ">10 user alowed</p>
          <p className="mt-2 my-2 border-b border-gray-300 ">send up to 20gb</p>
          <button className="bg-blue-800 text-white rounded-md mt-2 p-3 hover:bg-blue-950 transition-all ease-out duration-500 font-bold tracking-widest">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};
