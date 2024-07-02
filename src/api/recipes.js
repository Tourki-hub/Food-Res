import instance from ".";

const getAllRecipes = async () => {
  const { data } = await instance.get("recipe");
  return data;
};
const createRecipes = async () => {
  const { data } = await instance.post("recipe");
  return data;
};
export { getAllRecipes, createRecipes };
