import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { getAllCategory } from "../api/category";
import { useQuery } from "@tanstack/react-query";

const Recipes = () => {
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
    <CategoryCard
      name={"All category"}
      img={
        "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"
      }
    />
  );
};

export default Recipes;
