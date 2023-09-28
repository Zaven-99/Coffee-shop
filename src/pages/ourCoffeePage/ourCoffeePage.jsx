import React from "react";
import { Footer } from "../../Components/footer_coffeeHousePage/footer_coffeeHousePage";
import { HeaderOurCoffeePage } from "../../Components/header_ourCoffeePage/header_ourCoffeePage";
import { AboutOurBeans } from "../../Components/aboutOurBeans_ourCoffeePage/aboutOurBeans_ourCoffeePage";
import { CardFieldOurCoffeePage } from "../../Components/cardCoffee_ourCoffeePage/cardFiled_ourCoffeePage";
const OurCoffeePage = () => {
  return (
    <>
      <HeaderOurCoffeePage />
      <AboutOurBeans />
      <CardFieldOurCoffeePage/>
      <Footer />
    </>
  );
};

export { OurCoffeePage };
