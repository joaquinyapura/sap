import React from "react";
import computer from "../assets/computer.webp";

export const ComputerSection = () => {
  return (
    <div className="w-full bg-white py-16 px-10">
      <div className="max-w-[1240px] grid md:grid-cols-2 mx-auto gap-2">
        <img src={computer} alt="computer image" className="w-[500px]" />
        <div className="flex flex-col justify-center">
          <h1 className="text-blue-900 text-xl font-bold">
            Data Analytics Dashboard
          </h1>
          <p className="text-2xl md:text-3xl font-bold ">
            Manage all your data in our central
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            labore odit nulla minima doloribus iste nostrum earum eos quae
            vitae, dicta mollitia corrupti exercitationem aperiam fugiat
            inventore nihil! Atque, quos!
          </p>
          <button className="bg-blue-800 text-white rounded-full py-2 mt-2 hover:bg-blue-950 transition-all ease-out duration-500 font-bold tracking-widest">
            TRY IT
          </button>
        </div>
      </div>
    </div>
  );
};
