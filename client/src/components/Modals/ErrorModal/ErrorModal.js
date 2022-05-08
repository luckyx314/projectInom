import React from "react";
import "./ErrorModal.css";

const ErrorModal = () => {
    return (
        <div className="error-modal-wrapper">
            <div className="title-container">
                <h3>Coming soon!</h3>
            </div>
            <div className="error-modal-container">
                <div>Sorry, this feature is not yet available.</div>
            </div>
        </div>
    );
};

export default ErrorModal;
