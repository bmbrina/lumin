import React, { Component } from "react"
const AppContext = React.createContext()

class AppContextProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showCart: false,
      subtotal: 0.00,
      products: [],
      currency: 'USD'
    }

    this.setCartState = this.setCartState.bind(this)
    this.setCurrency = this.setCurrency.bind(this)
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

  render() {
    return (
      <AppContext.Provider
        value={{ 
          cart: this.state,
          setCartState: this.setCartState,
          setCurrency: this.setCurrency
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
