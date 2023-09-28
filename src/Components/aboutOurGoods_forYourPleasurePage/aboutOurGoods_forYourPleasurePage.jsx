import React from "react"
import {LogoBlack} from '../aboutOurBeans_ourCoffeePage/logoComponentBlack'
import {Line} from '../aboutOurBeans_ourCoffeePage/Line'
import './aboutOurGoods_forYourPleasurePage.scss'

const AboutOurGoods = () => {
    return (
        <div className="aboutOurGoods">
            <div className="aboutOurGoods-inner">
                <div className="aboutOurGoods_block-image">
                    <img src="/img/coffee.png" alt="" />
                </div>
                <div className="aboutOurGoods_block-description">
                    <h3>About our beans</h3>
                    <LogoBlack/>
                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/>

                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. <br/> 
                        As greatly removed calling pleased improve an. Last ask him cold feel<br/> 
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                </div>
                
            </div>
            <Line/>
        </div>
    )
}

export {AboutOurGoods}