import AllResButton from "../components/AllResButton";
import Recipes from "../components/Recipes";

import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../api/category";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";

const LandingPage = () => {
  const {
    data: category,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: getAllCategory,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Occurred: {error.message}</div>;
  return (
    //landing page
    <div className=" w-full h-full bg-red-600 flex-col">
      <div className=" h-full w-full bg-red-50 flex">
        <div className="h-full w-[50%] bg bg-red-50  flex justify-center items-center flex-col">
          <div className="text-orange-400 font-mono text-3xl font-semibold leading-[38.40px]">
            Let's MAKE Memorable Dishes
          </div>
          <div className="w-[469px] text-emerald-700 text-l font-normal font-['Syne'] leading-[38.40px] flex flex-col">
            A blog full of healthy and easy to make recipes that take the stress
            out of cooking.
            <div className="flex h-full items-center px-10 py-2 justify-start ">
              <button className="transition  ease-in-out rounded-md  delay-50  hover:-translate-y-1">
                <AllResButton name={" All Recipes"} />
              </button>
            </div>
          </div>
        </div>

        <div className="h-[100%] w-[50%] flex justify-center items-center">
          <img
            className=" w-full object-cover h-full rounded-2xl "
            src="https://images.unsplash.com/photo-1548940740-204726a19be3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHN8ZW58MHx8MHx8fDA%3D"
            alt="Pizza"
          />
        </div>
      </div>

      <div className=" h-300 w-full  ">
        <div className="text-emerald-700 text-[32px] font-bold font-['Syne'] leading-[67.20px] flex flex-col ">
          category
        </div>
        <div className="py-9 px-10  ">
          <Link to={"/Allcategory"}>
            <div className=" flex justify-center p-6 space-x-6">
              {category?.map((cat) => (
                <CategoryCard key={cat._id} name={cat.name} />
              ))}
            </div>
            <Recipes />
          </Link>
        </div>
      </div>
      <div className="h-full w-full bg-red-50">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
