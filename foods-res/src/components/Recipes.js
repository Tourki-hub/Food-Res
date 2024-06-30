import React from "react";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Snacks from "./Snacks";
import Vegan from "./Vegan";

const Recipes = () => {
  return (
    <div className="flex space-x-5">
      <Breakfast />
      <Lunch />
      <Dinner />
      <Snacks />
      <Vegan />
    </div>
  );
};

export default Recipes;
