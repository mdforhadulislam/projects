const initialState = {
    user_gender:"Male",
    user_blood_group:"A+",
}
export const gender_and_blood_group = (state = initialState, action) => {
    switch (action.type) {
        case "OFFLINE_USER_GENDER":{
            return{
                ...state,
                user_gender:action.payload
            }
        }
        case "OFFLINE_USER_BLOODGROUP":{
            return{
                ...state,
                user_blood_group:action.payload
            }
        }
        default:
            return state
    }
}

