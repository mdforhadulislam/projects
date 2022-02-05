const initialState={
    user_documentes:[]
}

export default function uploadingFile(state=initialState,action){
    switch (action.type) {
        case "USER_DOCUMENTES":{
            
            return{
                user_documentes:[...state.user_documentes,action.payload]
            }
        }
        case "REMOVED_USER_DOCUMENTES":{
            return{
                user_documentes:state.user_documentes.filter((data)=> data.id !== action.payload)
            }
        }
        case "REMOVED_ALL_USER_FILE":
            return{
                user_documentes:[]
            }
        default:
            return state
    }
}
