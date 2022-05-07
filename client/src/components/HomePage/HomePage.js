import React from "react";
// css
import "./HomePage.css";

// image
import background from "../../images/hands.jpg";

const HomePage = () => {
    const bgStyle = {
        backgroundImage: `url(${background})`,
    };
    return (
        <div className="home-wrapper">
            <div className="overlay" />
            <div className="home-container" style={bgStyle}>
                <h2>Project Inom: Water Distribution Program</h2>
            </div>
        </div>
    );
};

export default HomePage;
