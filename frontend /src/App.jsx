import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Header-Footer/NavBar.jsx";
import Shop from "./Pages/Shop";
import Men from "./Pages/Products.jsx";
import Kids from "./Pages/About.jsx";
import SignUp from "./Pages/SignUp";
import Auth from "./Pages/Login";
import Footer from "./Components/Header-Footer/Footer.jsx";
import AdminPanel from "./Pages/admin.jsx";
import Protected from "./Components/Protected.jsx";
const App = () => {
  return (
    <>
      <div className="h-screen w-full">
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/products" element={<Men />} />
          <Route path="/about" element={<Kids />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/admin" element={<Protected Component={AdminPanel}/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
