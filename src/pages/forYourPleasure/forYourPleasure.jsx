import React from "react";
import { HeaderForYourPleasure } from "../../Components/header_forYourPleasurePage/header_forYourPleasurePage";
import { AboutOurGoods } from "../../Components/aboutOurGoods_forYourPleasurePage/aboutOurGoods_forYourPleasurePage";
import { CardFieldOurCoffeePage } from "../../Components/cardCoffee_ourCoffeePage/cardFiled_ourCoffeePage";
import { Footer } from "../../Components/footer_coffeeHousePage/footer_coffeeHousePage";





const ForYourPleasurePage = () => {
  return (
    <>
      <HeaderForYourPleasure/>
      <AboutOurGoods/>
      <CardFieldOurCoffeePage/>
      <Footer />
    </>
  );
};

export { ForYourPleasurePage };
