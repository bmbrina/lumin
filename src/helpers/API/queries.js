import gql from 'graphql-tag'

const CURRENCY = gql`
  query Currency {
    currency
  }
`

const PRODUCTS = gql`
  query Products($currency: Currency) {
    products {
      id,
      title,
      image_url,
      price(currency: $currency)
    }
  }
`

export {
  CURRENCY,
  PRODUCTS
}