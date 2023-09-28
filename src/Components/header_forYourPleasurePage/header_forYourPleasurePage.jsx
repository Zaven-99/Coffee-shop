import React from "react";
import { Navigator } from "../menuNavigation/menuNavigation.jsx";
import "./header_forYourPleasurePage.scss";

const HeaderForYourPleasure = () => {
  return (
    <div className="header_forYourPleasurePage">
      <Navigator />
      <div className="more_block">
        <h1>For your pleasure</h1>
      </div>
    </div>
  );
};

export { HeaderForYourPleasure };
