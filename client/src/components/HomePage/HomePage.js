import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
// css
import "./HomePage.css";

// react redux
import { useDispatch } from "react-redux";

// actions
import { errorModal } from "../../redux/actions/erorrModal";

const HomePage = () => {
    const dispatch = useDispatch();
    const handleErrorModal = () => {
        dispatch(errorModal());
    };

    const [participants] = useState(450000);
    const [funding] = useState(100000);

    const props = useSpring({
        val: participants,
        from: {
            val: 0,
        },
        config: {
            duration: 2500,
        },
    });
    const props1 = useSpring({
        val: funding,
        from: {
            val: 0,
        },
        config: {
            duration: 2500,
        },
    });

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
                <button onClick={handleErrorModal}>OFFER A HAND</button>
            </div>
            <div className="counter-container">
                <div>WITH OVER</div>
                <h2 className="participant-details">
                    <span></span>
                    <animated.span>
                        {props1.val.to((val) =>
                            Math.floor(val).toLocaleString()
                        )}
                    </animated.span>
                    +
                </h2>
                <div>VOLUNTEERS</div>
                <h2 className="participant-details">
                    <span>&#8369;</span>
                    <animated.span>
                        {props.val.to((val) =>
                            Math.floor(val).toLocaleString()
                        )}
                    </animated.span>
                    +
                </h2>
                <div>CROWD FUNDING</div>
            </div>
            <div className="curve" />
        </div>
    );
};

export default HomePage;
