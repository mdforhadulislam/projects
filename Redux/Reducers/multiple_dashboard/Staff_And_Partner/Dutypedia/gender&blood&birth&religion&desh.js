const initialState={
    user_gender:"Male",
    user_blood_group:"A+",
    user_date_of_birth:new Date(1010101010101),
    user_religion:"",
    user_nationality:"",
}

export default function gender_blood_birth_religion_desh(state=initialState,action){
    switch(action.type){
        case "USER_GENDER":{
            return{
                ...state,
                user_gender:action.payload
            }
        }
        case "USER_BLOOD_GROUP":{
            return{
                ...state,
                user_blood_group:action.payload
            }
        }
        case "USER_DATE_OF_BIRTH":{
            return{
                ...state,
                user_date_of_birth:action.payload
            }
        }
        case "USER_RELIGION":{
            return{
                ...state,
                user_religion:action.payload
            }
        }
        case "USER_NATIONALITY":{
            return{
                ...state,
                user_nationality:action.payload
            }
        }
        default:
            return state
    }
}
