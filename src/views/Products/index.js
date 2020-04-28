import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import List from '../../components/Products/List'
import Loader from '../../components/Shared/Loader'
import { AppContext } from '../../context/AppContext'
import { PRODUCTS } from '../../helpers/API/queries'
import './style.scss'

export default function Products() {  
  const { cart } = useContext(AppContext)
  const currency = 'USD' // Replace by the one in cart if you want to update the products list prices
  const { data, loading, error } = useQuery(PRODUCTS, {
    variables: { currency }
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