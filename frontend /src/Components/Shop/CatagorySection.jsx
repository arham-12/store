import React from "react";
import CatagoryCard from "../Cards/CatagoryCard";

const CatagorySection = () => {
  return (
    <>
      <div className="catagory-section flex justify-center items-center flex-col py-10 px-10 lg:px-20 w-full">
        <div className="content flex justify-center items-center py-5 flex-col gap-4">
          <h1 className="lg:text-7xl text-5xl font-bold">Catagories</h1>
          <p className="lg:text-xl text-lg text-center text-primary font-semibold ">
            Discover the catagories!
          </p>
        </div>
        <div className="catagories w-full flex flex-wrap justify-center items-center gap-10">
          <CatagoryCard
            BgColor={"bg-green-700"}
            Title={"Men"}
            Desc={"Lets exlore men stock"}
            Url={"/catagory-1.png"}
          />
          <CatagoryCard
            BgColor={"bg-purple-700"}
            Title={"Women"}
            Desc={"Lets exlore men stock"}
            Url={"/women.png"}
          />
          <CatagoryCard
            BgColor={"bg-yellow-700"}
            Title={"Kids"}
            Desc={"Lets exlore men stock"}
            Url={"/catagory-1.png"}
          />
          <CatagoryCard
            BgColor={"bg-blue-700"}
            Title={"Men"}
            Desc={"Lets exlore men stock"}
            Url={"/catagory-1.png"}
          />
        </div>
      </div>
    </>
  );
};

export default CatagorySection;
