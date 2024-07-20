import React, { useContext } from "react";
import HeroSection from "../Components/Shop/HeroSection";
import ProductSection from "../Components/Shop/ProductSection";
import CatagorySection from "../Components/Shop/CatagorySection";
import CartSection from "../Components/Cart/CartSection";
import CartContext from "../Context/CartContext";

const Shop = () => {
  const { ShowCart, Product, CartProducts } = useContext(CartContext);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Products Section */}
      <ProductSection Products={Product} ShowSearch={false}/>

     

      {/* Cart Section */}
      <CartSection Show={ShowCart} />
    </>
  );
};

export default Shop;
