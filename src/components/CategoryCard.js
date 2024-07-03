import React from "react";

const category = ({ name }) => {
  return (
    <div className="overflow-hidden bg-gray-50 sm:rounded-lg cursor-pointer flex justify-center">
      {/* <img
        className="self-stretch grow shrink basis-0 rounded"
        src={img}
        alt="category"
      /> */}
      <div className="px-4 py-5 sm:p-6">{name}</div>
    </div>
  );
};

export default category;
