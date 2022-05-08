import React from "react";
import "./ErrorModal.css";

const ErrorModal = () => {
    return (
        <div className="error-modal-wrapper">
            <div className="title-container">
                <h3>Sorry</h3>
            </div>
            <div className="error-modal-container">
                <div>This feature is currently unavailable.</div>
            </div>
        </div>
    );
};

export default ErrorModal;
