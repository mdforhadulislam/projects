const initialState = {
    user_date_of_birth:new Date(1010101010101),
    user_religion:"",
}
export const birthDate_and_religion = (state = initialState, action) => {
    switch (action.type) {
        case "OFFLINE_USER_DATE_OF_BIRTH":{
            return{
                ...state,
                user_date_of_birth:action.payload
            }
        }
        case "OFFLINE_USER_RELIGION":{
            return{
                ...state,
                user_religion:action.payload
            }
        }
        default:
            return state
    }
}

