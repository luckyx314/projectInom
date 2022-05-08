import React, { useState } from "react";

// css
import "./DonationModal.css";

const DonationModal = () => {
    const [btnState, setBtnState] = useState({
        activeBtn: 2,
    });

    const activateBtn = (btnId) => {
        setBtnState({ ...btnState, activeBtn: btnId });
    };

    const setActiveClass = (btnID) => {
        if (btnID === btnState.activeBtn) {
            return "active";
        } else {
            return "inactive";
        }
    };

    return (
        <div className="donation-modal-wrapper">
            
            <div className="donation-modal-container">
                <div className="radio-container">
                    <input type="radio" name="amount" />
                    <div className="radio-details">
                        <span className="peso-sign">&#8369;</span>
                        <span className="amount">5</span>
                        <p className="gallons-detail">5 gallons of water</p>
                    </div>
                </div>
                <div className="radio-container">
                    <input type="radio" name="amount" />
                    <div className="radio-details">
                        <span className="peso-sign">&#8369;</span>
                        <span className="amount">50</span>
                        <p className="gallons-detail">50 gallons of water</p>
                    </div>
                </div>
                <div className="radio-container">
                    <input type="radio" name="amount" />
                    <div className="radio-details">
                        <span className="peso-sign">&#8369;</span>
                        <span className="amount">100</span>
                        <p className="gallons-detail">100 gallons of water</p>
                    </div>
                </div>
                <div className="radio-container">
                    <input type="radio" name="amount" />
                    <div className="radio-details">
                        <span className="peso-sign">&#8369; eg: </span>
                        <span className="amount">500</span>
                        <p className="gallons-detail">Type custom amount</p>
                    </div>
                </div>
                <div className="statement">
                    Choose your preferred payment period option
                </div>
                <div className="btn-container">
                    <button
                        className={`${setActiveClass(1)}`}
                        onClick={() => activateBtn(1)}
                    >
                        One time
                    </button>
                    <button
                        className={`${setActiveClass(2)}`}
                        onClick={() => activateBtn(2)}
                    >
                        Monthly
                    </button>
                </div>
                <div className="statement">
                    You can login to edit your recurring donations at any time
                </div>
                <button className="next-btn">Next</button>
            </div>
        </div>
    );
};

export default DonationModal;
