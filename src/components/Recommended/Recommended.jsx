import React from "react";

const Recommended = (props) => {
  const {nikeFilter, adidasFilter, gucciFilter, lvFilter, gapFilter} = props
  return (
    <>
      <div className="container-fluid mt-5 my-5">
        <h5 className=" text-muted text-decoration-underlined">
          RECOMMENDED
        </h5>
        <button onClick={nikeFilter} className="btn btn-sm text-secondary btn-outline-dark fw-bold mx-3 my-1">
          Nike
        </button>
        <button onClick={adidasFilter} className="btn btn-sm text-secondary btn-outline-dark fw-bold mx-3 my-1">
          Adidas
        </button>
        <button onClick={gucciFilter} className="btn btn-sm text-secondary btn-outline-dark fw-bold mx-3 my-1">
          Gucci
        </button>
        <button onClick={lvFilter} className="btn btn-sm text-secondary btn-outline-dark fw-bold mx-3 my-1">
          Louis Vuitton
        </button>
        <button onClick={gapFilter} className="btn btn-sm text-secondary btn-outline-dark fw-bold mx-3 my-1">
          GAP
        </button>
      </div>
    </>
  );
};

export default Recommended;
