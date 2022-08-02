import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props);
  return (
    <article>
      <img src={props.src} alt={props.alt} />
      <h2>{props.title}</h2>
    </article>
  );
};

export default Product;
