import React from "react";
import closeIcon from "../assets/close-icon.png";
import menuFullPage from "../assets/menu-full-page.png";
import "./Nav.css";

const Nav = () => {
  const closeNav = () => {
    document.getElementById("theNav").style.height = "0%";
    document.getElementsByTagName("body")[0].classList.remove("modal-open");
  };
  return (
    <div id="theNav" className="overlay">
      <span className="close-btn" onClick={closeNav}>
        <img src={closeIcon} alt="Close" />
      </span>

      <img src={menuFullPage} alt="Menu" />
    </div>
  );
};

export default Nav;
