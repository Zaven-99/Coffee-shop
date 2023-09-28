import React from "react";
import { LogoBlack } from "../../Components/aboutUs_coffeeHousePage/logoComponentBlack";
import "./ourBestDescription.scss";



const OurBestDescription = ({bestProducts}) => {
  return (
    <div className="OurBestDescription">
      <div className="wrapper">
        <div className="OurBestDescription-inner"> 
          <div className="desc_block">
            <h3 className="description_title">{bestProducts.correctName}</h3>
            <LogoBlack />
             
            <p className="coffee_description">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OurBestDescription };
