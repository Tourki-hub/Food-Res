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
import { createRecipes, getAllRecipes } from "../api/recipes";
import AllResButton from "../components/AllResButton";
import Modal from "../components/Modal";
import Input from "../components/Input";
import { MultiSelect } from "react-multi-select-component";
import { ingrediant } from "../api/ingrediant";

const Allcategory = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [prep, setPrep] = useState(0);
  const [cookTime, setCookTime] = useState(0);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["create Resipe"],
    mutationFn: () =>
      createRecipes({
        category: selected[0]?.value,
        title,
        ingredients: selected[0]?.value,
        prepTime: prep,
        cookTime,
      }),
    onSuccess: () => {
      setShowModal(false);

      queryClient.invalidateQueries(["recipes"]);
    },
  });
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

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
  const optionsCategory = category?.map((cat) => ({
    label: cat.name,
    value: cat._id,
  }));
  const optionsIngrediant = recipes?.map((ingrediant) => ({
    label: ingrediant.title,
    value: ingrediant._id,
  }));
  const filteredCategory = category?.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" w-full h-full bg-white flex-col justify-center">
      <div className="w-full h-30 bg-white flex justify-center items-center p-6 search">
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          className="block w-[30%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
      </div>
      <div className="overflow-hidden bg-gray-50 sm:rounded-lg flex p-3 items-center">
        {filteredCategory?.map((cat) => (
          <CategoryCard key={cat._id} name={cat.name} />
        ))}
      </div>
      <div className=" flex justify-center space-x-5 p-10 flex-wrap">
        {recipes?.map((recipe) => (
          <div className="px-4 py-5 ">
            <ResCard
              name={recipe.title}
              key={recipe._id}
              image={recipe.image}
            />
          </div>
        ))}
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <form>
          <div className="flex  justify-between">
            category
            <MultiSelect
              className=" w-[70%] h-20px"
              options={optionsCategory}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
            />
          </div>

          <div className="flex  justify-between">
            Ingredians
            <MultiSelect
              className=" w-[70%] h-5px"
              options={optionsIngrediant}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
            ></MultiSelect>
          </div>
          <Input
            className=" w-[100%] h-20"
            name={"title"}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <Input
            name={"prep-time"}
            onChange={(event) => {
              setPrep(event.target.value);
            }}
          />
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              mutate();
            }}
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
