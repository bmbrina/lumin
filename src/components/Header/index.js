import React, { Component } from 'react'
import { AppContext } from "../../context/AppContext"
import './style.scss'

export default class Header extends Component {  
  static contextType = AppContext

	render() {
    const { cart, setCartState } = this.context
    const  { products } = cart
    const counter = Object.keys(products).length

		return (
      <header className="header">
        <div className="header__container container">
          <img className="header__logo" src="//cdn.shopify.com/s/files/1/0044/1237/5107/files/black.font.sipmle_360x.png?v=1555959070" alt="Lumin" />
          <button className="header__cart" onClick={setCartState}>
            <img className="header__cart-icon" src="//cdn.shopify.com/s/files/1/0044/1237/5107/files/Image_1_2x_5f1251f7-a674-4496-92be-9cca5561534e.png?v=1581352198" alt="" />
            <span className="header__cart-counter">{counter}</span>
          </button>
        </div>
      </header>
    )
	}
}