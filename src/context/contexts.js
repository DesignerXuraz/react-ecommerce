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
    cart: [], //ProductCount,Total
    cartItems: 0,
    cartTotal: 0,
    cartSubTotal: 0,
    cartTax: 0,
    storeProducts: [],
    featuredProducts: [],
    singleProduct: [],
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

    this.setState(
      {
        storeProducts, //Formatted Product
        filteredProducts: storeProducts,
        featuredProducts: onlyfeatured,
        cart: this.getStorageCart(), //get cartItem from local storage
        singleProduct: this.getStorageProduct(), //get singleProduct from local storage
        loading: false
      },
      () => {
        this.addTotals();
      }
    );
  };

  //get product from local storage
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };

  //get cartItem from local storage
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      //LS ma item xa ki nai vanera check gareko.
      cart = JSON.parse(localStorage.getItem("cart")); //xa vane convert back to array
    } else {
      //Ls ma item xaina vane
      cart = [];
    }
    return cart;
  };

  //get totals
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total; //getting item total & adding to subTotal;
      cartItems += item.ProductCount;
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = tax + subTotal;
    total = parseFloat(total.toFixed(2));
    return {
      //getTotals method return
      subTotal,
      cartItems,
      tax,
      total
    };
  };

  //add totals
  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartSubTotal: totals.subTotal,
      cartItems: totals.cartItems,
      cartTax: totals.tax,
      cartTotal: totals.total
    });
  };
  //syncStorage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart)); //converting to string
  };

  //add To Cart
  addToCart = id => {
    let Cart = [...this.state.cart]; //yesma cartItem add garne
    let Products = [...this.state.storeProducts];

    //Just Cart ma product xa ki nai vanera check gareko...
    //Hamle pass gareko id ra tyo id match garyo vane cart ma product xa else no.
    let tempCartItem = Cart.find(cartitem => cartitem.id === id);

    if (!tempCartItem) {
      //if no product in cart
      tempCartItem = Products.find(item => item.id === id); //instead of looking @ cart look in product
      let total = tempCartItem.price; //price jati xa total teti..
      let cartItem = { ...tempCartItem, ProductCount: 1, total }; //count = number of products
      Cart = [...Cart, cartItem]; //Initially cart was empty so we updated cart
    } else {
      tempCartItem.ProductCount++;
      tempCartItem.total = tempCartItem.ProductCount * tempCartItem.price;
      tempCartItem.total = parseFloat(tempCartItem.total.toFixed(2));
    }
    this.setState(
      () => {
        return { cart: Cart };
      },
      () => {
        this.addTotals();
        this.OpenCart();
        this.syncStorage(); //adding cartItem to LS
      }
    );
  };

  //Local storage ma single product haleko
  syncSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: { ...product },
      loading: false
    });
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
    this.setState({ cartOpen: true });
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
            syncSingleProduct: this.syncSingleProduct
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
