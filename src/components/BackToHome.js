import React from "react";
import { Link } from "react-router-dom";
import "./BackToHome.scss";

const homeIcon = process.env.PUBLIC_URL + "/images/home_icon_1x.png";

const BackToHome = () => (
  <div className="back-to-home">
    <Link to="/">
      <img src={homeIcon} alt="Back to home" />
    </Link>
  </div>
);

export default BackToHome;
