const initialState={
    user_id:"",
    user_email:"",
    user_mobile_no:"",
    user_image:"",
}
export default function user_id_and_email_and_mobile_no_and_image(state=initialState,action){
    switch (action.type) {
        case "USER_ID":{
            return{
                ...state,
                user_id:action.payload
            }
        }
        case "USER_EMAIL":{
            return{
                ...state,
                user_email:action.payload
            }
        }
        case "USER_MOBILE_NO":{
            return{
                ...state,
                user_mobile_no:action.payload
            }
        }
        case "USER_IMAGE":{
            return{
                ...state,
                user_image:action.payload
            }
        }
            
        default:
            return state
    }
}

