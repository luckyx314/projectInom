import React from "react";
import "./NeedHelpPage.css";

const NeedHelpPage = () => {
    return (
        <div className="help-page-wrapper">
            <div className="help-page-container">
                <div className="statements-container">
                    <h1>
                        Do you need <br /> our help?
                    </h1>
                    <p>
                        Do not hesitate to contact us <br />
                        so that we can extend our <br />
                        helping hands to you.
                    </p>
                    <button>CHECK AREA AVAILABILITY</button>
                </div>
                <div className="form-container">
                    <form action="">
                        <p className="contact-details-txt">Contact Details</p>
                        <div>
                            <label htmlFor="">Your name*</label>
                            <div className="input-container">
                                <input type="text" placeholder="First name" required/>
                                <input type="text" placeholder="Last name" required/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Your email</label>
                            <div className="input-container">
                                <input type="email" placeholder="sample@email.com"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Phone*</label>
                            <div className="input-container">
                                <input type="number" placeholder="+63" required/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Address*</label>
                            <div className="input-container">
                                <input type="text" placeholder="Block #" required/>
                                <input type="text" placeholder="Province" required/>
                                <input type="text" placeholder="City" required/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Message</label>
                            <div className="input-container">
                                <textarea placeholder="Type your message here..."/>
                            </div>
                        </div>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NeedHelpPage;
