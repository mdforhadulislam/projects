const initialState = [];

const employeeDocuments = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'USER_ADD_DOCUMENTES': {
            return [...state, action.payload];
        }
        case 'REMOVED_USER_DOCUMENTES': {
            return state.filter((data) => data.id !== action.payload);
        }
        default:
            return state;
    }
};

export default employeeDocuments;
