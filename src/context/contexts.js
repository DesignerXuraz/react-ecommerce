import React, { Component, Fragment } from "react";
import { LinkData } from "./linkData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 1,
    Links: LinkData
  };

  //Sidebar
  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  };
  //Cart
  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    });
  };

  //Open Cart
  cartOpen = () => {
    this.setState({
      cartOpen: true
    });
  };

  //Close Cart
  cartClose = () => {
    this.setState({
      cartOpen: false
    });
  };

  render() {
    return (
      <Fragment>
        <ProductContext.Provider
          value={{
            ...this.state,
            handleSidebar: this.handleSidebar,
            handleCart: this.handleCart,
            cartOpen: this.cartOpen,
            cartClose: this.cartClose
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </Fragment>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
