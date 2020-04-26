import React, { Component } from 'react'
import { AppContext } from "../../context/AppContext"
import Item from './Item'
import Button from '../Shared/Button'
import Currency from './Currency'
import { fixedNumber } from '../../helpers/utilities'
import './style.scss'

export default class Cart extends Component {
  constructor(props) {
    super(props)

    this.updateCurrency = this.updateCurrency.bind(this)
  }

  static contextType = AppContext

  renderProducts() {
    const { products } = this.props

    return products.map(item => {
      return (
        <Item 
          data={item}
          key={item.id}
        />
      )
    })
  }

  updateCurrency(e) {
    const { setCurrency } = this.context
    const selectedCurrency = e.target.value
    setCurrency(selectedCurrency)
  }
  
	render() {
    const { cart, setCartState } = this.context
    const { showCart, subtotal } = cart
    const products =  this.renderProducts()

		return (
      <section className={`cart ${showCart ? 'cart--open' : ''}`} >
        <div className="cart__overlay"></div>
        <div className="cart__content">
          <div className="cart__header">
            <div className="row">
              <div className="col-4">
                <button className="cart__close" onClick={setCartState}>
                  <img src="//cdn.shopify.com/s/files/1/0044/1237/5107/files/down.png?v=1583510959" alt="" />
                </button>
              </div>
              <div className="col-4">
                <h1 className="cart__title">Your Cart</h1>
              </div>
              <div className="col-4"></div>
            </div>
            <Currency 
              updateCurrency={this.updateCurrency}
            />
          </div>
          <div className="cart__products">
            {products}
          </div>
          <div className="cart__footer">
            <div className="cart__subtotal">
              <span>Subtotal</span>
              <span>${fixedNumber(subtotal)}</span>
            </div>
            <Button
              text="Make this a Subscription (Save 20%)"
              classList="btn-secondary btn--alt cart__btn"
            />
            <Button
              text="Proceed to Checkout"
              classList="btn-primary btn--alt cart__btn"
            />
          </div>
        </div>
      </section>
    )
	}
}

Cart.defaultProps = {
  products: [
    {
      id: 1,
      title: 'Age Management Collection',
      image_url: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png',
      price: 48.00
    },
    {
      id: 2,
      title: 'Age Management Collection',
      image_url: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png',
      price: 48.00,
    },
    {
      id: 3,
      title: 'Age Management Collection',
      image_url: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png',
      price: 48.00
    },
    {
      id: 4,
      title: 'Age Management Collection',
      image_url: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png',
      price: 48.00
    },
    {
      id: 5,
      title: 'Age Management Collection',
      image_url: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png',
      price: 48.00
    },
    {
      id: 6,
      title: 'Age Management Collection',
      image_url: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png',
      price: 48.00
    }
  ]
}