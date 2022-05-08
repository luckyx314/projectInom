const modalState = {
    open_donationModal: false,
    open_volunteerModal: false,
    errorModal: false,
    isModalOpen: false,
};

const modalReducer = (state = modalState, action) => {
    switch (action.type) {
        case "OPEN_DONATION_MODAL":
            return {
                ...state,
                open_donationModal: true,
                open_volunteerModal: false,
                errorModal: false,
                isModalOpen: true,
            };
        case "OPEN_VOLUNTEER_MODAL":
            return {
                ...state,
                open_volunteerModal: true,
                open_donationModal: false,
                errorModal: false,
                isModalOpen: true,
            };
        case "ERROR_MODAL":
            return {
                ...state,
                open_volunteerModal: false,
                open_donationModal: false,
                errorModal: true,
                isModalOpen: true,
            };
        case "CLOSE_MODAL":
            return { ...state, isModalOpen: false, errorModal: false };
        default:
            return state;
    }
};

export default modalReducer;
