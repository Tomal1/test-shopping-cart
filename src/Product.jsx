import "./assets/style/product.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Product = () => {
  let navigate = useNavigate();

  const [value, setValue] = useState(0);

  const quan = (ans) => {
    ans == "+" ? setValue(value + 1) : setValue(value - 1);
  };

  const handleClick = () => {
    return navigate("/test-shopping-cart/basket"); // your page will go hear
  };


    const [items, setItems] = useState([]); 

  
    useEffect(() => {
      fetch("/api/product")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setItems(data);
        });
    }, []);

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
