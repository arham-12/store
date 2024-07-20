import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className=" px-20 py-4 bg-blue-50">
        <div className="footer-content flex flex-col items-center gap-6 lg:flex-row justify-between ">
          <div className="logo ">
          <div className=" flex items-center  gap-2 text-[18px] font-semibold">
        <FaCartShopping className="text-4xl text-blue-500" />
        <span className="font-bold">Shop Online</span>
      </div>
          </div>
          <div className="links flex lg:flex-row flex-row justify-between gap-10 lg:gap-20">
            <div className="Catagories">
              <h1 className="text-xl font-bold">Catagories</h1>
              <ul className="text-lg ">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
              </ul>
            </div>
            <div className="About">
              <h1 className="text-xl font-bold">About</h1>
              <ul className="text-lg">
                <li>About</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p>&copy; 2023 Company Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
