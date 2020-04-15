import React, { Component } from 'react';

class CartItem extends Component {
	render(){
		var { cartItem } = this.props;
		return (
			<tr>
				<th scope="row">
					<img src={cartItem.product.imgUrl}
						alt="" className="img-fluid z-depth-0" />
				</th>
				<td>
					<h5><strong>{cartItem.product.name}</strong></h5>
				</td>
				<td>{cartItem.product.price}</td>
				<td className="center-on-small-only">
					<span className="qty">{cartItem.quantity}</span>
					<div className="btn-group radio-group" data-toggle="buttons">
						<label 
							className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
							onClick={ () => this.onUpdateProductInCart(cartItem.product.id, -1) }
							>
							<a href="/#">—</a>
						</label>
						<label 
							className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
							onClick={ () => this.onUpdateProductInCart(cartItem.product.id, 1) }
						>
							<a href="/#">+</a>
						</label>
					</div>
				</td>
				<td>{ this.showSubTotal(cartItem.product.price, cartItem.quantity)}$</td>
				<td>
					<button 
					type="button" 
					className="btn btn-sm btn-primary waves-effect waves-light" 
					data-toggle="tooltip" 
					data-placement="top"
					title="" 
					data-original-title="Remove item" 
					onClick = { () => this.onDeleteItem(cartItem.product.id) }
					>X</button>
				</td>
			</tr>
		);
	}

	onDeleteItem = (id) => {
		this.props.onDeleteItem(id);
	}

	onUpdateProductInCart = (id, quantity) => {
		this.props.onUpdateProductInCart(id, quantity);
	}

	showSubTotal = (price, quantity) => {

		return price*quantity;
	}
}

export default CartItem;
