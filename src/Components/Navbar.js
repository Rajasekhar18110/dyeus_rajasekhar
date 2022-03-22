import React from "react"
import menu from "../Icons/menu.svg"
import cart from "../Icons/cart.svg"
import bell from "../Icons/bell.svg"
import "../Styles/Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <img className="menu" src={menu} alt="menu"></img>
                <img className="cart" src={cart} alt="cart"></img>
                <img src={bell} alt="bell"></img>
            </div>
        </div>
    )
}

export default Navbar
