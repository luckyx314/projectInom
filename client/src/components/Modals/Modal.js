import React from "react";
import DonationModal from "./DonationModal/DonationModal";

// css
import "./Modal.css";

// react redux
import { useSelector } from "react-redux";

const Modal = () => {
    const donationModalStatus = useSelector(
        (state) => state.modalReducer.open_donationModal
    );

    return (
        <div className="modal-wrapper">
            {donationModalStatus && (
                <div className="modal-title-container">
                    <h3>Become a Patron</h3>
                </div>
            )}
            <div className="modal-overlay" />

            {donationModalStatus && <DonationModal />}
        </div>
    );
};

export default Modal;
