import React from "react";
import Side_post_props from "./Side_post_props"
export default function Side_post() {
    return (
        <>
        <div className="main">
            <div className="side">
                <div className=" top-side">
                    <div className="Image">
                        <img src="photoes/sushil.jpg" />
                    </div>
                    <div className="name">
                        <h4>Sushil1392001</h4>
                        <p>Sushil Verma</p>
                    </div>
                    <div className="swich">
                        <button className="button">Swich</button>
                    </div>
                </div>

                <div id="suggestion">
                    <p>Suggestions For You</p>
                    <button className="button">See All</button>
                </div>

                <div className="side-bottom">
                    <Side_post_props/>
                </div>
            </div>
        </div>
        </>
    )
}