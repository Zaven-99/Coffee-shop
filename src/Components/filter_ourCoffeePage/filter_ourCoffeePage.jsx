import React from "react";
import "./filter_ourCoffeePage.scss";
import { Component } from "react";

class FilterOurCoffeePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      activeButtons: {
        Brazil: false,
        Kenya: false,
        Columbia: false,
        all: false,
      },
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  onActive = (buttonName) => {
    this.setState((prevState) => ({
      activeButtons: {
        Brazil: false,
        Kenya: false,
        Columbia: false,
        all: false,
        [buttonName]: true, // Устанавливаем активную кнопку
      },
    }));
  };
  
  

  render() {
    const { activeButtons } = this.state;
    return (
      <div className="FilterOurCoffeePage">
        <div className="FilterOurCoffeePage-inner">
          <div className="FilterOurCoffeePage-placeHolder">
            <span>Lookiing for</span>
            <input
              className="input"
              placeholder=""
              value={this.state.term}
              onChange={this.onUpdateSearch}
            ></input>
          </div>

          <div className="FilterOurCoffeePage_filter">
            <button
              className={`first-btn btn-filter ${activeButtons.Brazil ? 'active' : ''} `}
              onClick={() => {
                this.props.onFilterSelect("Brazil");
                this.onActive("Brazil");
              }}
            >
              Brazil
            </button>
            <button
              className={`middle-btn btn-filter ${activeButtons.Kenya ? 'active' : ''}`}
              onClick={() => {
                this.props.onFilterSelect("Kenya");
                this.onActive("Kenya");
              }}
            >
              Kenya
            </button>
            <button
              className={`middle-btn btn-filter ${activeButtons.Columbia ? 'active' : ''}`}
              onClick={() => {
                this.props.onFilterSelect("Columbia");
                this.onActive("Columbia");
              }}
            >
              Columbia
            </button>
            <button
              className={`end-btn btn-filter ${activeButtons.all ? 'active' : ''}`}
              onClick={() => {
                this.props.onFilterSelect("All");
                this.onActive("All");
              }}
            >
              All
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export { FilterOurCoffeePage };
