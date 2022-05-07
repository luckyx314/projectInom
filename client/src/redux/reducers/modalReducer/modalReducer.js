const modalState = {
    open_donationModal: false,
};

const modalReducer = (state = modalState, action) => {
    switch (action.type) {
        case "OPEN_DONATION_MODAL":
            return { ...state, open_donationModal: action.payload };
        default:
            return state;
    }
};

export default modalReducer;
