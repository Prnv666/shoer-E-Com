import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

import { GiRunningShoe } from "react-icons/gi";
import "./Navbar.css";

const Navbar = (props) => {
  const {handleSearchClick, setSearchVal} = props
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-secondary  ">
        <div className="container-fluid">
          <div className="me-5 navbar-brand">
            <GiRunningShoe style={{ fontSize: "60px" }} />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 gap-3 ms-5 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <FaHome />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/profile"
                >
                  <FaRegUser />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/favorites"
                >
                  <FaRegHeart />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="cart">
                  <FaOpencart />
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control searchBar me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"

                onChange={e=> setSearchVal(e.target.value)}
              />
              <button onClick={handleSearchClick} className="btn btn-outline-success">
              <IoSearch className="fs-4"/>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
