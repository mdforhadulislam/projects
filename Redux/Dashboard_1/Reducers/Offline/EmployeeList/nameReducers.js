const initalState = {
    user_first_name:"",
    user_middle_name:"",
    user_last_name:"",
}

export const nameReducers = (state = initalState, action) => {
    switch (action.type) {
        case "OFFLINE_USER_FIRST_NAME":{
            return{
                ...state,
                user_first_name:action.payload
            }
        }
        case "OFFLINE_USER_MIDDLE_NAME":{
            return{
                ...state,
                user_middle_name:action.payload
            }
        }
        case "OFFLINE_USER_LAST_NAME":{
            return{
                ...state,
                user_last_name:action.payload
            }
        }
        default:
            return state
    }
}