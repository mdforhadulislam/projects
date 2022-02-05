const initalState={
    region:"none",
    city:"city",
    area:"area",
    address:""
}

export default function presentAddress(state=initalState,action){
    switch (action.type) {
        case "USER_PRESENT_ADDRESS_REGION":{
            return{
                ...state,
                region:action.payload
            }
        }
        case "USER_PRESENT_ADDRESS_CITY":{
            return{
                ...state,
                city:action.payload
            }
        }
        case "USER_PRESENT_ADDRESS_AREA":{
            return{
                ...state,
                area:action.payload
            }
        }
        case "USER_PRESENT_ADDRESS_ADDRESS":{
            return{
                ...state,
                address:action.payload
            }
        }
        default:
            return state
    }
}

