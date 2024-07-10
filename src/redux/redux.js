const initialState = {
    products: [],
    orders: []
};

const fruitReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_PRODUCTS':
            return state.products = action.payload;
        default:
            return state;
    }
};
export default fruitReducer;