export const addToExpenses = (id) => {
    return {
        type: 'ADD_TO_EXPENSES',
        id
    };
};
export const updateToExpenses = (id, date, name, amount) => {
    return {
        type: 'UPDATE_TO_EXPENSES',
        id,
        date,
        name,
        amount
    };
};
export const removeFromExpenses = (payload) => {
    return {
        type: 'REMOVE_FROM_EXPENSES',
        payload
    };
};
export const addQuantityToCart = (id) => {
    return {
        type: 'ADD_QUANTITY_TO_CART',
        id
    };
};
export const removeQuantityToCart = (id) => {
    return {
        type: 'REMOVE_QUANTITY_TO_CART',
        id
    };
};

export const allProductAdd = (id) => {
    return {
        type: 'ADD_PRODUCT',
        id
    };
};
export const monthIndexAdd = (payload) => {
    return {
        type: 'MONTH_INDEX_ADD',
        payload
    };
};
export const monthIndexRemove = (payload) => {
    return {
        type: 'MONTH_INDEX_REMOVE',
        payload
    };
};
