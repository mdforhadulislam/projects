const initialState = {
    user: []
};
const date = new Date();
const day = date.getDay();
const today = date.getDate();
const month = date.getMonth();
const hours = date.getHours();
const minutes = date.getMinutes();

export default function create_online_user(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_SUBMIT_USER': {
            return {
                user: [...state.user, action.payload]
            };
        }
        case 'DELETE_USER': {
            return {
                user: state.user.filter((singelUser) => singelUser.user_id !== action.payload)
            };
        }
        case 'USER_ACCESS_FUNCTIONALY_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                accessFunctionality: {
                                    user_dashbord: action.payload.user_dashbord,
                                    user_staff_and_partner: action.payload.user_staff_and_partner,
                                    user_order: action.payload.user_order,
                                    user_account_balance: action.payload.user_account_balance,
                                    user_expencess: action.payload.user_expencess,
                                    user_customer_review: action.payload.user_customer_review,
                                    user_company_holiday: action.payload.user_company_holiday,
                                    user_member: action.payload.user_member,
                                    user_group: action.payload.user_group,
                                    user_notice: action.payload.user_notice,
                                    user_no_salary_system:
                                        user.accessFunctionality.user_no_salary_system
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_NAME_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                name: `${action.payload.firstName} ${action.payload.middleName} ${action.payload.lastName}`
                            };
                        })
                ]
            };
        }
        case 'USER_EDIT_AS_A_MEMBER': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_as_a_member: action.payload.user_as_a_member
                            };
                        })
                ]
            };
        }
        case 'USER_EDIT_AS_A_STAFF': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_as_a_staff: action.payload.user_as_a_staff
                            };
                        })
                ]
            };
        }
        case 'USER_GENDER_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_gender: action.payload.user_gender
                            };
                        })
                ]
            };
        }
        case 'USER_BLOOD_GROUP_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_blood_group: action.payload.user_blood_group
                            };
                        })
                ]
            };
        }
        case 'USER_DATE_OF_BIRTH_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_date_of_birth: action.payload.user_date_of_birth
                            };
                        })
                ]
            };
        }
        case 'USER_RELIGION_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_religion: action.payload.user_religion
                            };
                        })
                ]
            };
        }
        case 'USER_NATIONALITY_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_nationality: action.payload.user_nationality
                            };
                        })
                ]
            };
        }

        case 'USER_PRESENT_ADDRESS_REGION_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                presentAddress: {
                                    ...user.presentAddress,
                                    region: action.payload.region
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_PRESENT_ADDRESS_CITY_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                presentAddress: {
                                    ...user.presentAddress,
                                    city: action.payload.city
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_PRESENT_ADDRESS_AREA_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                presentAddress: {
                                    ...user.presentAddress,
                                    area: action.payload.area
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_PRESENT_ADDRESS_ADDRESS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                presentAddress: {
                                    ...user.presentAddress,
                                    address: action.payload.address
                                }
                            };
                        })
                ]
            };
        }

        case 'USER_PERMANENT_ADDRESS_REGION_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                permanentAddress: {
                                    ...user.permanentAddress,
                                    region: action.payload.region
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_PERMANENT_ADDRESS_CITY_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                permanentAddress: {
                                    ...user.permanentAddress,
                                    city: action.payload.city
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_PERMANENT_ADDRESS_AREA_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                permanentAddress: {
                                    ...user.permanentAddress,
                                    area: action.payload.area
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_PERMANENT_ADDRESS_ADDRESS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                permanentAddress: {
                                    ...user.permanentAddress,
                                    address: action.payload.address
                                }
                            };
                        })
                ]
            };
        }

        case 'USER_UPLOADING_FILE_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_documentes: [...user.user_documentes, action.payload.file]
                            };
                        })
                ]
            };
        }
        case 'USER_UPLOADING_FILE_DELETE_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_documentes: [
                                    ...user.user_documentes.filter(
                                        (file) => file.id !== action.payload.fileId
                                    )
                                ]
                            };
                        })
                ]
            };
        }

        case 'USER_POSITION_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_position: action.payload.user_position
                            };
                        })
                ]
            };
        }
        case 'USER_JOINING_DATE_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_joining_date: action.payload.user_joining_date
                            };
                        })
                ]
            };
        }

        case 'USER_SALARY_AMOUNT_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    salary_amount: action.payload.salary_amount
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_SALARY_TYPE_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    salary_type: action.payload.salary_type
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_SALARY_DATE_EVERY_DATE_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    salary_every_day: action.payload.salary_every_day,
                                    salary_every_week: '',
                                    salary_every_month: ''
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_SALARY_DATE_EVERY_WEEK_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    salary_every_week: action.payload.salary_every_week,
                                    salary_every_day: '',
                                    salary_every_month: ''
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_SALARY_DATE_EVERY_MONTH_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    salary_every_month: action.payload.salary_every_month,
                                    salary_every_week: '',
                                    salary_every_day: ''
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_NO_SALARY_SYSTEM_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    no_salary_system: action.payload.no_salary_system
                                }
                            };
                        })
                ]
            };
        }

        case 'USER_SALARY_STATUS_UPCOMING_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
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
                                        salary_status_upcoming: false,
                                    }
                                };
                            }


                        })
                ]
            };
        }
        case 'USER_SALARY_STATUS_DUE_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
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
                                        salary_status_due: false,
                                    }
                                };
                            }


                        })
                ]
            };
        }
        case 'USER_SALARY_STATUS_PAID_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => user.user_id !== action.payload.id)
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => user.user_id === action.payload.id)
                        .map((user) => {
                            return {
                                ...user,
                                user_salary: {
                                    ...user.user_salary,
                                    salary_status_upcoming: false,
                                    salary_status_due: false,
                                    salary_status_paid: true
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_SALARY_STATUS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
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

        case 'USER_DASHBORD_ACCESS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                accessFunctionality: {
                                    ...user.accessFunctionality,
                                    user_dashbord: action.payload.user_dashbord,
                                    user_no_access: false
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_ORDER_ACCESS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                accessFunctionality: {
                                    ...user.accessFunctionality,
                                    user_order: action.payload.user_order,
                                    user_no_access: false
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_MEMBER_ACCESS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                accessFunctionality: {
                                    ...user.accessFunctionality,
                                    user_member: action.payload.user_member,
                                    user_no_access: false
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_GROUPS_ACCESS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                accessFunctionality: {
                                    ...user.accessFunctionality,
                                    user_group: action.payload.user_group,
                                    user_no_access: false
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_NOTICE_ACCESS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                accessFunctionality: {
                                    ...user.accessFunctionality,
                                    user_notice: action.payload.user_notice,
                                    user_no_access: false
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_STAFF_AND_PARTNER_ACCESS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                accessFunctionality: {
                                    ...user.accessFunctionality,
                                    user_staff_and_partner: action.payload.user_staff_and_partner,
                                    user_no_access: false
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_EXPENCESS_ACCESS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                accessFunctionality: {
                                    ...user.accessFunctionality,
                                    user_expencess: action.payload.user_expencess,
                                    user_no_access: false
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_ACCOUNT_BALANCE_ACCESS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                accessFunctionality: {
                                    ...user.accessFunctionality,
                                    user_account_balance: action.payload.user_account_balance,
                                    user_no_access: false
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_CUSTOMER_REVIEW_ACCESS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                accessFunctionality: {
                                    ...user.accessFunctionality,
                                    user_customer_review: action.payload.user_customer_review,
                                    user_no_access: false
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_COMPANY_HOLIDAY_ACCESS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                accessFunctionality: {
                                    ...user.accessFunctionality,
                                    user_company_holiday: action.payload.user_company_holiday,
                                    user_no_access: false
                                }
                            };
                        })
                ]
            };
        }
        case 'USER_NO_ACCESS_ACCESS_EDIT': {
            return {
                user: [
                    ...state.user
                        .filter((user) => {
                            return user.user_id !== action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user
                            };
                        }),
                    ...state.user
                        .filter((user) => {
                            return user.user_id === action.payload.id;
                        })
                        .map((user) => {
                            return {
                                ...user,
                                accessFunctionality: {
                                    user_dashbord: false,
                                    user_staff_and_partner: false,
                                    user_order: false,
                                    user_account_balance: false,
                                    user_expencess: false,
                                    user_customer_review: false,
                                    user_company_holiday: false,
                                    user_member: false,
                                    user_group: false,
                                    user_notice: false,
                                    user_no_access: action.payload.user_no_access
                                }
                            };
                        })
                ]
            };
        }

        default:
            return state;
    }
}
