import React from "react";

const Vegan = () => {
  return (
    <div className="w-[212px] h-[259px] p-3 bg-red-50 rounded flex-col justify-center items-center gap-3 inline-flex py-4 cursor-pointer">
      <img
        className="self-stretch grow shrink basis-0 rounded"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZCcl1Wz20AT7ilmrqfpoq2MSH8-n_THnDg&s"
        alt="Vegan"
      />
      <div className="text-emerald-700 text-xl font-bold font-['Syne'] leading-normal">
        Vegan
      </div>
    </div>
  );
};

export default Vegan;
