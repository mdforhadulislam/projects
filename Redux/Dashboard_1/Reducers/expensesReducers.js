import dayjs from 'dayjs';

const initialState = {
    expenses: [],
    monthIndex: dayjs().month()
};
const expensesReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_EXPENSES': {
            // const findItem = state.expenses.find((item) => item.id === action.id.id);
            // if (findItem) {
            //   let cartIndex = state.expenses.indexOf(findItem);

            //   let newArray = [...state.expenses];
            //   newArray[cartIndex] = {
            //     ...newArray[cartIndex],
            //     quantity: findItem.quantity + 1,
            //   };
            //   const newCart = {
            //     ...state,
            //     expenses: newArray,
            //   };

            //   return newCart;
            // } else {}
            const newCart = {
                ...state,
                expenses: [...state.expenses, action.id]
            };
            return newCart;
        }
        case 'REMOVE_FROM_EXPENSES': {
            const newRemoveCart = {
                ...state,
                expenses: state.expenses.filter((pd) => pd.id !== action.payload)
            };
            return newRemoveCart;
        }
        case 'UPDATE_TO_EXPENSES': {
            const filtered = state.expenses.filter((post) => post.id !== action.id);

            const newEdit = {
                id: action.id,
                name: action.name,
                date: action.date,
                amount: action.amount
            };

            const newCart = {
                ...state,
                expenses: [...filtered, newEdit]
            };
            return newCart;
        }
        case 'MONTH_INDEX_ADD': {
            const newCart = {
                ...state,
                monthIndex: state.monthIndex + 1
            };
            return newCart;
        }
        case 'MONTH_INDEX_REMOVE': {
            const newCart = {
                ...state,
                monthIndex: state.monthIndex - 1
            };
            return newCart;
        }

        default:
            return state;
    }
};
export default expensesReducers;
