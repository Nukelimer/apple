import React, { useState } from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import { LuX } from "react-icons/lu";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex max-md:justify-between w-full screen-max-screen">
        <img src={appleImg} alt="logo" width={16} height={16} />
        <div className="flex flex-1 justify-between max-md:hidden">
          {navLists.map((nav) => {
            return (
              <div
                className="mx-24 last-of-type:pl-[6px] cursor-pointer text-sm text-gray hover:text-white transition-all"
                key={nav}>
                {nav}
              </div>
            );
          })}
        </div>

        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className=" hidden max-md:flex p-5 justify-center  items-center flex-col gap-y-2 ">
          <p className="h-[2px] w-[30px]  bg-slate-400"></p>
          <p className="h-[3px] w-[30px]  bg-slate-400"></p>
          
        </div>

        {isOpen && (
          <div className=" hidden max-md:flex bg-black/80 h-screen absolute right-10 w-full top-0 z-20 left-0 justify-end " onClick={() => {
            
            setIsOpen(false)
         
          }}>
            <div className="flex flex-col w-2/3  bg-slate-800 py-4 rounded-md  justify-start items-center  shadow-lg">
              <div
                className="self-end pr-9"
                onClick={() => {
                  setIsOpen(false);
                }}>
                <LuX size={20} />
              </div>
              {navLists.map((nav) => {
                return (
                  <div
                    className="px-6 cursor-pointer  text-sm text-gray hover:underline  my-4 hover:text-slate-600 transition-all"
                    key={nav}>
                    {nav}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="flex max-md:hidden items-baseline gap-7 max-sm:justify-end max-sm:flex-1  ">
          <img src={searchImg} alt="search img" width={16} height={16} />
          <img src={bagImg} alt="bag img" width={16} height={16} />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
