import React from "react";

const AllResButton = ({ name }) => {
  return (
    <div className="w-[163px] h-9 px-4 py-2 rounded border border-emerald-700 cursor-pointer">
      <div className="text-emerald-700 text-sm font-medium font-['Syne'] uppercase leading-tight cursor-pointer hover:text-white">
        {name}
      </div>
    </div>
  );
};

export default AllResButton;
