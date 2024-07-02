import React from "react";
import Recipes from "../components/Recipes";
import NewCard from "../components/NewCard";
import CategoryCard from "../components/CategoryCard";
import { Query, useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../api/category";

const Allcategory = () => {
  const {
    data: category,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: getAllCategory,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Occurred: {error.message}</div>;
  return (
    <div className=" w-full h-full bg-white flex-col">
      <div className="w-full h-30 bg-white flex justify-center items-center p-6 search">
        <input
          type="text"
          name="search"
          id="search"
          className="block w-[30%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
      </div>
      <div className=" flex justify-center p-6 space-x-6">
        {category?.map((cat) => (
          <CategoryCard key={cat._id} name={cat.name} />
        ))}
      </div>
    </div>
  );
};

export default Allcategory;
