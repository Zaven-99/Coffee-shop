import React from "react";
import { HeaderCoffeeHousePage } from "../../Components/header_coffeeHousePage/header_coffeeHousePage";
import { AboutUs } from "../../Components/aboutUs_coffeeHousePage/aboutUs_coffeeHousePage";
import { OurBest } from "../../Components/ourBest_coffeeHousePage/ourBest_coffeeHousePage";
import { Footer } from "../../Components/footer_coffeeHousePage/footer_coffeeHousePage";

const CoffeeHousePage = () => {
  return (
    <>
      <HeaderCoffeeHousePage />
      <AboutUs />
      <OurBest />
      <Footer />
    </>
  );
};

export { CoffeeHousePage };
