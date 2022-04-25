const initialState = {
    user_as_a_member:false,
    user_as_a_staff:false,
}
export const mamber_and_staff = (state = initialState, action) => {
    switch (action.type) {
        case "OFFLINE_USER_AS_A_MEMBER":{
            return{
                ...state,
                user_as_a_member:action.payload
            }
        }
        case "OFFLINE_USER_AS_A_STAFF":{
            return{
                ...state,
                user_as_a_staff:action.payload
            }
        }
        default:
            return state
    }
}

