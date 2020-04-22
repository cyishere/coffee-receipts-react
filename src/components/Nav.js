import React from "react";
import closeIcon from "../assets/close-icon.png";
import MapModal from "./MapModal";
import "./Nav.scss";

const Nav = () => {
  const closeNav = () => {
    document.getElementById("theNav").style.height = "0%";
    document.getElementsByTagName("body")[0].classList.remove("modal-open");
  };
  return (
    <div id="theNav" className="map-modal overlay">
      <span className="close-btn" onClick={closeNav}>
        <img src={closeIcon} alt="Close" />
      </span>

      <MapModal />
    </div>
  );
};

export default Nav;
