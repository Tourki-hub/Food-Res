import React, { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import {
  Query,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getAllCategory } from "../api/category";
import ResCard from "../components/ResCard";
import { getAllRecipes } from "../api/recipes";
import AllResButton from "../components/AllResButton";
import Modal from "../components/Modal";
import Input from "../components/Input";

const Allcategory = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [prep, setPrep] = useState("");
  const [cookTime, setCookTime] = useState();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["create Resipe"],
    mutationFn: (addNewRes) => (name, title, ingredients, prep, cookTime),
    onSuccess: () => {
      setShowModal(false);
      queryClient.invalidateQueries(["recipes"]);
    },
  });
  const {
    data: category,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: getAllCategory,
  });

  const { data: recipes } = useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Occurred: {error.message}</div>;

  return (
    <div className=" w-full h-full bg-white flex-col justify-center">
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
      <div className=" flex justify-center space-x-5 p-10 flex-wrap">
        {recipes?.map((recipe) => (
          <ResCard key={recipe._id} name={recipe.title} />
        ))}
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <form action="Post">
          <Input
            name={"category"}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Input
            name={"title"}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <Input
            name={"Ingredients"}
            onChange={(event) => {
              setIngredients(event.target.value);
            }}
          />
          <Input
            name={"prep-time"}
            onChange={(event) => {
              setPrep(event.target.value);
            }}
          />
          <Input
            name={"cook-Time"}
            onChange={(event) => {
              setCookTime(event.target.value);
            }}
          />
          <button
            onClick={mutate}
            className="w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-green-400 "
          >
            Submit
          </button>
        </form>
      </Modal>
      <div
        className="flex justify-center p-8 items-center"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <AllResButton name={"Create New recipe"} />
      </div>
    </div>
  );
};

export default Allcategory;
