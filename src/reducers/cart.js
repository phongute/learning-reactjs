import * as types from './../constants/ActionTypes';

var initState = JSON.parse(localStorage.getItem('cart')) || [];

const cart = (state = initState, action) => {
    var itemIndex = -1;
    switch(action.type){
        case types.ADD_TO_CART:
            var { product, quantity } = action;

            itemIndex = state.findIndex(item => item.product.id === product.id);
            if(itemIndex === -1){
                state.push({
                    product: product,
                    quantity: quantity
                });
            }else{
                state[itemIndex].quantity+=1;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            var { id } = action;
            itemIndex = state.findIndex(item => item.product.id === id);

            if(itemIndex !== -1) state.splice(itemIndex, 1);

            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            var { id, quantity } = action;
            console.log(action);
            itemIndex = state.findIndex(item => item.product.id === id);

            state[itemIndex].quantity+=quantity;

            if(state[itemIndex].quantity === 0) state.splice(itemIndex, 1);

            localStorage.setItem('cart', JSON.stringify(state));

            return [...state];
        default: return [...state];
    }
}

export default cart;