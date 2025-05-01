import React from "react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/style/basket.css";

const Basket = () => {
  const [items, setItems] = useState([]); 
  //the useState is set to a [] so we can use .map
  //  which can only loop through arrays

  useEffect(() => {
    fetch("/api/basket")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  let navigate = useNavigate();

  const handleClick = () => {
    return navigate("/test-shopping-cart");
  };

  return (
    <>
      <h1>This is the Basket page</h1>
      <button onClick={() => handleClick()}>Shopping</button>
      <div className="basketCon">
     
        {
          items.map(it=>(
            <div className="itemCon">
            <h4 key={it.name}>{it.name}</h4>
            <button>+</button>
            <h4>
              <span key={it.quan}>{it.quan}</span>
            </h4>
            <button>-</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>


          ))
          

        }

      </div>
    </>
  );
};

export default Basket;
