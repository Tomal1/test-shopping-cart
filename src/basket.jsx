import React from "react";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    return navigate("/test-shopping-cart");
  };

  return (
    <>
      <h1>This is the Basket page</h1>
      <button onClick={() => handleClick()}>Shopping</button>
    </>
  );
};

export default Basket;
