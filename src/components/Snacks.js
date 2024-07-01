import React from "react";

const Snacks = () => {
  return (
    <div className="w-[212px] h-[259px] p-3 bg-red-50 rounded flex-col justify-center items-center gap-3 inline-flex py-4 cursor-pointer">
      <img
        className="self-stretch grow shrink basis-0 rounded"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpY02xFnkLQn5Jb3GBg1NPUJG5AIhmqpvufw&s"
        alt="Snacks"
      />
      <div className="text-emerald-700 text-xl font-bold font-['Syne'] leading-normal">
        Snacks
      </div>
    </div>
  );
};

export default Snacks;
