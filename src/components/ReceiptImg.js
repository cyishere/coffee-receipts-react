import React from "react";
const imagePath = process.env.PUBLIC_URL + "/images/";
const ReceiptImg = props => {
  const { receipt, index } = props;
  const imgSrcFront = `${imagePath}${receipt.id}-front.jpg`;
  const imgSrcBack = `${imagePath}${receipt.id}-back.jpg`;
  
  return (
    <div className="item" id={`item${index + 1}`}>
      <img className="back" src={imgSrcBack} alt={receipt.id} />
      <img className="front" src={imgSrcFront} alt={receipt.id} />
    </div>
  );
};

export default ReceiptImg;
