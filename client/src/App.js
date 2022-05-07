import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// css
import "./index.css"

// components
import NavBar from "./components/NavBar/NavBar";
import DonationPage from "./components/DonationPage/DonationPage";
import HomePage from "./components/HomePage/HomePage"
import NeedHelpPage from "./components/NeedHelpPage/NeedHelpPage";


const App = () => {
    return (
        <div className="App">
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
