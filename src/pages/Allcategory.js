import React from "react";
import Recipes from "../components/Recipes";
import NewCard from "../components/NewCard";

const Allcategory = () => {
  return (
    <div className=" w-full h-full bg-red-600 flex-col">
      <div className="w-full h-30 bg-white flex justify-center items-center p-6 search">
        <input
          type="text"
          name="search"
          id="search"
          className="block w-[30%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
      </div>
      <div className=" flex justify-center p-6 si">
        <Recipes />
      </div>
      <div className="w-full h-full bg-red-50">
        <NewCard />
      </div>
    </div>
  );
};

export default Allcategory;
