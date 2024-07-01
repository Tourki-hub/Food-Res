import React from "react";

const Dinner = () => {
  return (
    <div className="w-[212px] h-[259px] p-3 bg-red-50 rounded flex-col justify-center items-center gap-3 inline-flex py-4 cursor-pointer">
      <img
        className="self-stretch grow shrink basis-0 rounded"
        src="https://img.pikbest.com/origin/09/42/50/04gpIkbEsTXtG.jpg!f305cw"
        alt="Dinner"
      />
      <div className="text-emerald-700 text-xl font-bold font-['Syne'] leading-normal">
        Dinner
      </div>
    </div>
  );
};

export default Dinner;
