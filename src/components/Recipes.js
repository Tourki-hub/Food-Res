import React from "react";
import CategoryCard from "./CategoryCard";

const Recipes = () => {
  return (
    <div className="flex space-x-5">
      <CategoryCard
        name={"Breakfast"}
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMxqPl8UULMRhBrdKjXSSRi2ucjhx_3BXnw&s"
        }
      />
      <CategoryCard
        name={"Lunch"}
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMxqPl8UULMRhBrdKjXSSRi2ucjhx_3BXnw&s"
        }
      />
      <CategoryCard
        name={"Snacks"}
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMxqPl8UULMRhBrdKjXSSRi2ucjhx_3BXnw&s"
        }
      />
      <CategoryCard
        name={"Dinner"}
        img={"https://img.pikbest.com/origin/09/42/50/04gpIkbEsTXtG.jpg!f305cw"}
      />
      <CategoryCard
        name={"Vegan"}
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZCcl1Wz20AT7ilmrqfpoq2MSH8-n_THnDg&s"
        }
      />
    </div>
  );
};

export default Recipes;
