import React from "react";
// css
import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="home-wrapper">
            <div className="home-container">
                <h1>
                    Project Inom: <br /> Water Distribution Program
                </h1>
                <p>
                    Lorem ipsum dolor sit <br /> amet, consectetur adipiscing
                    elit.
                </p>
                <button>OFFER A HAND</button>
            </div>
            <div className="counter-container">
                <div>WITH OVER</div>
                <h2>{Number(100000).toLocaleString()}+</h2>
                <div>VOLUNTEERS</div>
                <h2>&#8369;{Number(150000).toLocaleString()}+</h2>
                <div>CROWD FUNDING</div>
            </div>
        </div>
    );
};

export default HomePage;
