import React, { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center text-blue-500 mx-auto p-5 max-w-[1240px] h-24">
      <h1 className="w-full text-3xl font-bold">REACT</h1>
      <ul className="flex hidden">
        <li className="p-2">Home</li>
        <li className="p-2">Empresa</li>
        <li className="p-2">Patrocinios</li>
        <li className="p-2">Contacto</li>
      </ul>
      <div onClick={handleNav}>
        {!nav ? <IoMdClose size={30} /> : <IoIosMenu size={30} />}
      </div>
      <div className="fixed top-0 left-0 w-[60%] border-r h-screen border-r-blue-900 p-4 bg-slate-900">
        <h1 className="w-full text-3xl font-bold">REACT</h1>
        <ul className="uppercase">
          <li className="p-4 border-b border-b-blue-900 ">Home</li>
          <li className="p-4 border-b border-b-blue-900 ">Empresa</li>
          <li className="p-4 border-b border-b-blue-900 ">Patrocinios</li>
          <li className="p-4 ">Contacto</li>
        </ul>
      </div>
    </div>
  );
};
