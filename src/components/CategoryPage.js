import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRecipesByCategory } from "../api/recipes"; // Ensure this function is correct
import ResCard from "../components/ResCard";

const CategoryPage = () => {
  const { name } = useParams();
  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes", name],
    queryFn: () => getRecipesByCategory(name),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Occurred: {error.message}</div>;

  return (
    <div>
      <h1>Recipes for Category {name}</h1>
      <div className="flex flex-wrap justify-center">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="px-4 py-5">
            <ResCard name={recipe.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
