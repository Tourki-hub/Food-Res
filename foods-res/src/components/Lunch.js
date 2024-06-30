import React from "react";

const Lunch = () => {
  return (
    <div className="w-[212px] h-[259px] p-3 bg-red-50 rounded flex-col justify-center items-center gap-3 inline-flex py-4 cursor-pointer">
      <img
        className="self-stretch grow shrink basis-0 rounded"
        src="https://www.shutterstock.com/image-photo/arabic-cuisine-middle-eastern-traditional-600nw-1690553077.jpg"
        alt="Lunch"
      />
      <div className="text-emerald-700 text-xl font-bold font-['Syne'] leading-normal">
        Lunch
      </div>
    </div>
  );
};

export default Lunch;
