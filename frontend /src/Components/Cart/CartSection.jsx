import React, { useContext } from "react";
import ProductCard from "../Cards/ProductCard";
import CartProductCard from "../Cards/CartProductCard";
import CartContext from "../../Context/CartContext";

const CartSection = ({ Show }) => {
  const { CartProducts } = useContext(CartContext);
  return (
    <>
      <div
        className={`cart-section fixed overflow-auto bg-white rounded-lg top-6 right-0 ${
          Show ? "flex" : "hidden"
        } w-full lg:w-[40%] flex-col items-center py-10 mt-5 lg:m-10 border border-black h-full`}
      >
        <div className="content border-b border-black w-full pb-5 flex flex-col justify-center items-center">
          <h1 className="lg:text-4xl text-xl font-bold">Cart Products</h1>
          <p className="lg:text-lg text-lg text-center text-blue-500 font-semibold ">
            Checkout your cart products!
          </p>
        </div>
        <div className="cart-products flex flex-wrap flex-col justify-center lg:flex-row w-full px-5 py-5">
          {CartProducts.map((product) => {
            return (
              <CartProductCard
                Id={product.Id}
                Title={product.Title}
                Desc={product.Desc}
                Url={product.Url}
                Label={product.Label}
                Price={product.Price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CartSection;
