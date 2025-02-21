import React from "react";

export const Newsletter = () => {
  return (
    <div className="w-full text-white p-8">
      <div className="grid md:grid-cols-3 max-w-[1240px] mx-auto">
        <div className="lg:col-span-2">
          <h1 className="font-bold text-2xl md:text-3xl">
            Join to our newsletter
          </h1>
          <p className="mr-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium sed neque voluptates ratione illo tempore consequuntur
            doloribus in incidunt maiores.
          </p>
        </div>
        <div className="flex flex-col mt-2">
          <input
            className="p-3 text-gray-500"
            type="text"
            placeholder="your email"
          />
          <button className="bg-blue-800 text-white rounded-md p-3 mt-2 hover:bg-blue-950 transition-all ease-out duration-500 font-bold tracking-widest">
            Suscribe
          </button>
        </div>
      </div>
    </div>
  );
};
