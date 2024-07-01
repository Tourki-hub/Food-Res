import React from "react";

const Breakfast = ({ name, img }) => {
  return (
    <div className="w-[112px] h-[159px] p-3 bg-red-50 rounded flex-col justify-center items-center gap-3 inline-flex py-4 cursor-pointer">
      <img
        className="self-stretch grow shrink basis-0 rounded"
        src={img}
        alt="Break Fast"
      />
      <div className="text-emerald-700 text-xl font-bold font-['Syne'] leading-normal">
        {name}
      </div>
    </div>
  );
};

export default Breakfast;
