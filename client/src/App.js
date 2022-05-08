import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// css
import "./index.css";

// react redux
import { useDispatch, useSelector } from "react-redux";

// redux actions
import { closeModal } from "./redux/actions/closeModal";

// components
import NavBar from "./components/NavBar/NavBar";
import DonationPage from "./components/DonationPage/DonationPage";
import HomePage from "./components/HomePage/HomePage";
import NeedHelpPage from "./components/NeedHelpPage/NeedHelpPage";

const App = () => {
    const dispatch = useDispatch();
    const modalState = useSelector((state) => state.modalReducer.isModalOpen);

    const handleClose = () => {
        dispatch(closeModal());
    };
    return (
        <div className="App">
            {modalState && <div className="modal-overlay" onClick={handleClose}/>}
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/donate" element={<DonationPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/need-help" element={<NeedHelpPage />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
