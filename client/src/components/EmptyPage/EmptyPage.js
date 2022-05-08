import React from "react";
import "./EmptyPage.css"

const EmptyPage = () => {
    return (
        <div className="empty-page-wrapper">
            <div className="empty-page-container">
                <h2>
                    Sorry, mobile responsiveness is not yet available. <br />{" "}
                    Please try to access the site using a PC.
                </h2>
            </div>
        </div>
    );
};

export default EmptyPage;
