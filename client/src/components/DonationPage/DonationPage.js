import React from "react";
import "./DonationPage.css";

// react redux
import { useDispatch, useSelector } from "react-redux";

// action
import { openDonationModal } from "../../redux/actions/openDonationModal";

const DonationPage = () => {
    const dispatch = useDispatch();

    const modalState = useSelector(
        (state) => state.modalReducer.open_donationModal
    );

    const openDonateModal = () => {
        dispatch(openDonationModal(true));
    };
    return (
        <div className="donation-page-parent">
            <div className="donation-wrapper">
                <div className="donation-contents">
                    <div className="shape-container">
                        <div className="rectangle-shape">
                            <p className="give-txt">GIVE</p>
                            <div className="peso-container">
                                <p className="peso-sign">₱</p>
                                <p className="piso">1</p>
                            </div>
                        </div>
                        <h3>lorem ipsum</h3>
                    </div>
                    <div>
                        <h2>Lorem ipsum dolorendi.</h2>
                        <h2>Lorem ipsum dolor sit amet .</h2>
                        <h2>Lorem iasdi.</h2>
                    </div>
                    <button onClick={openDonateModal}>DONATE</button>
                </div>
                <div className="volunteer-statement-container ">
                    <p>
                        Another way you can help us <br /> reach this goal is to{" "}
                        <button>VOLUNTEER</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DonationPage;
