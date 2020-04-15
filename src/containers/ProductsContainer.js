import React, { Component } from 'react';
import Products from './../components/Products';
import Product from './../components/Product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actAddToCart } from './../actions/index';

class ProductsContainer extends Component {
	render(){
        var { products } = this.props;
		return (
            <Products>
                { this.showProducts(products) }
            </Products>
		);
    }
    
    showProducts = (products) => {
		if(!products.length) return null;
        var { onAddToCart } = this.props;
		var ret = products.map((product, index) => {
            return <Product 
                        product={product} 
                        key={ product.id }
                        onAddToCart = {onAddToCart}
                    />
		})
		return ret;
	}
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            imgUrl: PropTypes.string.isRequired,
            description: PropTypes.string,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}
const mapStateToProps = state => {
	return {
		products: state.products
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
