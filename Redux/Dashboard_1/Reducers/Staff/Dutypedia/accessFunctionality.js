const initialState={
    user_dashbord:false,
    user_staff_and_partner:false,
    user_order:false,
    user_account_balance:false,
    user_expencess:false,
    user_customer_review:false,
    user_member:false,
    user_group:false,
    user_notice:false,
    user_company_holiday:false,
    user_no_access:false,
}

export default function accessFunctionality(state=initialState,action) {
    switch (action.type) {
        case "USER_DASHBORD_ACCESS":{
            return{
                ...state,
                user_dashbord:action.payload,
                user_no_access:false,
            }
        }
        case "USER_STAFF_AND_PARTNER_ACCESS":{
            return{
                ...state,
                user_staff_and_partner:action.payload,
                user_no_access:false,
            }
        }
        case "USER_ORDER_ACCESS":{
            return{
                ...state,
                user_order:action.payload,
                user_no_access:false,
            }
        }
        case "USER_ACCOUNT_BALANCE_ACCESS":{
            return{
                ...state,
                user_account_balance:action.payload,
                user_no_access:false,
            }
        }
        case "USER_EXPENCESS_ACCESS":{
            return{
                ...state,
                user_expencess:action.payload,
                user_no_access:false,
            }
        }
        case "USER_CUSTOMER_REVIEW_ACCESS":{
            return{
                ...state,
                user_customer_review:action.payload,
                user_no_access:false,
            }
        }
        case "USER_MEMBER_ACCESS":{
            return{
                ...state,
                user_member:action.payload,
                user_no_access:false,
            }
        }
        case "USER_GROUP_ACCESS":{
            return{
                ...state,
                user_group:action.payload,
                user_no_access:false,
            }
        }
        case "USER_NOTICE_ACCESS":{
            return{
                ...state,
                user_notice:action.payload,
                user_no_access:false,
            }
        }
        case "USER_COMPANY_HOLIDAY_ACCESS":{
            return{
                ...state,
                user_company_holiday:action.payload,
                user_no_access:false,
            }
        }
        case "USER_NO_ACCESS_FUCTIONALITY":{
            return{
                user_dashbord:false,
                user_staff_and_partner:false,
                user_order:false,
                user_account_balance:false,
                user_expencess:false,
                user_customer_review:false,
                user_member:false,
                user_group:false,
                user_notice:false,
                user_company_holiday:false,
                user_no_access:action.payload,
            }
        }
        default:
            return state
    }
}

