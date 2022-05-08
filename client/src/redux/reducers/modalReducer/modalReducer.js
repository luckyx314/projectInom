const modalState = {
    open_donationModal: false,
    open_volunteerModal: false,
    isModalOpen: false,
};

const modalReducer = (state = modalState, action) => {
    switch (action.type) {
        case "OPEN_DONATION_MODAL":
            return {
                ...state,
                open_donationModal: true,
                open_volunteerModal: false,
                isModalOpen: true,
            };
        case "OPEN_VOLUNTEER_MODAL":
            return {
                ...state,
                open_volunteerModal: true,
                open_donationModal: false,
                isModalOpen: true,
            };
        case "CLOSE_MODAL":
            return { ...state, isModalOpen: false };
        default:
            return state;
    }
};

export default modalReducer;
