import React from "react"
import { Link } from "react-router-dom"

const Navigator = () => {
    return (
        <div className="menu">
        <img src="" alt="" />
        <Link to="/" className="menu_item">
          Coffee house
        </Link>
        <Link to="/ourCoffee" className="menu_item">
          Our coffee
        </Link>
        <Link to="/forYourPleasure" className="menu_item">
          For your pleasure
        </Link>
      </div>
    )
}

export {Navigator}