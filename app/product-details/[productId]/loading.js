import React from "react";
import SkeletonProductInfo from "./_components/SkeletonProductInfo";

const loading = () => {
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-48  place-items-center px-10  md:px-28 my-20 mb-96">
        <div className="w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse"></div>
        <SkeletonProductInfo />
      </div>
      ;
    </>
  );
};

export default loading;
