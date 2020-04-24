import React, { Component } from 'react';
import './style.scss';

export default class Item extends Component {
	constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    console.log('add to cart');
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
     <div className="item" key={id}>
      <div  className="item__img-container">
        <img src={image_url} alt={title}/>
      </div>
      <h3 className="item__title">{title}</h3>
      <p className="item__price">From ${fixedPrice}</p>
      <button className="btn btn-primary item__action" onClick={this.addToCart}>Add to Cart</button>
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