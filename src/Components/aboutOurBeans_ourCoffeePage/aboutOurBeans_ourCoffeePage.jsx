import React from "react"
import {LogoBlack} from './logoComponentBlack'
import {Line} from './Line'
import './aboutOurBeans_ourCoffeePage.scss'

const AboutOurBeans = () => {
    return (
        <div className="aboutOurBeans">
            <div className="aboutOurBeans-inner">
                <div className="aboutOurBeans_block-image">
                    <img src="/img/girl.jpg" alt="" />
                </div>
                <div className="aboutOurBeans_block-description">
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

export {AboutOurBeans}