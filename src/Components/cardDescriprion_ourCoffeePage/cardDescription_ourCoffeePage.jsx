import React from "react";
import { LogoBlack } from "../aboutUs_coffeeHousePage/logoComponentBlack";
import "./cardDescription_ourCoffeePage.scss";



const CardDescription = ({products}) => {
  return (
    <div className="card_description">
      <div className="wrap">
        <div className="card_description-inner">
          <div className="img_block">
            <img src="/img/cardDescPage.jpg" alt="" />
          </div>
          <div className="desc_block">
            <h3 className="desc_title">About it</h3>
            <LogoBlack />
            <div className="country_block">
              <p className="country">Country:</p>
              <p className="country_">{products.country}</p>
            </div>
            <p className="coffee_desc">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="price_block">
              <span className="price">Price:</span>
              <span className="price_">{products.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardDescription };
