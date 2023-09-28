// import React from "react";
import "./cardField_ourCoffeePage.scss";
import { CardCoffeeOurCoffeePage } from "./cardCoffee_ourCoffeePage";
import { Component } from "react";
import { FilterOurCoffeePage } from "../filter_ourCoffeePage/filter_ourCoffeePage";

export const products = [
  {
    id: 1,
    name: "AROMISTICO Coffee 1 kg",
    country: "Kenya",
    price: 58 + "$",
    img: "/img/coffeeItem.png",
  },
  {
    id: 2,
    name: "AROMISTICO Coffee 1 kg",
    country: "Columbia",
    price: 65 + "$",
    img: "/img/coffeeItem.png",
  },
  {
    id: 3,
    name: "AROMISTICO Coffee 1 kg",
    country: "Indonezia",
    price: 60 + "$",
    img: "/img/coffeeItem.png",
  },
  {
    id: 4,
    name: "AROMISTICO Coffee 1 kg",
    country: "Vietnam",
    price: 58 + "$",
    img: "/img/coffeeItem.png",
  },
  {
    id: 5,
    name: "AROMISTICO Coffee 1 kg",
    country: "Costa Rica",
    price: 55 + "$",
    img: "/img/coffeeItem.png",
  },
  {
    id: 6,
    name: "AROMISTICO Coffee 1 kg",
    country: "Nicaragua",
    price: 47 + "$",
    img: "/img/coffeeItem.png",
  },
];

class CardFieldOurCoffeePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "AROMISTICO Coffee 1 kg",
          country: "Kenya",
          price: 58 + "$",
          img: "/img/coffeeItem.png",
        },
        {
          id: 2,
          name: "AROMISTICO Coffee 1 kg",
          country: "Columbia",
          price: 65 + "$",
          img: "/img/coffeeItem.png",
        },
        {
          id: 3,
          name: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: 60 + "$",
          img: "/img/coffeeItem.png",
        },
        {
          id: 4,
          name: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: 58 + "$",
          img: "/img/coffeeItem.png",
        },
        {
          id: 5,
          name: "AROMISTICO Coffee 1 kg",
          country: "Kenya",
          price: 55 + "$",
          img: "/img/coffeeItem.png",
        },
        {
          id: 6,
          name: "ZAROMISTICO Coffee 1 kg",
          country: "Columbia",
          price: 47 + "$",
          img: "/img/coffeeItem.png",
        },
      ],
      term: "",
      filter: "all",
    };
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "Brazil":
        return items.filter((item) => item.country === "Brazil");
      case "Columbia":
        return items.filter((item) => item.country === "Columbia");
      case "Kenya":
        return items.filter((item) => item.country === "Kenya");
      default:
        return items;
    }
  };
  onFilterSelect = (filter) => {
    this.setState({ filter });
  };
  render() {
    const { data, term, filter } = this.state,
      visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="filter_block">
        <FilterOurCoffeePage
          onUpdateSearch={this.onUpdateSearch}
          filter={filter}
          onFilterSelect={this.onFilterSelect}
        />

        <div className="cards">
          <div className="card_inner">
            {visibleData.map((visibleDB) => (
              <CardCoffeeOurCoffeePage key={visibleDB.id} data={visibleDB} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export { CardFieldOurCoffeePage };
