import React from "react";
import { HiMiniFaceSmile } from "react-icons/hi2";
import { ImSad2 } from "react-icons/im";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

const Profile = () => {
  
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-sm-12">
            <h1 className="text-center text-muted m-3">Profile</h1>
            <h5 className="text-center mt-5 " style={{ color: "purple" }}>
              You Have not Logged In
            </h5>
            <span>
              <h6
                className="text-center "
                style={{ color: "blue", cursor: "pointer" }}
              >
                Click here to login
              </h6>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
  