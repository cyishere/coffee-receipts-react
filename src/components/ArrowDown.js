import React from "react";
import arrow from "../assets/arrow.png";
import "./ArrowDown.scss";

const ArrowDown = () => {
  return (
    <div className="arrow-down bounce">
      <img src={arrow} alt="Scroll Down" />
    </div>
  );
};

export default ArrowDown;
