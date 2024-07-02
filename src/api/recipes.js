import { type } from "@testing-library/user-event/dist/type";
import instance from ".";

const getAllRecipes = async () => {
  const { data } = await instance.get("recipe");
  return data;
};
const createRecipes = async (
  category,
  title,
  ingredients,
  instructions,
  prepTime,
  cookTime
) => {
  const res = await instance.post("recipe", {
    category: category,
    title: title,
    ingredients: ingredients,
    instructions: instructions,
    prepTime: prepTime,
    cookTime: cookTime,
  });
  return res.data;
};
export { getAllRecipes, createRecipes };
