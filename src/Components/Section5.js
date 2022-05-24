import React from "react"
import "../Styles/Section5.css"
import "../Styles/Section4.css"
import "../Styles/Section3.css"
import calendar from "../images/calendar.png"

function Section5() {
    return (
        <div>
            <div className="section5">
                <p className="p18">Track your period</p>
                <p className="p19">
                    Stay in the know with reliable AI-based and science-backed
                    period, ovulation, and PMS predictions. The intuitive design
                    makes tracking your cycle effortless and helps you stay on
                    top of your monthly data.
                </p>
                <div id="trackPeriodButton">
                    <p id="btnText">Track your period on the app</p>
                </div>

                <img
                    src={calendar}
                    alt="calendar"
                    className="calendarImg"
                ></img>
            </div>
        </div>
    )
}

export default Section5
