import React from "react";
import "./MapModal.scss";

const imagePath = process.env.PUBLIC_URL + "/images/map/";

const locationWorld = [
  "Canada",
  "Cuba",
  "Colombia",
  "Morocco",
  "UAE",
  "China",
  "Laos",
  "Japan",
  "Cambodia",
];

const locationJapan = [
  "Akita",
  "Niigata",
  "Saitama",
  "Nagano",
  "Aichi",
  "Okinawa",
  "Aomori",
  "Miyagi",
  "Tochigi",
  "Tokyo",
];

const keywords = [
  "Dreams",
  "Travel",
  "Others' Stories",
  "Coffee",
  "Fiction",
  "Life in Japan",
  "Infographic",
  "Everyday Life",
  "Readings",
];

const MapModal = () => {
  console.log(locationJapan);
  return (
    <div className="wrapper">
      <div className="by-location">
        <h3>by Location:</h3>
        <div className="the-world">
          {locationWorld.map((country, index) => {
            return (
              <span className={`location ${country.toLowerCase()}`} key={index}>
                <img src={`${imagePath}${country}_1x.png`} alt={country} />
              </span>
            );
          })}
        </div>
        <div className="the-japan">
          {locationJapan.map((city, index) => {
            return (
              <span className={`location ${city.toLowerCase()}`} key={index}>
                <img src={`${imagePath}${city}_1x.png`} alt={city} />
              </span>
            );
          })}
        </div>
      </div>
      <div className="by-keyword">
        <h3>by Keywords:</h3>
        <div className="keyword-wrapper">
          {keywords.map((keyword, index) => {
            return (
              <span className={`keyword ${keyword.replace("'", "").replace(" ", "-").toLowerCase()}`} key={index}>{keyword}</span>
            )
          })}
        </div>
        
      </div>
    </div>
  );
};

export default MapModal;
