import React from "react";

const CatagoryCard = ({ BgColor, Title, Desc, Url }) => {
  return (
    <>
      <div
        className={`catagory w-full lg:w-[45%] h[300px] py-10 rounded-xl ${BgColor} flex flex-col lg:flex-row items-center justify-between gap-4`}
      >
        <div className="image flex justify-center items-center h-[50%] lg:h-[30%] lg:w-[50%]">
          <img className="h-[50%] w-[50%] object-contain" src={Url} alt="" />
        </div>
        <div className="content w-[50%]">
          <h1 className="text-3xl text-white font-bold">{Title}</h1>
          <p className="text-lg">{Desc}</p>
        </div>
      </div>
    </>
  );
};

export default CatagoryCard;
