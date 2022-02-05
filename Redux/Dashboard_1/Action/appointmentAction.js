export const addToAppointment = (payload) => {
    return {
        type: 'ADD_TO_APPOINTMENT',
        payload
    };
};
export const addToPreviousAppointment = (payload) => {
    return {
        type: 'ADD_TO_PREVIOUS_APPOINTMENT',
        payload
    };
};
export const addSentAppointmentFromForm = (payload) => {
    return {
        type: 'ADD_SENT_APPOINTMENT_FROM_FORM',
        payload
    };
};
export const addAcceptToAppointment = (payload) => {
    return {
        type: 'ADD_ACCEPT_TO_APPOINTMENT',
        payload
    };
};
export const addCancelToAppointment = (payload) => {
    return {
        type: 'ADD_CANCEL_TO_APPOINTMENT',
        payload
    };
};
export const addCancelToUpcomingAppointment = (payload) => {
    return {
        type: 'ADD_CANCEL_TO_UPCOMING_APPOINTMENT',
        payload
    };
};
export const addSentCancelToAppointment = (payload) => {
    return {
        type: 'ADD_SENT_CANCEL_TO_APPOINTMENT',
        payload
    };
};
