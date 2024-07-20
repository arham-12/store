import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../Cards/ProductCard";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import axios from "axios";
import CartContext from "../../Context/CartContext";

const ProductSection = ({ Products, ShowSearch }) => {
  const {setproduct} =useContext(CartContext)
  const [webSocket, setWebSocket] = useState(null);
  const [voiceRecognitionActive, setVoiceRecognitionActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetch_api = async()=>{
      await axios.get("http://localhost:8000/show_products").then((res)=>{ setproduct(res.data) })
    }
    // Cleanup function to close WebSocket connection on component unmount
    return () => {
      fetch_api()
    };
  }, []);

  const startVoiceRecognition = () => {
    if (webSocket && !voiceRecognitionActive) {
      setVoiceRecognitionActive(true);
      webSocket.send("start");
    }
  };

  const stopVoiceRecognition = () => {
    if (webSocket && voiceRecognitionActive) {
      setVoiceRecognitionActive(false);
      webSocket.send("stop");
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <div className="products-section w-full py-10 px-10 lg:px-20 flex flex-col items-center">
        {/* Product section content */}
        <div className="content gap-4 flex flex-col justify-center items-center">
          <h1 className="lg:text-7xl text-5xl font-bold">Products</h1>
          <p className="lg:text-xl text-lg text-center text-blue-500 font-semibold">
            Discover the latest products!
          </p>
        </div>

        <div
          className={`search w-[40%] ${
            ShowSearch ? "flex" : "hidden"
          } justify-center items-center py-2 my-10 gap-2`}
        >
          <input
            className="py-3 px-3 outline-none border rounded-full border-blue-500"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={handleSearchInputChange}
          />
          <FaSearch className="text-4xl p-2 rounded-full bg-blue-500 cursor-pointer text-white" />
          <MdKeyboardVoice
            className={`text-4xl p-2 rounded-full bg-blue-500 cursor-pointer text-white ${
              voiceRecognitionActive ? "bg-red-500" : ""
            }`}
            onClick={voiceRecognitionActive ? stopVoiceRecognition : startVoiceRecognition}
          />
        </div>

        {/* Products cards */}
        <div className="products py-5 lg:px-0 flex lg:justify-center flex-col lg:flex-row flex-wrap w-full gap-10">
          {/* Product card */}
          {Products.map((product) => (
            <ProductCard
              key={product.Id}
              Id={product.Id}
              Url={product.Url}
              Title={product.Title}
              Desc={product.Desc}
              Label={product.Label}
              Price={product.Price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
