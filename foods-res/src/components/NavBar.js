import React from "react";
import DropDownIcon from "./DropDownIcon";
import RegesterButton from "./RegesterButton";
import LogInButton from "./LogInButton";

const NavBar = () => {
  return (
    <div className="w-full h-[72px] px-[45px] flex justify-start bg-white">
      <div className="justify-start items-center gap-2 flex">
        <DropDownIcon />
        <div className="text-emerald-700 text-base font-bold font-['Syne'] leading-tight ">
          Menu
        </div>
        <div className=" flex justify-center items-center px-40 space-x-6">
          <RegesterButton />
          <LogInButton />
        </div>
        <div className=" text-emerald-700 text-4xl font-normal font-['Yuji Syuku'] ">
          Dishy and dish
        </div>
      </div>
    </div>
  );
};

export default NavBar;
