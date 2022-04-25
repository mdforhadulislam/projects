const initialState={
    user_documentes:[]
}

export const user_documentes=(state=initialState,action)=>{
    switch (action.type) {
        case "OFFLINE_USER_ADD_DOCUMENTES":{
            return{
                user_documentes:[...state.user_documentes,action.payload]
            }
        }
        case"OFFLINE_USER_DELETE_DOCUMENTES":{
            return{
                user_documentes:state.user_documentes.filter((data)=> data.id !== action.payload)
            }
        }
        case"OFFLINE_USER_REMOVED_ALL_DOCUMENTES":{
            return{
                user_documentes:[]
            }
        }
        default:
            return state
    }
}
