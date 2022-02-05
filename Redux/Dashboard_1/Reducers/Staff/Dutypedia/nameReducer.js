const initialState={
    user_furst_name:"",
    user_middle_name:"",
    user_last_name:"",
}

export default function nameReducer(state=initialState,action) {
    switch(action.type){
        case"USER_FIRST_NAME":{
            return{
                ...state,
                user_furst_name:action.payload,
            }
        }
        case"USER_MIDDLE_NAME":{
            return{
                ...state,
                user_middle_name:action.payload,
            }
        }
        case"USER_Last_NAME":{
            return{
                ...state,
                user_last_name:action.payload,
            }
        }

        default :
            return state
    }
}

