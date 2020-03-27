import React from "react";
import ReceiptImg from "./ReceiptImg";
import "./List.css";

const List = props => {
  const { receipts } = props;
  const isDefault = obj => {
    if (obj.default) {
      return obj;
    }
  };
  const defaultReceipts = receipts.filter(isDefault);

  return (
    <div className="wrapper">
      <div className="masonry" id="gallery">
        {defaultReceipts.map((receipt, index) => (
          <ReceiptImg receipt={receipt} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default List;
