import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="text-center py-5">
        <ImSad2 style={{ color: "red", fontSize: "40px" }} />
        <h3 className="text-center mt-3 fw-bold text-muted"><NavLink to='/login'>Login</NavLink></h3>
      </div>
    </>
  );
};

export default Login;
