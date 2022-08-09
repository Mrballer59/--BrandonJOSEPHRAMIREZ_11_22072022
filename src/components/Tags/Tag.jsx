import React from "react";
import "./Tag.css";

const Tag = (props) => {
  return <p className="tags">{props.tagName}</p>;
};

export default Tag;
