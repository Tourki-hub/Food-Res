import React from "react";

const AllResButton = ({ name }) => {
  return (
    <div className="w-[163px] h-9 px-4 py-2 rounded border border-emerald-700 cursor-pointer bg-white">
      <div className="text-emerald-700 text-sm font-medium font-['Syne'] cursor-pointer hover:text-white text-center">
        {name}
      </div>
    </div>
  );
};

export default AllResButton;
