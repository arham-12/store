import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section w-full lg:gap-0 gap-4 h-screen flex flex-col-reverse lg:flex-row items-center  pt-30 py-20 px-10 lg:px-20 ">
        {/* Hero-section content */}
        <div className="content w-full pt-20 h-[50%] lg:w-[50%] lg:h-full flex flex-col justify-center items-center gap-6">
          <h1 className="lg:text-7xl animate-wipeRight text-5xl lg:text-left text-center font-bold ">
            Welcome to <span className="text-blue-500">Shop Online.</span>
          </h1>
          <p className="text-xl text-center animate-wipeRight lg:text-left">
            {" "}
            Discover the latest trends in fashion and get inspired by our new
            styles. Make your shop with your
            <strong> own style</strong>.
          </p>
        </div>

        {/* Hero section image */}
        <div className="hero-pic flex justify-end items-end w-full h-[50%] lg:w-[50%] lg:h-full">
          <img
            className="w-full h-full  animate-wipeLeft object-contain lg:object-contain"
            src={"/hero-pic.png"}
            alt="hero image"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
