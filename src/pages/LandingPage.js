import AllResButton from "../components/AllResButton";
import Recipes from "../components/Recipes";
import NewCard from "../components/NewCard";

const LandingPage = () => {
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
              <button className="transition  ease-in-out rounded-md  delay-50  hover:bg-emerald-700 hover:-translate-y-1">
                <AllResButton name={" All Recipes"} />
              </button>
            </div>
          </div>
        </div>

        <div className="h-[103%] w-[50%] flex justify-center items-center">
          <img
            className=" w-full h-[100%] rounded-2xl "
            src="https://bellyfull.net/wp-content/uploads/2023/09/Chicken-and-Rice-Soup-blog-2-500x375.jpg"
            alt="soup"
          />
        </div>
      </div>

      <div className=" h-300 w-full  ">
        <div className="text-emerald-700 text-[32px] font-bold font-['Syne'] leading-[67.20px] flex flex-col px-6">
          Recipes by category
        </div>
        <div className="py-9 px-10  ">
          <Recipes />
        </div>
      </div>
      <div className=" h-900 w-full bg-orange-400 flex justify-center items-center p-12">
        <div className=" text-emerald-700 text-[32px] font-bold font-['Syne'] leading-[67.20px]">
          Newest Recipes here
        </div>
      </div>
      <div className="flex py-3 px-4">
        <NewCard />
        <NewCard />
        <NewCard />
      </div>
      <div className="flex justify-center py-4 ">
        <button className="transition  ease-in-out rounded-md  delay-50  hover:bg-emerald-700 hover:-translate-y-1">
          <AllResButton name={"All Recipes"} />
        </button>
      </div>

      <div className=" h-full w-full bg-yellow-300">hi</div>
    </div>
  );
};

export default LandingPage;
