import React from 'react';
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import List from './List';
import './style.scss';


const PRODUCTS = gql`
  query Products {
    products {
      id,
      title,
      image_url,
      price(currency: USD)
    }
  }
`

export default function Products() {  
  const { data, loading, error } = useQuery(PRODUCTS);

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  return (
    <section className="products">
      <div className="products__container container">
        <List
          products={data.products}
        />
      </div>
    </section>
  );
}