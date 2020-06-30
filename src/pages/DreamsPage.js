import React from "react";
import { LazyImage } from "react-lazy-images";
import "./DreamsPage.scss";

import { dreams } from "../data/receipts";

const imagePath = process.env.PUBLIC_URL + "/images/receipts/dreams/";

const DreamsPage = () => {
  return (
    <div className="grid-container">
      <div className="grid">
        {dreams.map((dream, index) => (
          <div className={`grid-item cls-${dream}`} key={index}>
            <LazyImage
              src={`${imagePath}${dream}.jpg`}
              alt={dream}
              placeholder={({ imageProps, ref }) => (
                <img
                  ref={ref}
                  src={`${imagePath}${dream}_low.jpg`}
                  alt={imageProps.alt}
                />
              )}
              actual={({ imageProps }) => <img {...imageProps} />}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DreamsPage;
