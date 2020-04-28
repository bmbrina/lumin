import React, { Component } from "react"
import { PRODUCTS_PRICES } from "../helpers/API/queries"
const AppContext = React.createContext()

class AppContextProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showCart: false,
      subtotal: 0.00,
      products: {},
      currency: 'USD',
      currencyError: false
    }

    this.setCartState = this.setCartState.bind(this)
    this.setCurrency = this.setCurrency.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.removeProduct = this.removeProduct.bind(this)
    this.updateProductQty = this.updateProductQty.bind(this)
    this.updateProductPrice = this.updateProductPrice.bind(this)
  }

  setCartState() {
    this.setState(prevState => {
      return {
        showCart: !prevState.showCart
      }
    })
  }

  setCurrency(currency) {
    const { client } = this.props
      client.query({
        query: PRODUCTS_PRICES,
        variables: { currency },
        errorPolicy: 'all'
      }).then( response => {
        if (response.errors) {
          this.setState(() => {
            return {
              currencyError: true
            }
          })
        } else {
          this.setState(() => {
            return {
              currency,
              currencyError: false
            }
          }, () => {
            this.updateProductPrices()
          })
        }
      })
  }

  addProduct(product) {
    const { products } = this.state
    const { id } = product
    const item = this.updateProductPrice(product)
    const quantity = products[id] ? ++products[id].quantity : 1
     
    this.setState((prevState) => {
      return {
        products: {
          ...prevState.products,
          [id]: {
            ...item,
            quantity
          }
        }
      }
    }, () => {
      this.calculateSubtotal()
      this.setCartState()
    })
  }

  updateProductPrice(item) {
    const { currency } = this.state
    const { client } = this.props
    const { data } = client.cache.data
    const priceString = `price({"currency":"${currency}"})`
    const { id, __typename } = item
    const price = data[`${__typename}:${id}`][priceString]

    return {
      ...item,
      price
    }
  }

  setProductsState(products) {
    this.setState(() => {
      return {
        products
      }
    }, () => {
      this.calculateSubtotal()
    })
  }

  removeProduct(id) {
    const { products } = this.state
    delete products[id]
    this.setProductsState(products)
  }

  updateProductPrices() {
    const { client } = this.props
    const  { products, currency } = this.state
    const { data } = client.cache.data
  
    Object.values(products).forEach(item => {
      const priceString = `price({"currency":"${currency}"})`
      const { id, __typename } = item
      const price = data[`${__typename}:${id}`][priceString]

      products[id] = {
        ...item,
        price
      }
    })
    this.setProductsState(products)
  }

  updateProductQty(operation, id) {
    const product = this.state.products[id]
    let { quantity } = product

    switch(operation) {
      case 'increase':
        quantity++
        break
      case 'decrease':
        quantity--
        break
      default:
        break
    }

    if (quantity < 1) {
      this.removeProduct(id)
    } else {
      this.setState((prevState) => {
        return {
          products: {
            ...prevState.products,
            [id]: {
              ...product,
              quantity
            }
          }
        }
      }, () => {
        this.calculateSubtotal()
      })
    }
  }

  calculateSubtotal() {
    const { products } = this.state
    const subtotal = Object.values(products).reduce((acc, obj) => acc + (obj.price * obj.quantity), 0)

    this.setState(() => {
      return {
        subtotal
      }
    })
  }

  render() {
    return (
      <AppContext.Provider
        value={{ 
          cart: this.state,
          setCartState: this.setCartState,
          setCurrency: this.setCurrency,
          addProduct: this.addProduct,
          removeProduct: this.removeProduct,
          updateProductQty: this.updateProductQty
         }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export {
  AppContext,
  AppContextProvider
}
