import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// react-redux
import { Provider } from "react-redux";

// redux
import allReducers from "./redux/reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: allReducers,
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
