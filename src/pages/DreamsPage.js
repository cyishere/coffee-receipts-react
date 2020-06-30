import React from "react";
import "./DreamsPage.scss";

import { dreams } from "../data/receipts";

const imagePath = process.env.PUBLIC_URL + "/images/receipts/dreams/";

const DreamsPage = () => {
  return (
    <div className="grid-container">
      <div className="grid">
        {dreams.map((dream, index) => (
          <div className={`grid-item cls-${dream}`} key={index}>
            <img src={`${imagePath}${dream}.jpg`} alt={dream} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DreamsPage;
