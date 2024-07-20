import React from "react";

const CartProductCard = ({ Id, Title, Desc, Url, Label, Price }) => {
  return (
    <div
      key={Id}
      className={`product animate-fade flex flex-col items-center w-[45%] h-auto bg-green-50 rounded-xl m-2`}
    >
      {/* Product Image  */}
      <div className="product-image flex w-full lg:w-[50%] h-[60%] lg:h-full p-2">
        <img
          className="h-full w-full object-full rounded-md"
          src={Url}
          alt="product image"
        />
      </div>

      {/* Product Content */}
      <div className="product-content w-full lg:h-full h-[40%] lg:gap-2 p-4 flex flex-col justify-center items-start ">
        {/* Product Catagory */}
        <h1 className="product-label py-[2px] px-8 mt-2 text-[8px] border border-black rounded-full">
          {Label}
        </h1>

        {/* Product Heading */}
        <h1 className="product-heading text-lg leading-tight font-bold">
          {Title}
        </h1>

        {/* Product Description */}
        <p className="product-description text-[10px] leading-[1px]">{Desc}</p>

        {/* Product Button */}
        <div className="btn-price py-1 flex flex-row justify-between lg:flex-col gap-2 items-center lg:items-start w-full">
          <p className="price-label text-sm font-semibold">
            Price: $<span className="text-sm animate-pop">{Price}</span>
          </p>
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="py-[4px] px-3 text-[10px] lg:font-bold text-white rounded-full animate-pop bg-blue-500"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
