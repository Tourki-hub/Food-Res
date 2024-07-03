import instance from ".";

const getAllRecipes = async () => {
  const { data } = await instance.get("/recipe");
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
  try {
    const res = await instance.post("/recipe", {
      category: category,
      title: title,
      ingredients: ingredients,
      instructions: instructions,
      prepTime: prepTime,
      cookTime: cookTime,
    });

    console.log("Response:", res);
    return res.data;
  } catch (error) {
    console.error("Error creating recipe:", error);
    throw error;
  }
};
export { getAllRecipes, createRecipes };
