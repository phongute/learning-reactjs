import * as types from './../constants/ActionTypes';

export const actAddToCart = (product, quantity) =>{
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDeleteProductInCart = (id) =>{
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        id
    }
}

export const actUpdateProductInCart = (id, quantity) =>{
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        id,
        quantity
    }
}