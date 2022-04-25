const initialState = {
    user_profile_image:"",
    user_nationality:"",
}
export const  upload_image_and_nationality= (state = initialState, action) => {
    switch (action.type) {
        case "OFFLINE_USER_PROFILE_IMAGE":{
            return{
                ...state,
                user_profile_image:action.payload
            }
        }
        case "OFFLINE_USER_NATIONALITY":{
            return{
                ...state,
                user_nationality:action.payload
            }
        }
        default:
            return state
    }
}