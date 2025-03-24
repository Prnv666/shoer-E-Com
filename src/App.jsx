import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";

const App = () => {
  return (
    <>
      <div className="main">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/favorite" element={<Favorite />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            {/* <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <Route path='/' element={<Products />}></Route>
                </div>
              </div> */}
            <Route path="/" element={<Products />}></Route>
          </Routes>
        </Router>
        {/* <Products/> */}
      </div>
    </>
  );
};

export default App;
