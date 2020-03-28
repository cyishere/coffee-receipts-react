import React from "react";
import menuIcon from "../assets/menu-icon.png";
import "./NavMenu.css";

const NavMenu = () => {
  const openNav = () => {
    document.getElementById("theNav").style.height = "100%";
    document.getElementsByTagName("body")[0].classList.add("modal-open");
  };
  return (
    <nav>
      <img src={menuIcon} alt="Menu" onClick={openNav} />
    </nav>
  );
};

export default NavMenu;
