const initialState={
    user_email:"",
    user_mobile_no:"",
}
export const email_and_mobile_no=(state=initialState,action)=>{
    switch (action.type) {
        case "OFFLINE_USER_EMAIL":{
            return{
                ...state,
                user_email:action.payload
            }
        }
        case "OFFLINE_USER_MOBILE_NO":{
            return{
                ...state,
                user_mobile_no:action.payload
            }
        }
        default:
            return state
    }
}


