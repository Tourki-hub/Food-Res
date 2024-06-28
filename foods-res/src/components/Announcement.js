import React from "react";

const Announcement = () => {
  return (
    <div className="w-full h-[50px] px-[120px] py-3 bg-orange-400 justify-center items-center gap-2.5 inline-flex">
      <div className="grow shrink basis-0 text-center text-red-50 text-base font-normal font-['Syne'] leading-relaxed  flex justify-center">
        New recipes added every week!
      </div>
    </div>
  );
};

export default Announcement;
