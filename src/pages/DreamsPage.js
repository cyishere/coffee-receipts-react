import React from "react";
import { LazyImage } from "react-lazy-images";
import "./DreamsPage.scss";

import { dreams } from "../data/receipts";
import BackToHome from "../components/BackToHome";

const imagePath = process.env.PUBLIC_URL + "/images/receipts/dreams/";

const DreamsPage = () => {
  return (
    <>
      <BackToHome />
      <div className="grid-container">
        <div className="grid">
          {dreams.map((dream, index) => (
            <div
              className={`grid-item cls-${dream.back.split("_")[0]}`}
              key={index}
            >
              <LazyImage
                className="back"
                src={`${imagePath}${dream.back}.jpg`}
                alt={dream.back}
                placeholder={({ imageProps, ref }) => (
                  <img
                    ref={ref}
                    src={`${imagePath}${dream.back}_low.jpg`}
                    alt={imageProps.alt}
                  />
                )}
                actual={({ imageProps }) => (
                  <img {...imageProps} alt={dream.back} />
                )}
              />
              <img
                className="front"
                src={`${imagePath}${dream.front}.jpg`}
                alt={dream.front}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DreamsPage;
