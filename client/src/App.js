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
import ErrorModal from "./components/Modals/ErrorModal/ErrorModal";
import EmptyPage from "./components/EmptyPage/EmptyPage";

const App = () => {
    const dispatch = useDispatch();
    const modalState = useSelector((state) => state.modalReducer.isModalOpen);
    const errorModalState = useSelector(
        (state) => state.modalReducer.errorModal
    );

    const handleClose = () => {
        dispatch(closeModal());
    };

    const [isLessThan810px, setIsLessThan810px] = React.useState(false);

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 810) {
                setIsLessThan810px(true);
            } else {
                setIsLessThan810px(false);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="App">
            {modalState && (
                <div className="modal-overlay" onClick={handleClose} />
            )}
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/donate" element={<DonationPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/need-help" element={<NeedHelpPage />} />
                </Routes>
            </Router>
            {errorModalState && <ErrorModal />}
            {isLessThan810px && <EmptyPage />}
        </div>
    );
};

export default App;
