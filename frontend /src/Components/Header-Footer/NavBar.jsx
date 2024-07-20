import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import CartContext from "../../Context/CartContext";
// import { increment , decrement } from "../Redux/store";

const NavBar = () => {
  const items = useSelector((state) => state.cart.items);
  const { ShowCart, setShowCart } = useContext(CartContext);
  return (
    <nav className="navbar z-50 animate-wipeDown fixed mb-10 w-full flex justify-between items-center bg-blue-50 shadow-[0_2px_4px_rgba(0,0,0,0.1)] px-5 lg:px-20 py-2">
      <div className="navbar-section w-[50%] lg:w-[30%] flex items-center  gap-2 text-[18px] font-semibold">
        <FaCartShopping className="text-4xl text-blue-500" />{" "}
        <span className="font-bold">Shop Online</span>
      </div>
      <div className="navbar-section hidden lg:flex justify-center items-center gap-4 lg:w-[40%]">
        <Link
          className="no-underline font-medium hover:text-blue-500 transition-all text-black duration-[0,5s,text-decoration] "
          to="/"
        >
          Home
        </Link>
        <Link
          className="no-underline font-medium hover:text-blue-500 transition-all text-black duration-[0,5s,text-decoration] "
          to="/products"
        >
          Products
        </Link>
        <Link
          className="no-underline font-medium hover:text-blue-500 transition-all text-black duration-[0,5s,text-decoration] "
          to="/about"
        >
          About
        </Link>
      </div>
      <div className="navbar-section w-[50%] lg:w-[30%] relative flex gap-3 justify-end items-center actions">
        <Link
          to="/login"
          className="button hidden lg:block bg-transparent py-[6px] px-10 rounded-full border-2 border-black"
        >
          Login
        </Link>
        <Link onClick={() => setShowCart(!ShowCart)} className="">
          {" "}
          <div class="relative py-2 mr-5">
            <div class="top-0 absolute left-6">
              <p class="flex animate-pop h-2 w-2 items-center justify-center rounded-full bg-blue-500 p-3 text-[10px] text-white">
                {items}
              </p>
            </div>
            <FaShoppingCart className="text-3xl" />
          </div>
        </Link>
        <RxHamburgerMenu className="text-3xl lg:hidden" />
      </div>
    </nav>
  );
};

export default NavBar;
