import React from "react";
import DonationModal from "./DonationModal/DonationModal";

// css
import "./Modal.css";

// react redux
import { useSelector } from "react-redux";

const Modal = () => {
    const isModalOpen = useSelector((state) => state.modalReducer.isModalOpen);
    const donationModalStatus = useSelector(
        (state) => state.modalReducer.open_donationModal
    );

    if (isModalOpen) {
        return (
            <div className="modal-wrapper">
                {donationModalStatus && (
                    <div className="modal-title-container">
                        <h3>Become a Patron</h3>
                    </div>
                )}
                {donationModalStatus && <DonationModal />}
            </div>
        );
    } else {
        return null
    }
};

export default Modal;
