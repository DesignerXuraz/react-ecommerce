import React, { Component, Fragment } from "react";
import { LinkData } from "./linkData";
import { socialData } from "./socialData";

import { items } from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    Links: LinkData,
    socialLinks: socialData,
    cart: [],
    cartItems: 0,
    cartTotal: 0,
    cartSubTotal: 0,
    cartTax: 0,
    storeProducts: [],
    featuredProducts: [],
    singleProducts: [],
    filteredProducts: [],
    loading: false
  };

  componentDidMount() {
    //later from contentful

    //Items i.e from local data
    this.setProducts(items);
  }

  //Generally this method is just to destructure the blueprint of data
  setProducts = products => {
    // console.log("before", products);
    let storeProducts = products.map(product => {
      const id = product.sys.id;
      const image = product.fields.image.fields.file.url;
      const Allproduct = { id, image, ...product.fields, image }; //fields ma vako sabai kura chaiyo
      return Allproduct; //
    });
    console.log("After", storeProducts);
    let onlyfeatured = storeProducts.filter(item => item.featured === true); //formatted rooms lai filter garne honi so storeProducts.
    console.log("onlyFeat", onlyfeatured);

    this.setState({
      storeProducts, //Formatted Product
      filteredProducts: storeProducts,
      featuredProducts: onlyfeatured,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    });
  };

  //get product from local storage
  getStorageProduct = () => {
    return {};
  };

  //get cart from local storage
  getStorageCart = () => {
    return [];
  };

  //get totals
  getTotals = () => {};

  //syncStorage
  syncStorage = () => {};

  //add To Cart
  addToCart = id => {
    console.log(id);
  };

  //setSingleProduct
  setSingleProduct = id => {
    console.log(id);
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
    console.log("state", this.state);
    return (
      <Fragment>
        <ProductContext.Provider
          value={{
            ...this.state,
            handleSidebar: this.handleSidebar,
            handleCart: this.handleCart,
            OpenCart: this.OpenCart,
            CloseCart: this.CloseCart,
            addToCart: this.addToCart,
            setSingleProduct: this.setSingleProduct
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
