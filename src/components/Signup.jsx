import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./signup.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [mobile, setMobile] = useState("")
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for password visibility

  const showPass = () => {
    setIsPasswordVisible(!isPasswordVisible); // Toggle password visibility
  };

  const SaveForm = (e) =>{
    e.preventDefault()

    alert("User Registered Successfully")

    setName({
      name : name
    })
    setEmail({
      email : email
    })
    setMobile({
      mobile : mobile
    })

    setPass({
      pass : pass
    })

    setName("")
    setEmail("")
    setPass("")
    setMobile("")

  }

  return (
    <>
      <div className="container-fluid bg-light text-center p-4">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-4 col-12">
            <h3 className="text-center mt-3  text-muted">
              Create User Profile
            </h3>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-4">
                <form action="" className="mt-5" onSubmit={(e) => SaveForm(e)}>
                  <label htmlFor="" className="label-control">
                    <h6 className="text-secondary">Enter Name</h6>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control ps-5 text-secondary mb-3 bg-light"
                    placeholder="e.g. 'Pranav' "
                  />
                  <label htmlFor="" className="label-control">
                    <h6 className="text-secondary">Enter Mail</h6>
                  </label>
                  <input
                    type="email"
                    name="mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control ps-5 text-secondary mb-3 bg-light"
                    placeholder="e.g. 'pranav@gmail.com' "
                  />
                  <label htmlFor="" className="label-control">
                    <h6 className="text-secondary">Enter Mobile</h6>
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="form-control ps-5 text-secondary mb-3 bg-light"
                    placeholder="e.g. '9272119568' "
                  />
                  <label htmlFor="" className="label-control">
                    <h6 className="text-secondary">Enter Password</h6>
                  </label>
                  <input
                    type={isPasswordVisible ? "text" : "password"} // Change input type based on visibility
                    name="pass"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    className="form-control ps-5 text-secondary mb-3 bg-light input-container"
                    placeholder="Enter Password  "
                  />
                  <span>
                    <span
                      type="button" // Prevent form submission
                      id="showPass"
                      className="bg-light"
                      onClick={showPass}
                    >
                      {/* button text hide show */}
                      {isPasswordVisible ? (
                        <FaRegEyeSlash className="text-muted" />
                      ) : (
                        <FaRegEye className="text-muted" />
                      )}
                    </span>
                  </span>
                  <div className="text-center">
                    <button className="btn btn-outline-success px-4 fw-bold mb-3">
                      Signup
                    </button>
                  </div>

                  {/* changing route to login  */}

                  <span className="text-center " style={{ color: "purple" }}>
                    Already have account
                  </span>

                  <NavLink to="/login">
                    <span
                      className="mx-2 text-decoration-none"
                      style={{ color: "blue" }}
                    >
                      Click here to go to Login
                    </span>
                  </NavLink>
                </form>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-4 d-sm-block d-none">
                <img
                  src="https://img.freepik.com/free-vector/interior-design-shoe-store-department-sports-shoes-men-women-new-collection-sneakers-chairs-trying-buyers-fashion-footwear-boutique_575670-1424.jpg"
                  alt=""
                  className="img-fluid"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            </div>

            <div className="text-center mt-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
