import React from "react"
import "../Styles/Footer.css"
import facebook from "../Icons/facebook.svg"
import twitter from "../Icons/twitter.svg"
import rightarrow from "../Icons/rightarrow.svg"
function Footer() {
    return (
        <div className="Footer">
            <div>
                <img className="facebook" src={facebook} alt="facebook"></img>
                <img className="twitter" src={twitter} alt="twitter"></img>
            </div>
            <div className="links">
                <p className="linksText">Products </p>

                <p className="linksText">Our science </p>

                <p className="linksText">Vision & Mission </p>

                <p className="linksText">About Us </p>
            </div>
            <div className="line2"></div>
        </div>
    )
}

export default Footer
