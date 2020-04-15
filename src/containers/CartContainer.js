import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Message from './../constants/Message'
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import Cart from './../components/Cart';
import { actDeleteProductInCart, actUpdateProductInCart } from './../actions/index';

class CartContainer extends Component {
	render(){
        var { cart } = this.props;
		return (
            <Cart>
                { this.showCartItems(cart) }
                <CartResult cart={cart} />
            </Cart>
		);
    }

    showCartItems = cart => {
        if(!cart.length) return <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        var { onDeleteItemInCart, onUpdateProductInCart } = this.props;
		var ret = cart.map((item, index) => {
            return <CartItem 
                    key={ index } 
                    cartItem={item} 
                    quantity={item.quantity} 
                    onDeleteItem={ onDeleteItemInCart }
                    onUpdateProductInCart={ onUpdateProductInCart }
                    />
		})
		return ret;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                imgUrl: PropTypes.string.isRequired,
                description: PropTypes.string,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteItemInCart: (id) => {
            dispatch(actDeleteProductInCart(id));
        },
        onUpdateProductInCart: (id, quantity) => {
            dispatch(actUpdateProductInCart(id, quantity));
        }
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
