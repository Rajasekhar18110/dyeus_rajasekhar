import React from "react"
import "../Styles/Section1.css"
import testtube from "../Icons/testtube.svg"
import spark from "../Icons/spark.svg"
import phone from "../Icons/phone.svg"

function Section1() {
    return (
        <div className="section1">
            <p className="p1">About Diana</p>
            <p className="p2">A platform that looks out for you</p>
            <p className="p3">
                Diana empowers you to understand how your body works so you can
                look and feel your best.{" "}
            </p>
            <div className="line1"></div>
            <p className="p4">Our Philosophy</p>
            <p className="p5">
                Sustainable wellness is a big-picture, inside out approach
            </p>
            <p className="p6">
                Diana is on a mission to create thoughtful, science-backed
                solutions for women who want to make informed decisions about
                their health and wellness.
                <br />
                <br />
                That’s why we’ve created an integrated ecosystem of:
            </p>

            <img className="testtube" src={testtube} alt="testtube"></img>

            <p className="p7 dmsans_400">
                Consciously formulated products that deliver feel-good results
                fast
            </p>

            <img className="spark" src={spark} alt="spark"></img>

            <p className="p8 dmsans_400">
                In-app mood and period tracking options that help you cultivate
                a deeper connection with your mind and body
            </p>

            <img className="phone" src={phone} alt="phone"></img>

            <p className="p9 dmsans_400">
                In-app consultation portals that connect you with compassionate
                wellness experts
            </p>

            <p className="p10 dmsans_400">
                Consider us your nerdy ally who spends their time perfecting
                products that work because they want you to feel your best
                everyday.
            </p>
        </div>
    )
}

export default Section1
