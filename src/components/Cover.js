import React from "react";
import ArrowDown from "./ArrowDown";
import NavMenu from "./NavMenu";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="section cover">
      <NavMenu />
      <div className="cover-content">
        <h1>COFFEE RECEIPT STORIES</h1>
        <p>A journey of little adventures in everyday life.</p>
      </div>
      <ArrowDown />
    </div>
  );
};

export default Cover;
