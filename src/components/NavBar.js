import React, { Fragment, useContext, useState } from "react";

import RegesterButton from "./RegesterButton";
import LogInButton from "./LogInButton";
import Profile from "../pages/Profile";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../Context/userContext";

const NavBar = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  return (
    <Fragment>
      <div className="w-full h-[72px] flex justify-center bg-white items-center  p-9">
        <div className="justify-start items-center gap-2 flex cursor-pointer">
          <div className="text-emerald-700 text-base font-bold font-['Syne'] leading-tight ">
            Menu
          </div>
          <div className=" flex justify-start items-center space-x-6 px-20 ">
            <RegesterButton />

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
      </div>
    </Fragment>
  );
};

export default NavBar;
