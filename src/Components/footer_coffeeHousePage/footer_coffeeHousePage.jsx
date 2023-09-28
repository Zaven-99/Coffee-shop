import React from "react";
import { LogoBlack } from "../aboutUs_coffeeHousePage/logoComponentBlack";
import { Link } from "react-router-dom";
import "./footer_coffeeHousePage.scss";

const Footer = () => {
  return (
    <div>
      <div className="menu_footer">
        <img src="" alt="" />
        <Link to="/" className="menu_item">
          Coffee house
        </Link>
        <Link to="/ourCoffee" className="menu_item">
          Our coffee
        </Link>
        <Link to="/forYourPleasure" className="menu_item">
          For your pleasure
        </Link>
      </div>
      <LogoBlack className="logoBlack" />
    </div>
  );
};

export { Footer };
