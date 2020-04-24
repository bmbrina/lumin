import React, { Component } from 'react';
import './style.scss';

export default class Header extends Component {
	constructor(props) {
    super(props);
    
    this.showCart = this.showCart.bind(this);
  }
  
  showCart() {
    console.log('show cart');
  }

	render() {
    const { counter } = this.props;
		return (
      <header className="header">
        <div className="header__container container">
          <img className="header__logo" src="https://cdn.shopify.com/s/files/1/0044/1237/5107/files/black.font.sipmle_360x.png?v=1555959070" alt="Lumin" />
          <button className="header__cart" onClick={this.showCart}>
            <img className="header__cart-icon" src="https://cdn.shopify.com/s/files/1/0044/1237/5107/files/Image_1_2x_5f1251f7-a674-4496-92be-9cca5561534e.png?v=1581352198" alt="" />
            <span className="header__cart-counter">{counter}</span>
          </button>
        </div>
      </header>
    );
	}
}

Header.defaultProps = {
	counter: 0
};