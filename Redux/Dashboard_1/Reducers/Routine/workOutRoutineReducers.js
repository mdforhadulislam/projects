const initialState = {
    workOutName: []
};

const workOutRoutineReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_WORK_OUT_ROUTINE_NAME': {
            const newCart = {
                ...state,
                workOutName: [action.payload]
            };
            return newCart;
        }
        default:
            return state;
    }
};
export default workOutRoutineReducers;
