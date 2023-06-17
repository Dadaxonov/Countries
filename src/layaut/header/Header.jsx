import React from "react";
import oy from "../../assets/oy.svg";
import "./style.css";
export default function Header() {
  return (
    <div className="container">
      <div className="header-text">
        <h1>Where in the world?</h1>
      </div>
      <div className="header-dark_mode">
        <img className="header-dark_mode-img" src={oy} alt="rasm" />
        <span className="dark-text">Dark Mode</span>
      </div>
    </div>
  );
}
