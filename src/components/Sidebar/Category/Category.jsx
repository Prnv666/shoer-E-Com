import React from "react";
import Input from "../../Input";

const Category = () => {
  return (
    <>
      <div className="container-fluid m-3 ">
        <div className="row">
          <div className="col-lg-6">
            <center>
              <h3>Category</h3>
            </center>
            <Input  />
            <Input />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
