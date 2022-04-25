const initalState={
    user_as_a_member:false,
    user_as_a_staff:false,
}
export default function member_and_staff(state=initalState,action) {
    switch(action.type){
        case"USER_AS_A_MEMBER":{
            return{
                ...state,
                user_as_a_member:action.payload,
            }
        }
        case"USER_AS_A_STAFF":{
            return{
                ...state,
                user_as_a_staff:action.payload,
            }
        }
        default :
            return state
    }
}
