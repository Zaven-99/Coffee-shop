import { Button } from "react-bootstrap";
import React from "react";
import Logo from "./logoComponent.jsx";
import { Navigator } from "../menuNavigation/menuNavigation.jsx";
import "./header_coffeeHousePage.scss";

const HeaderCoffeeHousePage = () => {
  return (
    <div className="header_coffeeHousePage">
      <Navigator />
      <div className="more_block">
        <h1>Everything You Love About Coffee</h1>
        <Logo />
        <h3>We makes every day full of energy and taste</h3>
        <h3>Want to try our beans?</h3>
        <Button variant="outline-light">More</Button>
      </div>
    </div>
  );
};

export { HeaderCoffeeHousePage };
