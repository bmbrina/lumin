import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import List from '../../components/Products/List'
import Loader from '../../components/Shared/Loader'
import { PRODUCTS } from '../../helpers/API/queries'
import './style.scss'

export default function Products() {  
  const { data, loading, error } = useQuery(PRODUCTS, {
    variables: { currency: 'USD' }
  })

  if (loading) {
    return <Loader show={loading} text="Loading products..." />
  }

  if (error) {
    return <Loader text="Oops, something went wrong!" classList="error" />
  }

  return (
    <section className="products">
      <div className="products__container container">
        <List
          products={data.products}
        />
      </div>
    </section>
  )
}