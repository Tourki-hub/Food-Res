import React, { Fragment, useContext, useState } from "react";

import RegesterButton from "./RegesterButton";
import LogInButton from "./LogInButton";
import Profile from "../pages/Profile";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../Context/userContext";
import Menu from "./MenuButton";
import MenuDropDown from "./MenuButton";

const NavBar = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  return (
    <Fragment>
      <div className="w-full h-[72px] flex justify-center bg-white items-center  p-9">
        <div className="justify-start items-center gap-2 flex cursor-pointer">
          <div className=" flex justify-start items-center space-x-6 px-20 ">
            <div className="rounded-md bg-green-700  text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition  ease-in-out  delay-50  hover:-translate-y-1">
              <RegesterButton />
            </div>

            <LogInButton name={"LogIn"} />
            <div>
              {user && (
                <NavLink
                  to="/profile"
                  className="text-emerald-700 text-base font-bold font-['Syne'] leading-tight"
                >
                  Profile
                </NavLink>
              )}
            </div>
          </div>
        </div>
        <div className=" text-emerald-700 text-4xl font-normal font-['Yuji Syuku'] flex justify-start items-start w-full">
          Dishy and dish
        </div>
        <div className="text-emerald-700 text-base font-bold font-['Syne'] leading-tight transition  ease-in-out rounded-md  delay-50 hover:-translate-y-1">
          <MenuDropDown />
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
