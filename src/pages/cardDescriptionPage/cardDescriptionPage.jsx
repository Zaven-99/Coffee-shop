import React from "react"
import { HeaderOurCoffeePage } from "../../Components/header_ourCoffeePage/header_ourCoffeePage"
import { Footer } from "../../Components/footer_coffeeHousePage/footer_coffeeHousePage"
import { CardDescription } from "../../Components/cardDescriprion_ourCoffeePage/cardDescription_ourCoffeePage"
import {products} from '../../Components/cardCoffee_ourCoffeePage/cardFiled_ourCoffeePage'
import { useParams } from "react-router-dom";



const CardDescriptionPage = () => {
    const { id } = useParams();

    const prod = products.find((product) => product.id === Number(id))
    return (
        <>
        <HeaderOurCoffeePage/>
         
            {prod && <CardDescription  products = {prod}/>}
      
            
        <Footer/>
        </>
    )
}



export {CardDescriptionPage}