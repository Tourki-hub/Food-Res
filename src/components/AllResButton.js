import React from "react";

const AllResButton = ({ name }) => {
  return (
    <button
      type="button"
      className="rounded-md bg-green-700 px-2.5 py-1.5 text-sm font-normal font-['Syne']  text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    >
      {name}
    </button>
  );
};

export default AllResButton;
