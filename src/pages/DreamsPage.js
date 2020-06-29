import React, { useLayoutEffect } from "react";
import "./DreamsPage.scss";
import Colcade from "colcade";

import { dreams } from "../data/receipts";

const imagePath = process.env.PUBLIC_URL + "/images/receipts/dreams/";

const DreamsPage = () => {
  useLayoutEffect(() => {
    const colc = new Colcade(".grid", {
      columns: ".grid-col",
      items: ".grid-item",
    });

    return () => {
      colc.destroy();
    };
  }, []);

  return (
    <div className="grid-container">
      <div className="grid">
        <div className="grid-col grid-col--1"></div>
        <div className="grid-col grid-col--2"></div>
        <div className="grid-col grid-col--3"></div>
        <div className="grid-col grid-col--4"></div>
        {dreams.map((dream, index) => (
          <div className={`grid-item ${dream}`} key={index}>
            <img src={`${imagePath}${dream}.jpg`} alt={dream} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DreamsPage;
