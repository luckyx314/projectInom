const modalState = {
    open_donationModal: false,
    open_volunteerModal: true,
    isModalOpen: true,
};

const modalReducer = (state = modalState, action) => {
    switch (action.type) {
        case "OPEN_DONATION_MODAL":
            return {
                ...state,
                open_donationModal: action.payload,
                isModalOpen: true,
            };
        case "CLOSE_MODAL":
            return { ...state, isModalOpen: false };
        default:
            return state;
    }
};

export default modalReducer;
