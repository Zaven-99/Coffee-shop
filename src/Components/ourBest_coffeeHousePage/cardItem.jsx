import React from "react";
import "./cards.scss";
import { NavLink } from "react-router-dom";


const CardItem = ({bestProducts}) => {
  return (
    <div className="card_item">
      <NavLink to = {`/ourBestDescription/${bestProducts.id}`}>
      <div className="card_img">
        <img src={bestProducts.img} alt="" />
      </div>
      <h4>{bestProducts.name}</h4>
      <span className="price">{bestProducts.price}</span>
      </NavLink>
    </div>
  );
};

export { CardItem };
