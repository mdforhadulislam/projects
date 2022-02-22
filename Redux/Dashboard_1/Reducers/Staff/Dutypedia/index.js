// import { combineReducers } from 'redux';
// import accessFunctionality from './accessFunctionality';
// import gender_blood_birth_religion_desh from './gender&blood&birth&religion&desh';
// import member_and_staff from './member&staff';
// import nameReducer from './nameReducer';
// import permanentAddress from './PermanentAddress';
// import presentAddress from './presentAddress';
// import uploadingFile from './uploadingFile';
// import user_id_and_email_and_mobile_no_and_image from './userId&email&mobileNo&image';
// import user_position_and_joining_date_and_salary from './userPosition&joiningDate&salary';

// export const dutypediaReducers = combineReducers({
//     user_id_and_email_and_mobile_no_and_image,
//     member_and_staff,
//     name: nameReducer,
//     gender_blood_birth_religion_desh,
//     presentAddress,
//     permanentAddress,
//     uploadingFile,
//     user_position_and_joining_date_and_salary,
//     accessFunctionality
// });

const initalState = {
    join_as: [],
    first_name: '',
    middle_name: '',
    last_name: '',
    gender: '',
    blood_group: '',
    date_of_birth: new Date(),
    religion: '',
    nationality: '',

    pres_region: '',
    pres_city: '',
    pres_area: '',
    pres_address: '',

    perm_region: '',
    perm_city: '',
    perm_area: '',
    perm_address: '',

    file_uplaod: [],

    user: null,
    position: '',
    joining_date: new Date(),
    salary_amount: null,
    salary_type: null,
    salary_date_every_day: null,
    salary_date_every_month: null,
    salary_date_every_week: null,
    access: []
};

const dutypediaReducers = (state = initalState, action) => {
    switch (action.type) {
        case 'JOIN_AS': {
            return {
                ...state,
                join_as: [{ id: action.payload }]
            };
        }
        case 'FIRST_NAME': {
            return {
                ...state,
                first_name: action.payload
            };
        }
        case 'MIDDLE_NAME': {
            return {
                ...state,
                middle_name: action.payload
            };
        }
        case 'LAST_NAME': {
            return {
                ...state,
                last_name: action.payload
            };
        }
        case 'USER_GENDER': {
            return {
                ...state,
                gender: action.payload
            };
        }
        case 'USER_BLOOD_GROUP': {
            return {
                ...state,
                blood_group: action.payload
            };
        }
        case 'USER_DATE_OF_BIRTH': {
            return {
                ...state,
                date_of_birth: action.payload
            };
        }
        case 'USER_RELIGION': {
            return {
                ...state,
                religion: action.payload
            };
        }
        case 'USER_NATIONALITY': {
            return {
                ...state,
                nationality: action.payload
            };
        }
        case 'USER_PRESENT_ADDRESS_REGION': {
            return {
                ...state,
                pres_region: action.payload
            };
        }
        case 'USER_PRESENT_ADDRESS_CITY': {
            return {
                ...state,
                pres_city: action.payload
            };
        }
        case 'USER_PRESENT_ADDRESS_AREA': {
            return {
                ...state,
                pres_area: action.payload
            };
        }
        case 'USER_PRESENT_ADDRESS_ADDRESS': {
            return {
                ...state,
                pres_address: action.payload
            };
        }

        case 'USER_PERMANENT_ADDRESS_REGION': {
            return {
                ...state,
                perm_region: action.payload
            };
        }
        case 'USER_PERMANENT_ADDRESS_CITY': {
            return {
                ...state,
                perm_city: action.payload
            };
        }
        case 'USER_PERMANENT_ADDRESS_AREA': {
            return {
                ...state,
                perm_area: action.payload
            };
        }
        case 'USER_PERMANENT_ADDRESS_ADDRESS': {
            return {
                ...state,
                perm_address: action.payload
            };
        }
        case 'USER_DOCUMENTES': {
            return {
                ...state,
                file_uplaod: [...state.file_uplaod, action.payload]
            };
        }
        case 'REMOVED_USER_DOCUMENTES': {
            return {
                ...state,
                file_uplaod: state.file_uplaod?.filter((file) => file?.id !== action.payload)
            };
        }

        default:
            return state;
    }
};

export default dutypediaReducers;
