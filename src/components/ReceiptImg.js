import React from "react";

const imagePath = process.env.PUBLIC_URL + "/images/receipts/";

const ReceiptImg = props => {
  const { receipt, index } = props;
  const imgSrcFront = `${imagePath}${receipt.id}-front.jpg`;
  const imgSrcBack = `${imagePath}${receipt.id}-back.jpg`;
  
  return (
    <div className="item" id={`item${index + 1}`}>
      <span className="img-no">{`item${index + 1}`}, {receipt.id}</span>
      <img className="back" src={imgSrcBack} alt={receipt.id} />
      <img className="front" src={imgSrcFront} alt={receipt.id} />
    </div>
  );
};

export default ReceiptImg;
