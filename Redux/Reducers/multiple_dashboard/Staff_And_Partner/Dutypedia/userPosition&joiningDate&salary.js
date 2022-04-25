const initialState = {
    user_position: '',
    user_joining_date: new Date(),
    user_salary_amount: '',
    user_salary_type: 'daily',
    user_salary_date_every_day: '',
    user_salary_date_every_week: '',
    user_salary_date_every_month: '',
    user_no_salary_system: false,
    user_salary_status_upcoming: false,
    user_salary_status_due: false,
    user_salary_status_paid: false
};
const date = new Date();
const day = date.getDay();
const today = date.getDate();
const month = date.getMonth();
const hours = date.getHours();
const minutes = date.getMinutes();

export default function user_position_and_joining_date_and_salary(state = initialState, action) {
    switch (action.type) {
        case 'USER_POSITION': {
            return {
                ...state,
                user_position: action.payload
            };
        }
        case 'USER_JOINING_DATE': {
            return {
                ...state,
                user_joining_date: action.payload
            };
        }
        case 'USER_SALARY_AMOUNT': {
            return {
                ...state,
                user_salary_amount: action.payload
            };
        }
        case 'USER_SALARY_TYPE': {
            return {
                ...state,
                user_salary_type: action.payload,
                user_salary_date_every_day: '',
                user_salary_date_every_week: '',
                user_salary_date_every_month: ''
            };
        }
        case 'USER_SALARY_DATE_EVERY_DAY': {
            return {
                ...state,
                user_salary_date_every_day: action.payload,
                user_salary_date_every_week: '',
                user_salary_date_every_month: ''
            };
        }
        case 'USER_SALARY_DATE_EVERY_WEEk': {
            return {
                ...state,
                user_salary_date_every_week: action.payload,
                user_salary_date_every_month: '',
                user_salary_date_every_day: ''
            };
        }
        case 'USER_SALARY_DATE_EVERY_MONTH': {
            return {
                ...state,
                user_salary_date_every_month: action.payload,
                user_salary_date_every_day: '',
                user_salary_date_every_week: ''
            };
        }
        case 'USER_NO_SALARY_SYSTEM': {
            return {
                ...state,
                user_no_salary_system: action.payload,
                user_salary_date_every_day: '',
                user_salary_date_every_week: '',
                user_salary_date_every_month: '',
                user_salary_amount: '',
                user_salary_type: ''
            };
        }
        case 'SALARY_STATUS_SET_UPCOMING': {
            const isTrue =
                state.user_salary_date_every_day !== ''
                    ? state.user_salary_date_every_day.split(':')[0] > hours
                    : // &&state.user_salary_date_every_day.split(':')[1] >= '00'
                    state.user_salary_date_every_week !== ''
                    ? state.user_salary_date_every_week > day
                    : state.user_salary_date_every_month !== ''
                    ? state.user_salary_date_every_month.split('-')[0] >= today
                    : false;

            return {
                ...state,
                user_salary_status_upcoming: isTrue
            };
        }
        case 'SALARY_STATUS_SET_DUE': {
            const isTrue =
                state.user_salary_date_every_day !== ''
                    ? state.user_salary_date_every_day.split(':')[0] <= hours
                    : // &&state.user_salary_date_every_day.split(':')[1] <= '59'
                    state.user_salary_date_every_week !== ''
                    ? state.user_salary_date_every_week <= day
                    : state.user_salary_date_every_month !== ''
                    ? state.user_salary_date_every_month.split('-')[0] <= today
                    : false;
            return {
                ...state,
                user_salary_status_due: isTrue
            };
        }

        default:
            return state;
    }
}
