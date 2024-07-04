import React from "react";

const ResCard = ({ name, image }) => {
  return (
    <div className="w-[112px] h-[159px] p-3 bg-red-50 rounded flex-col justify-center items-center gap-3 inline-flex py-4 cursor-pointer">
      <img
        className="self-stretch grow shrink basis-0 rounded"
        src={
          image
            ? `http://localhost:8000/${image}`
            : "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"
        }
        alt={name}
      />
      <div className="text-emerald-700 text-xl font-bold font-['Syne'] leading-normal">
        {name}
      </div>
    </div>
  );
};

export default ResCard;
