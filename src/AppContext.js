import React, { Component } from "react";
const AppContext = React.createContext();

class AppContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCart: false,
      subtotal: 0.00
    };

    this.setCartState = this.setCartState.bind(this);
  }

  setCartState() {
    this.setState(prevState => {
      return {
        showCart: !prevState.showCart
      };
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{ 
          cart: this.state,
          setCartState: this.setCartState
         }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export {
  AppContext,
  AppContextProvider
};
