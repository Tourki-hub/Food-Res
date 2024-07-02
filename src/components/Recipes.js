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
      <CategoryCard
        name={"All category"}
        img={
          "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"
        }
      />
    </div>
  );
};

export default Recipes;
