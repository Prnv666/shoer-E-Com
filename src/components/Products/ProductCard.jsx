import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoBag } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";


const ProductCard = (props) => {
  const { img, title, newPrice, prevPrice, reviews } = props;

  return (
    <>
      
        <div
          className="card ms-4 my-4 bg-light border-info"
          style={{ width: "18rem"}}
        >
          <div className="card-body">
            <img
              src={img}
              className="w-100"
              alt=""
              role="button"
              tabindex="0"
              style={{height:"280px", mixBlendMode:"multiply", cursor:"pointer"}}
            />
            <h5 className="card-title">{title}</h5>
            <span role="button" tabindex="0">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <p className="fw-sm">{reviews}</p>
            </span>
            <div className="">  
              <ul class="navbar-nav">
                <li className="nav-item">
                  <del>{prevPrice}</del> {newPrice}
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <IoBag />  <MdFavoriteBorder  />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
};

export default ProductCard;
