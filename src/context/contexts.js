import React, { Component, Fragment } from "react";
import { LinkData } from "./linkData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 1,
    Links: LinkData,
    cart: []
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
  OpenCart = () => {
    this.setStatOpene({ t: true });
  };

  //Close Cart
  CloseCart = () => {
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
            OpenCart: this.OpenCart,
            CloseCart: this.CloseCart
          }}
        >
          {this.props.children} {/* Whole App i.e app comopnent*/}
        </ProductContext.Provider>
      </Fragment>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
