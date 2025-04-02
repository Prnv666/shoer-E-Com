import React from "react";
import { HiMiniFaceSmile } from "react-icons/hi2";
import { ImSad2 } from "react-icons/im";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";

const Profile = () => {
  const currentUser = true;
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-sm-12">
            <h1 className="text-center text-muted m-3">Profile</h1>
            <h5 className="text-center mt-5 " style={{ color: "purple" }}>
              You Have not Logged In
            </h5>
            <div className="text-center">
              <NavLink to="/login">
                <button
                  className="btn btn-outline-secondary text-center"
                  style={{ color: "blue" }}
                >
                  Click here to login
                </button>
              </NavLink>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
