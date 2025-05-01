import "./assets/style/product.css";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";



const Product = () => {




  let navigate = useNavigate();

  const [value, setValue] = useState(0);
  const quan = (ans) => {
    ans == "+" ? setValue(value + 1) : setValue(value - 1);
  };

  const handleClick = () => {
    return navigate("/test-shopping-cart/basket"); // your page will go hear
  };

  return (
    <>
      <div id="Con">
        <div id="imageOfProduct"></div>
        <div id="quanOfProduct">
          <span>{value}</span>
        </div>

        <div id="btnOfProduct">
          <button onClick={() => quan("+")}>+</button>
          <button onClick={() => quan("")}>-</button>
        </div>

        <div id="toBasket">
          <button onClick={() => handleClick()}>Basket</button>
        </div>
      </div>
    </>
  );
};

export default Product;
