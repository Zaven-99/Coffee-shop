import React from "react";
import { Navigator } from "../menuNavigation/menuNavigation.jsx";
import "./header_ourCoffeePage.scss";

const HeaderOurCoffeePage = () => {
  return (
    <div className="header_ourCoffeePage">
      <Navigator />
      <div className="more_block">
        <h1>Our coffee</h1>
      </div>
    </div>
  );
};

export { HeaderOurCoffeePage };
