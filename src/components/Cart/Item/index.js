import React, { Component } from 'react'
import { AppContext } from "../../../context/AppContext"
import Counter from '../../Shared/Counter'
import { fixedNumber } from '../../../helpers/utilities'
import './style.scss'

export default class Item extends Component {
	constructor(props) {
    super(props)

    this.removeItem = this.removeItem.bind(this)
    this.increaseQty = this.increaseQty.bind(this)
    this.decreaseQty = this.decreaseQty.bind(this)
  }

  static contextType = AppContext

  removeItem() {
    const { removeProduct } = this.context
    const { id } = this.props

    removeProduct(id);
  }

  increaseQty() {
    const { updateProductQty } = this.context
    const { id } = this.props

    updateProductQty('increase', id)
  }

  decreaseQty() {
    const { updateProductQty } = this.context
    const { id } = this.props

    updateProductQty('decrease', id)
  }

	render() {
    const { data } = this.props
    const {
      id,
      title,
      image_url,
      price,
      quantity
    } = data

    const totalPrice = quantity * price

		return (
     <div className="cart-item" key={id}>
       <button className="cart-item__close" onClick={this.removeItem}>x</button>
       <div className="cart-item__desc">
        <h3 className="cart-item__title">{title}</h3>
        <div className="cart-item__qty">
          <Counter 
            increaseEvent={this.increaseQty}
            decreaseEvent={this.decreaseQty}
            count={quantity}
          />
          <p className="cart-item__price">${fixedNumber(totalPrice)}</p>
        </div>
       </div>
        <div  className="cart-item__img">
          <img src={image_url} alt={title}/>
        </div>
     </div>
    )
	}
}