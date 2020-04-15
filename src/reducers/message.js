import * as Message from './../constants/Message';
import * as types from './../constants/ActionTypes';

var initState = Message.MSG_WELCOME;

const message = (state = initState, action) => {
    switch(action.type){
        case types.ADD_TO_CART:
            state = Message.MSG_ADD_TO_CART_SUCSSESS;
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            state = Message.MSG_DELETE_PRODUCT_IN_CART_SUCSSESS;
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            state = Message.MSG_UPDATE_CART_SUCSSESS;
            return [...state];
        default: return [...state];
    }
}

export default message;