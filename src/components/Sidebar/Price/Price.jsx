import React from "react";
import Input from "../../Input";

const Price = () => {
  return (
    <div>
      <div className="container-fluid m-3">
        <div className="row">
          <div className="col-lg-6">
            <center>
              <h3>Price</h3>
            </center>
            <Input/>
            <Input/>
            <Input/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
