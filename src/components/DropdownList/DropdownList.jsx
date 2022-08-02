import React from "react";
import "./DropdownList.css";
import arrDown from "../../assets/arrow_down.png";
import arrUp from "../../assets/arrow_up.png";

const DropdownList = ({ title, text }) => {
  return (
    <div className="dropdownList">
      <div className="dp_Header">
        <h3>{title}</h3>
        <img src={arrDown} alt="Display content" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default DropdownList;
