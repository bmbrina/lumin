import React, { Component } from 'react';
import './style.scss';

export default class Item extends Component {
	constructor(props) {
    super(props);

    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    console.log('remove item');
  }

	render() {
    const { data } = this.props;
    const {
      id,
      title,
      image_url,
      price,
    } = data;

    const fixedPrice = Number(price).toFixed(2);

		return (
     <div className="cart-item" key={id}>
       <button className="cart-item__close" onClick={this.removeItem}>x</button>
       <div className="cart-item__desc">
        <h3 className="cart-item__title">{title}</h3>
        <div>
          <p className="cart-item__price">${fixedPrice}</p>
        </div>
       </div>
        <div  className="cart-item__img">
          <img src={image_url} alt={title}/>
        </div>
     </div>
    );
	}
}

Item.defaultProps = {
  product: {
    id: 1,
    title: 'Age Management Collection',
    image_url: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png',
    price: 48.00,
    product_options: []
  }
};