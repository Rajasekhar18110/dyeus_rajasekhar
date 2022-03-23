import React from "react"
import "../Styles/Section3.css"
import rose from "../images/rose.png"

function Section3() {
    return (
        <div>
            <div className="section3">
                <div>
                    <p className="p14">Liberate your everyday wellness</p>
                </div>
                <div>
                    <p className="p15">Shop our self-care products</p>
                </div>

                <div>
                    <p className="p16">
                        Gentle formulations thoughtfully engineered by
                        specialist researchers and doctors to simplify your
                        self-care and get results fast. And, we always list our
                        ingredients - so what you see is what you get.
                    </p>
                </div>
            </div>
            <div id="upgradeButton">
                <p id="btnText">Upgrade your self-care</p>
            </div>

            <div>
                <p className="p17">#NoNasties, we promise!</p>
            </div>
            <img src={rose} alt="rose" id="roseImg"></img>
        </div>
    )
}

export default Section3
