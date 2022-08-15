import React from "react";
import "./DropdownList.css";
import arrDown from "../../assets/arrow_down.png";
import arrUp from "../../assets/arrow_up.png";
import { useState } from "react";

function DropdownList({ title, text, extra }) {
  const [showDropList, setDropList] = useState(false);

  return showDropList ? (
    <div className={extra ? "droplist" + extra : "droplist"}>
      <div className="dp_Header">
        <h3>{title}</h3>
        <img
          src={arrUp}
          alt="Display content"
          onClick={() => setDropList(false)}
        />
      </div>
      <div className="dd">{text}</div>
    </div>
  ) : (
    <div className="droplist">
      <div className="dp_Header">
        <h3>{title}</h3>
        <img
          src={arrDown}
          alt="Display content"
          onClick={() => setDropList(true)}
        />
      </div>
    </div>
  );
}

export default DropdownList;
