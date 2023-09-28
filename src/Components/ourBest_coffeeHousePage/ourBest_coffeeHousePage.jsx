import React from "react";
import "./ourBest_coffeeHousePage.scss";
import { CardItem } from "./cardItem";

const bestProducts = [
  {
    id: 1,
    name: "Solimo Coffee Beans 2 kg",
    price: 19 + "$",
    img: "/img/BestItem1.png",
    correctName: "Solimo Coffee Beans",
  },
  {
    id: 2,
    name: "Presto Coffee Beans 1 kg",
    price: 15 + "$",
    img: "/img/BestItem2.png",
    correctName: "Presto Coffee Beans",
  },
  {
    id: 3,
    name: "AROMISTICO Coffee 1 kg",
    price: 25 + "$",
    img: "/img/BestItem3.png",
    correctName: "AROMISTICO Coffee",
  },
];

const OurBest = () => {
  return (
    <div className="our_best">
      <h3>Our best</h3>
      <div className="our_best_inner">
        {bestProducts.map((bestProduct) => (
          <CardItem key={bestProduct.id} bestProducts={bestProduct} />
        ))}
      </div>
    </div>
  );
};

export { OurBest };
export { bestProducts };
