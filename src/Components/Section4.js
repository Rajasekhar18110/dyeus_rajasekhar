import React from "react"
import "../Styles/Section4.css"
import "../Styles/Section3.css"
import person1 from "../images/person1.png"
import person2 from "../images/person2.png"
import person3 from "../images/person3.png"
import person4 from "../images/person4.png"

function Section4() {
    return (
        <div>
            <div className="section4">
                <div>
                    <p className="p18">Track your mood</p>
                </div>
                <div>
                    <p className="p19">
                        All days and all moods are not made equal. But we can
                        only improve what we measure. Track your mood and vitals
                        (including skin and hair health) so you can take better
                        care of yourself every day.
                    </p>
                </div>
                <div id="trackButton">
                    <p id="btnText">Track your mood on the app</p>
                </div>

                <div class="flexbox-container">
                    <div class="flexbox-item">
                        <img
                            src={person1}
                            alt="person1"
                            className="personImg"
                        ></img>
                    </div>
                    <div class="flexbox-item">
                        <img
                            src={person2}
                            alt="person2"
                            className="personImg"
                        ></img>
                    </div>
                    <div class="flexbox-item">
                        <img
                            src={person3}
                            alt="person3"
                            className="personImg"
                        ></img>
                    </div>
                    <div class="flexbox-item">
                        <img
                            src={person4}
                            alt="person4"
                            className="personImg"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
