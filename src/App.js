import { CoffeeHousePage } from "./pages/coffeeHousePage/coffeeHousePage";
import { OurCoffeePage } from "./pages/ourCoffeePage/ourCoffeePage";
import { CardDescriptionPage } from "./pages/cardDescriptionPage/cardDescriptionPage";
import { ForYourPleasurePage } from "./pages/forYourPleasure/forYourPleasure";
import { OurBestDescriptionCoffeHousePage } from "./pages/ourBestDescriptionPage/ourBestDescriptionPage";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<CoffeeHousePage />} />
        <Route path="/ourCoffee" element={<OurCoffeePage />} />
        <Route path="/cardDescription/:id" element={<CardDescriptionPage />} />
        <Route path="/forYourPleasure" element={<ForYourPleasurePage />} />
        <Route path="/ourBestDescription/:id" element={<OurBestDescriptionCoffeHousePage />}
        />
      </Routes>
    </>
  );
}

export default App;
