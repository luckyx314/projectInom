import { combineReducers } from "redux";
import modalReducer from "./modalReducer/modalReducer";

const allReducers = combineReducers({
    modalReducer,
});

export default allReducers;
