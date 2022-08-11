import React from "react";
import "./Slider.css";

function Slider(pictures) {
  console.log(pictures);
  return (
    <section>
      {pictures.map((picture) => {
        return <img src={picture} alt="photos of listing" />;
      })}
    </section>
  );
}

export default Slider;
