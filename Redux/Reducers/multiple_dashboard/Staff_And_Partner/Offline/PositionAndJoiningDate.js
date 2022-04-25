const initialState={
    user_position:"",
    user_joining_date:new Date(),
}

export const position_and_joining_date=(state=initialState,action)=>{
    switch (action.type) {
        case"OFFLINE_USER_POSITION":{
            return{
                ...state,
                user_position:action.payload
            }
        }
        case"OFFLINE_USER_JOINING_DATE":{
            return{
                ...state,
                user_joining_date:action.payload
            }
        }

        default:
            return state
    }
}


