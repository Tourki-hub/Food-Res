import React from "react";

const Breakfast = () => {
  return (
    <div className="w-[212px] h-[259px] p-3 bg-red-50 rounded flex-col justify-center items-center gap-3 inline-flex py-4 cursor-pointer">
      <img
        className="self-stretch grow shrink basis-0 rounded"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMxqPl8UULMRhBrdKjXSSRi2ucjhx_3BXnw&s"
        alt="Break Fast"
      />
      <div className="text-emerald-700 text-xl font-bold font-['Syne'] leading-normal">
        Breakfast
      </div>
    </div>
  );
};

export default Breakfast;
