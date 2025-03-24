import React, { useContext, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ProductCard from "./ProductCard";
import Recommended from "../Recommended/Recommended";

const Products = () => {
  const productData = [
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a76d88e-7935-4c0f-82c9-17f11ce935f7/W+NIKE+CORTEZ.png",
      title: "Nike Cortez Lather",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$800",
      newPrice: "$600",
      company: "Nike",
      color: "White",
      category: "Sneakers",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9909210d-48ba-459e-96f4-faab32a41ce7/WMNS+AIR+JORDAN+1+LOW.png",
      title: "Air Jordan 1 Low",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$8000",
      newPrice: "$1200",
      company: "Nike",
      color: "White",
      category: "Sneakers",
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Red Rooster",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$80",
      newPrice: "$60",
      company: "Nike",
      color: "Red",
      category: "Sneakers",
    },
    {
      img: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Nike Black Lather",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$810",
      newPrice: "$760",
      company: "Nike",
      color: "Black",
      category: "Sneakers",
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4abaf8d1-c95e-4404-ad8f-45a2e3e59437/NIKE+ZOOM+BLAZER+MID+QS.png",
      title: "Nike Zoom Blazer",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$800",
      newPrice: "$600",
      company: "Nike",
      color: "Green",
      category: "Sneakers",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1723773743655-71e6b5961089?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "High Top",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$800",
      newPrice: "$600",
      company: "Adidas",
      color: "White",
      category: "Sneakers",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1705554330163-2e0ccc1808e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3VjY2klMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Peach Fuzz",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$800",
      newPrice: "$600",
      company: "Gucci",
      color: "Peach",
      category: "Boot",
    },
    {
      img: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-shake-pump--AOVE4ETC02_PM2_Front%20view.png?wid=490&hei=490",
      title: "Shake Pump",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$80,000",
      newPrice: "$79,900",
      company: "Louis Vuitton",
      color: "Black",
      category: "Sandal",
    },
    {
      img: "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-blossom-slingback-pump--AP8E6GTC02_PM2_Front%20view.jpg",
      title: "Blossom Slingback Pump",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$800",
      newPrice: "$600",
      company: "Louis Vuitton",
      color: "Black",
      category: "Sandal",
    },
    {
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1604509203/257761_BLN10_1060_001_100_0000_Light.jpg",
      title: "Children Leather Sandal",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$2300",
      newPrice: "$2200",
      company: "Gucci",
      color: "Black",
      category: "Sandal",
    },
    {
      img: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BS9U1PLV52_PM2_Front%20view.png?wid=1090&hei=1090",
      title: "LV Trainer Sneakers",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$1300",
      newPrice: "$1200",
      company: "Louis Vuitton",
      color: "Yellow",
      category: "Sneakers",
    },
    {
      img: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-beverly-hills-sneaker--BSDU1PWC30_PM2_Front%20view.png?wid=1090&hei=1090",
      title: "Nike Cortez Lather",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$8100",
      newPrice: "$6100",
      company: "Louis Vuitton",
      color: "Brown",
      category: "Sneakers",
    },
    {
      img: "https://www.gap.com/webcontent/0055/874/607/cn55874607.jpg?q=h&w=405",
      title: "Vegan Lather Boots",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$39.7",
      newPrice: "$39",
      company: "GAP",
      color: "White",
      category: "Boot",
    },
    {
      img: "https://www.gap.com/webcontent/0055/857/377/cn55857377.jpg?q=h&w=405",
      title: "Kids Metallic Loafers",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$800",
      newPrice: "$600",
      company: "GAP",
      color: "Black",
      category: "Loafer",
    },
    {
      img: "https://www.gap.com/webcontent/0057/535/858/cn57535858.jpg?q=h&w=405",
      title: "Kids Strapy Sandals",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$390",
      newPrice: "$380",
      company: "GAP",
      color: "White",
      category: "Sandal",
    },
    {
      img: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-oasis-mule--BRIH1PDN20_PM2_Front%20view.png?wid=1090&hei=1090",
      title: "LV Oasis Mule",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$800",
      newPrice: "$600",
      company: "Louis Vuitton",
      color: "Blue",
      category: "Sandal",
    },
    {
      img: "https://www.gap.com/webcontent/0057/609/204/cn57609204.jpg?q=h&w=405",
      title: "Marie Jane Flats",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$8000",
      newPrice: "$7590",
      company: "GAP",
      color: "Brown",
      category: "sandal",
    },
    {
      img: "https://www.gap.com/webcontent/0057/426/554/cn57426554.jpg?q=h&w=405",
      title: "Kellan Heel Mule",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$2000",
      newPrice: "$3100",
      company: "GAP",
      color: "Red",
      category: "Sandal",
    },
    {
      img: "https://www.gap.com/webcontent/0055/874/667/cn55874667.jpg?q=h&w=405",
      title: "Kids Corduroy Clogs",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$420",
      newPrice: "$370",
      company: "GAP",
      color: "Brown",
      category: "Sandal",
    },
    {
      img: "https://www.gap.com/webcontent/0055/856/963/cn55856963.jpg?q=h&w=405",
      title: "Kids Moc Boots",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$800",
      newPrice: "$600",
      company: "GAP",
      color: "Blue",
      category: "Boot",
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5406e3c3-15fe-4396-a389-d48f6748e965/W+NIKE+CALM+SANDAL.png",
      title: "Nike Calm",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$410",
      newPrice: "$400",
      company: "Nike",
      color: "White",
      category: "Sandal",
    },
    {
      img: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-blossom-sandal--AR8S1GTC50_PM2_Front%20view.png?wid=1090&hei=1090",
      title: "Blossom Sandal",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$40510",
      newPrice: "$40440",
      company: "Louis Vuitton",
      color: "White",
      category: "Sandal",
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d4a019c-5bcb-4c89-915c-6466ed81bc11/WMNS+NIKE+AIR+RIFT+SE.png",
      title: "Nike Air Rift",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$6710",
      newPrice: "$6650",
      company: "Nike",
      color: "Peach",
      category: "Sandal",
    },
    {
      img: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-shake-platform-sandal--APVS2ITCNU_PM2_Front%20view.png?wid=1090&hei=1090",
      title: "LV Shake Platform",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$10210",
      newPrice: "$10195",
      company: "Louis Vuitton",
      color: "Peach",
      category: "Sandal",
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f6cc8696-c40f-43a7-b358-fb8153818388/NIKE+CYGNAL.png",
      title: "Nike Cygnal",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$410",
      newPrice: "$400",
      company: "Nike",
      color: "Red",
      category: "Sneakers",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ffqid9Uvq3fM4zTLenjBynpgHpYvthiEow&s",
      title: "LV Major Loafers",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$4970",
      newPrice: "$4376",
      company: "Louis Vuitton",
      color: "Brown",
      category: "Loafer",
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/97306036-dff0-4f26-88a5-445ca90e2f13/NIKE+FREE+2025.png",
      title: "Nike 2025 fae",
      star: <AiFillStar className="rating-star" />,
      reviews: "(1221 reviews)",
      prevPrice: "$410",
      newPrice: "$400",
      company: "Nike",
      color: "Blue",
      category: "Sandal",
    },
  ];

  //  PRODUCTS STATE
  const [products, setProducts] = useState(productData);

  // NIKE RECOMMENDATION
  function nikeFilter() {
    const filteredNikeProducts = productData.filter(item => item.company === "Nike");
    setProducts(filteredNikeProducts);
  }
// GAP RECOMMENDATION
  function gapFilter() {
    const filteredGapProducts = productData.filter(item => item.company === "GAP");
    setProducts(filteredGapProducts);
  }
// LV RECOMMENDATION
  function lvFilter() {
    const filteredLvProducts = productData.filter(item => item.company === "Louis Vuitton");
    setProducts(filteredLvProducts);
  }
// ADIDAS RECOMMENDATION
  function adidasFilter() {
    const filteredAdidasProducts = productData.filter(item => item.company === "Adidas");
    setProducts(filteredAdidasProducts);
  }
// GUCCI RECOMMENDATION
  function gucciFilter() {
    const filteredGucciProducts = productData.filter(item => item.company === "Gucci");
    setProducts(filteredGucciProducts);
  }

  // input search functionality
  const [searchVal, SetSearchVal] = useState("");
  function handleSearchClick() {
    if (searchVal === "") {
      setProducts(productData);
      return;
    }
    const searchByFilter = productData.filter((item) => {
      if (item.title.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    setProducts(searchByFilter);
  }

  return (
    <div>
      <div className="container-fluid bg-light">
        <Recommended 
        nikeFilter={nikeFilter}
        gapFilter={gapFilter} 
        gucciFilter={gucciFilter}
        lvFilter={lvFilter}
        adidasFilter={adidasFilter}
        />
        <div className="row">
          {products.map((val, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                <ProductCard
                  img={val.img}
                  title={val.title}
                  star={val.star}
                  reviews={val.reviews}
                  prevPrice={val.prevPrice}
                  newPrice={val.newPrice}
                  company={val.company}
                  color={val.color}
                  category={val.category}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
