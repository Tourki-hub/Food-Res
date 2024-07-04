import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllRecipes } from "../api/recipes";
import Modal from "../components/Modal";

const Recipes = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  return (
    <>
      <div className="bg-white-900 min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
        <div className="max-w-[90%] overflow-scroll w-full px-6 py-8 bg-white rounded-md shadow-md max-h-[80%]">
          <h2 className="text-3xl text-sky-500 font-semibold mb-6">Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes?.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-grey-700 p-6 rounded-md flex flex-col items-center justify-center"
              >
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                        width={200}
                        height={200}
                        x="70%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                      >
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                      </pattern>
                    </defs>
                    <svg
                      x="80%"
                      y={-1}
                      className="overflow-visible fill-gray-50"
                    >
                      <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                        strokeWidth={0}
                      />
                    </svg>
                    <rect
                      width="100%"
                      height="100%"
                      strokeWidth={3}
                      fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                    />
                  </svg>
                </div>
                <div className="card w-96 glass">
                  <figure>
                    <img
                      src={`http://localhost:8000/${recipe.image}`}
                      alt={recipe.name}
                      className="w-full h-[200px] object-cover mx-auto"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-sky-500 ">{recipe.name}</h2>
                    <div className="card-actions justify-end">
                      <button
                        className="btn btn-primary"
                        onClick={() => openModal(recipe)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedRecipe && (
        <Modal
          show={showModal}
          setShowModal={setShowModal}
          recipe={selectedRecipe}
        />
      )}
    </>
  );
};

export default Recipes;
