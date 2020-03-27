import React from "react";
import menuIcon from "../assets/menu-icon.png";
import "./NavMenu.css";

const NavMenu = () => {
  return (
    <nav>
      <img src={menuIcon} alt="Menu" />
    </nav>
  );
};

export default NavMenu;
