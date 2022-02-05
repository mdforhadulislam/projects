import appointmentData from '../../../Components/Dashboard_1/Appointment/AppointmentFakeData';

const initialState = {
    appointment: appointmentData.appointmentFakeData,
    appointmentReceived: appointmentData.appointmentFakeDataReceived,
    appointmentSent: appointmentData.appointmentFakeDataReceived,
    previousAppointment: appointmentData.previousFakeDataReceived,
    userDuty: appointmentData.user,
    offlineUser: appointmentData.offlineUser
};
const appointmentReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_APPOINTMENT': {
            const newCart = {
                ...state,
                appointment: [...state.appointment, action.payload]
            };
            return newCart;
        }
        case 'ADD_TO_PREVIOUS_APPOINTMENT': {
            const findItem = state.appointment.find((item) => item.id === action.payload.id);

            if (findItem) {
                let cartIndex = state.appointment.indexOf(findItem);

                let newArray = [...state.appointment];
                newArray[cartIndex] = {
                    ...newArray[cartIndex],
                    isConfirmed: true
                };
                const newItem = newArray.filter((item) => item.id !== action.payload.id);

                const newCart = {
                    ...state,
                    appointment: newItem,
                    previousAppointment: [...state.previousAppointment, newArray[cartIndex]]
                };

                return newCart;
            } else state;
        }
        case 'ADD_SENT_APPOINTMENT_FROM_FORM': {
            const newCart = {
                ...state,
                appointmentSent: [...state.appointmentSent, action.payload]
            };
            return newCart;
        }

        case 'ADD_ACCEPT_TO_APPOINTMENT': {
            const findItem = state.appointmentReceived.find(
                (item) => item.id === action.payload.id
            );

            if (findItem) {
                let cartIndex = state.appointmentReceived.indexOf(findItem);

                let newArray = [...state.appointmentReceived];
                newArray[cartIndex] = {
                    ...newArray[cartIndex],
                    isAccepted: true
                };
                const newCart = {
                    ...state,
                    appointmentReceived: newArray
                };

                return newCart;
            } else state;
        }
        case 'ADD_CANCEL_TO_APPOINTMENT': {
            const findItem = state.appointmentReceived.find(
                (item) => item.id === action.payload.id
            );

            if (findItem) {
                let cartIndex = state.appointmentReceived.indexOf(findItem);

                let newArray = [...state.appointmentReceived];
                newArray[cartIndex] = {
                    ...newArray[cartIndex],
                    isCancelled: true
                };
                const newCart = {
                    ...state,
                    appointmentReceived: newArray
                };

                return newCart;
            } else state;
        }
        case 'ADD_CANCEL_TO_UPCOMING_APPOINTMENT': {
            const findItem = state.appointment.find((item) => item.id === action.payload.id);

            if (findItem) {
                let cartIndex = state.appointment.indexOf(findItem);

                let newArray = [...state.appointment];
                newArray[cartIndex] = {
                    ...newArray[cartIndex],
                    isCancelled: true
                };
                const newItem = newArray.filter((item) => item.id !== action.payload.id);

                const newCart = {
                    ...state,
                    appointment: newItem,
                    previousAppointment: [...state.previousAppointment, newArray[cartIndex]]
                };

                return newCart;
            } else state;
        }
        case 'ADD_SENT_CANCEL_TO_APPOINTMENT': {
            const findItem = state.appointmentSent.find((item) => item.id === action.payload.id);

            if (findItem) {
                let cartIndex = state.appointmentSent.indexOf(findItem);

                let newArray = [...state.appointmentSent];
                newArray[cartIndex] = {
                    ...newArray[cartIndex],
                    isCancelled: true
                };
                const newCart = {
                    ...state,
                    appointmentSent: newArray
                };

                return newCart;
            } else state;
        }
        case 'REMOVE_FROM_appointment': {
            const newRemoveCart = {
                ...state,
                appointment: state.appointment.filter((pd) => pd.id !== action.payload)
            };
            return newRemoveCart;
        }
        case 'UPDATE_TO_appointment': {
            const filtered = state.appointment.filter((post) => post.id !== action.id);

            const newEdit = {
                id: action.id,
                name: action.name,
                date: action.date,
                amount: action.amount
            };

            const newCart = {
                ...state,
                appointment: [...filtered, newEdit]
            };
            return newCart;
        }
        case 'MONTH_INDEX_ADD': {
            const newCart = {
                ...state,
                monthIndex: state.monthIndex + 1
            };
            return newCart;
        }
        case 'MONTH_INDEX_REMOVE': {
            const newCart = {
                ...state,
                monthIndex: state.monthIndex - 1
            };
            return newCart;
        }

        default:
            return state;
    }
};
export default appointmentReducers;
