import React from "react";
import "./DonationPage.css";

// react redux
import { useDispatch } from "react-redux";

// action
import { openDonationModal } from "../../redux/actions/openDonationModal";
import { openVolunteerModal } from "../../redux/actions/openVolunteerModal";

import Modal from "../Modals/Modal";

const DonationPage = () => {
    const dispatch = useDispatch();

    const openDonateModal = () => {
        dispatch(openDonationModal());
    };

    const open_volunteerModal = () => {
        dispatch(openVolunteerModal());
    };

    const give5 = () => {
        console.log(give5);
        dispatch(openDonationModal());
    };
    return (
        <div className="donation-page-parent">
            <div className="donation-wrapper">
                <div className="donation-contents">
                    <div className="shape-container" onClick={give5}>
                        <div className="rectangle-shape">
                            <p className="give-txt">GIVE</p>
                            <div className="peso-container">
                                <p className="peso-sign">₱</p>
                                <p className="piso">5</p>
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
                        <button onClick={open_volunteerModal}>VOLUNTEER</button>
                    </p>
                </div>
            </div>
            <Modal />
        </div>
    );
};

export default DonationPage;
