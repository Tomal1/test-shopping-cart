import React from "react";
import { useNavigate } from "react-router-dom";
import "./assets/style/basket.css"

const Basket = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    return navigate("/test-shopping-cart");
  };

  return (
    <>
      <h1>This is the Basket page</h1>
      <button onClick={() => handleClick()}>Shopping</button>
      <div className="basketCon">
        <div className="itemCon">
          <h4>name of Item</h4>
          <button>+</button>
          <h4><span>quantaty</span></h4>
          <button>-</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
};

export default Basket;
