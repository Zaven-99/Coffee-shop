import React from "react";
import { HeaderOurCoffeePage } from "../../Components/header_ourCoffeePage/header_ourCoffeePage";
import { CardItem } from "../../Components/ourBest_coffeeHousePage/cardItem";
import { Footer } from "../../Components/footer_coffeeHousePage/footer_coffeeHousePage";
import { useParams } from "react-router-dom";
import { bestProducts } from "../../Components/ourBest_coffeeHousePage/ourBest_coffeeHousePage";
import { OurBestDescription } from "./ourBestDescription";
import "./ourBestDescriptionPage.scss";

const OurBestDescriptionCoffeHousePage = () => {
  const { id } = useParams();

  const bestProduct = bestProducts.find(
    (bestProd) => bestProd.id === Number(id)
  );

  return (
    <>
      <HeaderOurCoffeePage />
      <div className="cardItem">
        {bestProduct && <CardItem bestProducts={bestProduct} />}
        <OurBestDescription bestProducts={bestProduct} />
      </div>

      <Footer />
    </>
  );
};

export { OurBestDescriptionCoffeHousePage };
