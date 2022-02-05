const initialState={
    user_salary_amount:"",
    user_salary_type:"daily",
    user_salary_date_every_day:"",
    user_salary_date_every_week:"",
    user_salary_date_every_month:"",
    user_no_salary_system:false,
}
export const offline_user_salary_system=(state=initialState,action)=>{
    switch (action.type) {
        case"OFFLINE_USER_SALARY_AMOUNT":{
            return{
                ...state,
                user_salary_amount:action.payload
            }
        }
        case"OFFLINE_USER_SALARY_TYPE":{
            return{
                ...state,
                user_salary_type:action.payload
            }
        }
        case"OFFLINE_USER_SALARY_DATE_EVERY_DAY":{
            return{
                ...state,
                user_salary_date_every_day:action.payload
            }
        }
        case"OFFLINE_USER_SALARY_DATE_EVERY_WEEK":{
            return{
                ...state,
                user_salary_date_every_week:action.payload
            }
        }
        case"OFFLINE_USER_SALARY_DATE_EVERY_MONTH":{
            return{
                ...state,
                user_salary_date_every_month:action.payload
            }
        }
        case "OFFLINE_USER_NO_SALARY_SYSTEM":{
            return{
                ...state,
                user_no_salary_system:action.payload
            }
        }

        default:
            return state
    }
}


