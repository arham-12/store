import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../Redux/store";
import CartContext from "../../Context/CartContext";

const ProductCard = ({ Id, Title, Desc, Url, Label, Price }) => {
  // States
  const { addToCart } = useContext(CartContext);

  // Declaring dispatch
  const dispatch = useDispatch();

  // Functions
  const addCart = () => {
    dispatch(increment());
  };

  const ClickFunc = async () => {
    addCart();
    await addToCart(Id, Title, Desc, Url, Label, Price);
  };

  return (
    <>
      <div
        key={Id}
        className={`product animate-fade flex flex-col lg:flex-row items-center w-[100%] lg:w-[45%] h-auto lg:h-[200px] bg-blue-50 rounded-xl my-2`}
      >
        {/* Product Image  */}
        <div className="product-image flex w-full lg:w-[50%] h-[50%] lg:h-full p-2">
          <img
            className="h-full w-full object-contain rounded-md"
            src={`/${Url}`}
            alt="product image"
          />
        </div>

        {/* Product Content */}
        <div className="product-content w-full lg:w-[50%] lg:h-full h-[50%]  gap-2 lg:gap-2 p-4 flex flex-col justify-center items-start ">
          {/* Product Catagory */}
          <h1 className="product-label py-1 px-8 mt-2 text-[10px] border border-black rounded-full">
            {Label}
          </h1>

          {/* Product Heading */}
          <h1 className="product-heading text-xl font-bold">{Title}</h1>

          {/* Product Description */}
          <p className="product-description text-sm">{Desc}</p>

          {/* Product Button */}
          <div className="btn-price py-1 flex flex-row justify-between lg:flex-col gap-2 items-center lg:items-start w-full">
            <p className="price-label text-sm font-semibold">
              Price: $<span className="text-xl animate-pop">{Price}</span>
            </p>
            <button
              onClick={ClickFunc}
              className="py-[4px] px-3 text-[12px] lg:font-bold text-white rounded-full animate-pop bg-blue-500"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
