import React, { Component } from 'react';
import Item from '../Item';
import './style.scss';

export default class Products extends Component {
	constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }
  
  renderProducts() {
    const { products } = this.props;

    return products.map(item => {
      return (
        <Item 
          data={item}
          key={item.id}
        />
      );
    });
  }

	render() {
    const products =  this.renderProducts();

		return (
     <section className="products">
       <div className="products__container container">
        {products}
       </div>
     </section>
    );
	}
}

Products.defaultProps = {
  products: [
    {
      id: 1,
      title: 'Age Management Collection',
      image_url: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png',
      price: 48.00,
      product_options: []
    },
    {
      id: 2,
      title: 'Age Management Collection',
      image_url: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png',
      price: 48.00,
      product_options: []
    },
    {
      id: 3,
      title: 'Age Management Collection',
      image_url: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png',
      price: 48.00,
      product_options: []
    },
    {
      id: 4,
      title: 'Age Management Collection',
      image_url: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png',
      price: 48.00,
      product_options: []
    }
  ]
};