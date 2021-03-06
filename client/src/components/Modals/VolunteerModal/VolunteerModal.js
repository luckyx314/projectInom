import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import "./VolunteerModal.css";

const VolunteerModal = () => {
    const [participants] = useState(100000);

    const props = useSpring({
        val: participants,
        from: {
            val: 0,
        },
        config: {
            duration: 2000,
        },
    });

    return (
        <div className="volunteer-modal-wrapper">
            <div className="volunteer-form-container">
                <form action="">
                    <div>
                        <label htmlFor="">Your name*</label>
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="First name"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Your email</label>
                        <div className="input-container">
                            <input
                                type="email"
                                placeholder="sample@email.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Phone*</label>
                        <div className="input-container">
                            <input type="number" placeholder="+63" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Address*</label>
                        <div className="input-container">
                            <input type="text" placeholder="Block #" required />
                            <input
                                type="text"
                                placeholder="Province"
                                required
                            />
                            <input type="text" placeholder="City" required />
                        </div>
                    </div>
                    <input type="submit" value="Let's go!" />
                </form>
            </div>
            <div className="volunteer-count-container">
                <div className="volunteer-count">
                    <animated.span>
                        {props.val.to((val) => Math.floor(val).toLocaleString())}
                    </animated.span>
                    <div>Number of volunteers</div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerModal;
