const initialState = {
    user_position: "",
    user_joining_date: new Date(),
    user_salary_amount: "",
    user_salary_type: "daily",
    user_salary_date_every_day: "",
    user_salary_date_every_week: "",
    user_salary_date_every_month: "",
    user_no_salary_system: false,
}

export default function user_position_and_joining_date_and_salary(state = initialState, action) {
    switch (action.type) {
        case "USER_POSITION": {
            return {
                ...state,
                user_position: action.payload
            }
        }
        case "USER_JOINING_DATE": {
            return {
                ...state,
                user_joining_date: action.payload
            }
        }
        case "USER_SALARY_AMOUNT": {
            return {
                ...state,
                user_salary_amount: action.payload
            }
        }
        case "USER_SALARY_TYPE": {
            return {
                ...state,
                user_salary_type: action.payload
            }
        }
        case "USER_SALARY_DATE_EVERY_DAY": {
            return {
                ...state,
                user_salary_date_every_day: action.payload,
                user_salary_date_every_week: "",
                user_salary_date_every_month: ""
            }
        }
        case "USER_SALARY_DATE_EVERY_WEEk": {
            return {
                ...state,
                user_salary_date_every_week: action.payload,
                user_salary_date_every_month: "",
                user_salary_date_every_day: ""
            }
        }
        case "USER_SALARY_DATE_EVERY_MONTH": {
            return {
                ...state,
                user_salary_date_every_month: action.payload,
                user_salary_date_every_day: "",
                user_salary_date_every_week: "",
            }
        }
        case "USER_NO_SALARY_SYSTEM": {
            return {
                ...state,
                user_no_salary_system: action.payload
            }
        }
        default:
            return state
    }
}


