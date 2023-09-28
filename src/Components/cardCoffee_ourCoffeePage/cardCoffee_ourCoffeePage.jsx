import React from "react"
import './cardCoffee_ourCoffeePage.scss'
import {Link} from 'react-router-dom'

const CardCoffeeOurCoffeePage = ({data}) => {
    return (
        <div className="cards">
            <Link to = {`/cardDescription/${data.id}`} className="card_item">
                <div className="img_block">
                    <img src={data.img} alt="" />
                </div>
                <div className="desc_block">
                    <h3 className="name">{data.name}</h3>
                    <h3 className="country">{data.country}</h3>
                </div>
                <div className="price_block">
                    <span className="price">{data.price}</span>
                </div>
            </Link>
        </div>
    )
}

export {CardCoffeeOurCoffeePage}