import React, { Component } from "react"
const AppContext = React.createContext()

class AppContextProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showCart: false,
      subtotal: 0.00,
      products: {},
      currency: 'USD'
    }

    this.setCartState = this.setCartState.bind(this)
    this.setCurrency = this.setCurrency.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.removeProduct = this.removeProduct.bind(this)
    this.updateProductQty = this.updateProductQty.bind(this)
    this.calculateSubtotal = this.calculateSubtotal.bind(this)
  }

  setCartState() {
    this.setState(prevState => {
      return {
        showCart: !prevState.showCart
      }
    })
  }

  setCurrency(currency) {
    this.setState(() => {
      return {
        currency
      }
    })
  }

  addProduct(product) {
    const { id } = product

    this.setState((prevState) => {
      return {
        products: {
          ...prevState.products,
          [id]: {
            ...product,
            quantity: 1
          }
        }
      }
    }, () => {
      this.calculateSubtotal()
      this.setCartState()
    })
  }

  removeProduct(id) {
    const { products } = this.state
    delete products[id]

    this.setState(() => {
      return {
        products
      }
    }, () => {
      this.calculateSubtotal()
    })
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
          updateProductQty: this.updateProductQty,
          calculateSubtotal: this.calculateSubtotal
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
