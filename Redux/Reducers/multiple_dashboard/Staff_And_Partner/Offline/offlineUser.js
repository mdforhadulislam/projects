const initialState = {
    offline_user: []
};

const date = new Date();
const day = date.getDay();
const today = date.getDate();
const month = date.getMonth();
const hours = date.getHours();
const minutes = date.getMinutes();

export const offline_user = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_OFFLINE_USER': {
            return {
                offline_user: [...state.offline_user, action.payload]
            };
        }
        case 'DELETE_OFFLINE_USER': {
            return {
                offline_user: state.offline_user.filter(
                    (singelUser) => singelUser.user_id !== action.payload
                )
            };
        }
        case 'EDIT_OFFLINE_USER_PROFILE_IMAGE': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_image: action.payload.value
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_AS_A_MEMBER': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_as_a_member: action.payload.value
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_AS_A_STAFF': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_as_a_staff: action.payload.value
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_NAME': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                name: `${action.payload.first_name} ${
                                    action.payload.middle_name ? action.payload.middle_name : ''
                                } ${action.payload.last_name}`
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_GENDER': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_gender: action.payload.value
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_BLOOD_GROUP': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_blood_group: action.payload.value
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_DATE_OF_BIRTH': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_date_of_birth: action.payload.value
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_RELIGION': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_religion: action.payload.value
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_NATIONALITY': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_nationality: action.payload.value
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_MOBILE_NO': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_mobile_no: action.payload.value
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_EMAIL': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_email: action.payload.value
                            };
                        })
                ]
            };
        }

        case 'EDIT_OFFLINE_USER_PRESENT_ADDRESS_REGION': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                presentAddress: {
                                    ...user.presentAddress,
                                    region: action.payload.value
                                }
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_PRESENT_ADDRESS_CITY': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                presentAddress: {
                                    ...user.presentAddress,
                                    city: action.payload.value
                                }
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_PRESENT_ADDRESS_AREA': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                presentAddress: {
                                    ...user.presentAddress,
                                    area: action.payload.value
                                }
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_PRESENT_ADDRESS_ADDRESS': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                presentAddress: {
                                    ...user.presentAddress,
                                    address: action.payload.value
                                }
                            };
                        })
                ]
            };
        }

        case 'EDIT_OFFLINE_USER_PERMANENT_ADDRESS_REGION': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            console.log(action.payload.value);
                            console.log(user);
                            return {
                                ...user,
                                permanentAddress: {
                                    ...user.permanentAddress,
                                    region: action.payload.value
                                }
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_PERMANENT_ADDRESS_CITY': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                permanentAddress: {
                                    ...user.permanentAddress,
                                    city: action.payload.value
                                }
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_PERMANENT_ADDRESS_AREA': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                permanentAddress: {
                                    ...user.permanentAddress,
                                    area: action.payload.value
                                }
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_PERMANENT_ADDRESS_ADDRESS': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                permanentAddress: {
                                    ...user.permanentAddress,
                                    address: action.payload.value
                                }
                            };
                        })
                ]
            };
        }

        case 'EDIT_OFFLONE_USER_ADD_FILE': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_documentes: [...user.user_documentes, action.payload.value]
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLONE_USER_REMOVED_FILE': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_documentes: [
                                    ...user.user_documentes
                                        .filter(
                                            (singel_documents) =>
                                                singel_documents.id !== action.payload.value
                                        )
                                        .map((documentes) => {
                                            return {
                                                ...documentes
                                            };
                                        })
                                ]
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_POSITION': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_position: action.payload.value
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_JOINING_DATE': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_joining_date: action.payload.value
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_SALARY_AMOUNT': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    salary_amount: action.payload.value
                                }
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_SALARY_TYPE': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    salary_type: action.payload.value
                                }
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_NO_SALARY_SYSTEM': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    no_salary_system: action.payload.value,
                                    salary_type: '',
                                    salary_amount: '',
                                    salary_every_day: '',
                                    salary_every_week: '',
                                    salary_every_month: ''
                                }
                            };
                        })
                ]
            };
        }

        case 'EDIT_OFFLINE_USER_SALARY_DATE_EVERY_DAY': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    salary_every_day: action.payload.value
                                }
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_SALARY_DATE_EVERY_WEEK': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    salary_every_week: action.payload.value
                                }
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_SALARY_DATE_EVERY_MONTH': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    salary_every_month: action.payload.value
                                }
                            };
                        })
                ]
            };
        }

        case 'EDIT_OFFLINE_USER_SALARY_STATUS_SET_PAID': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    salary_status_paid: true,
                                    salary_status_upcoming: false,
                                    salary_status_due: false
                                }
                            };
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_SALARY_STATUS_SET_UPCOMING': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            const isTrue =
                                user.user_salary.salary_every_day !== ''
                                    ? user.user_salary.salary_every_day.split(':')[0] > hours
                                    : // &&user.user_salary.salary_every_day.split(':')[1] >= '00'
                                    user.user_salary.salary_every_week !== ''
                                    ? user.user_salary.salary_every_week > day
                                    : user.user_salary.salary_every_month !== ''
                                    ? user.user_salary.salary_every_month.split('-')[0] >= today
                                    : false;

                            if (isTrue) {
                                return {
                                    ...user,
                                    user_salary: {
                                        ...user.user_salary,
                                        salary_status_due: false,
                                        salary_status_upcoming: true,
                                        salary_status_paid: false
                                    }
                                };
                            } else if (isTrue === false) {
                                return {
                                    ...user,
                                    user_salary: {
                                        ...user.user_salary,
                                        salary_status_upcoming: false
                                    }
                                };
                            }
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_SALARY_STATUS_SET_DUE': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            const isTrue =
                                user.user_salary.salary_every_day !== ''
                                    ? user.user_salary.salary_every_day.split(':')[0] <= hours
                                    : // &&user.user_salary.salary_every_day.split(':')[1] <= '59'
                                    user.user_salary.salary_every_week !== ''
                                    ? user.user_salary.salary_every_week <= day
                                    : user.user_salary.salary_every_month !== ''
                                    ? user.user_salary.salary_every_month.split('-')[0] <= today
                                    : false;

                            if (isTrue) {
                                return {
                                    ...user,
                                    user_salary: {
                                        ...user.user_salary,
                                        salary_status_due: true,
                                        salary_status_upcoming: false,
                                        salary_status_paid: false
                                    }
                                };
                            } else if (isTrue === false) {
                                return {
                                    ...user,
                                    user_salary: {
                                        ...user.user_salary,
                                        salary_status_due: false
                                    }
                                };
                            }
                        })
                ]
            };
        }
        case 'EDIT_OFFLINE_USER_SALARY_STATUS': {
            return {
                offline_user: [
                    ...state.offline_user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.offline_user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    salary_status_upcoming:
                                        action.payload.value === 'upcoming' ? true : false,
                                    salary_status_due:
                                        action.payload.value === 'due' ? true : false,
                                    salary_status_paid:
                                        action.payload.value === 'paid' ? true : false
                                }
                            };
                        })
                ]
            };
        }

        default:
            return state;
    }
};
