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
    cartItems: 0, //ProductCount
    cartTotal: 0,
    cartSubTotal: 0,
    cartTax: 0,
    storeProducts: [], //All formated data
    featuredProducts: [],
    singleProduct: {},
    loading: false,
    filteredProducts: [],
    search: "", //form name wala search
    price: 0,
    min: 0,
    max: 0,
    company: "all",
    shipping: false
  };

  componentDidMount() {
    //later from contentful

    //Items i.e from local data
    this.setProducts(items);
    //yesma Allproduct  aunxa bcz body ma tehi return gareko xa.
  }

  //Generally this method is just to destructure the blueprint of data
  setProducts = products => {
    //console.log("before", products); //Unformatted
    let storeProducts = products.map(product => {
      //yoh func haina just var ma store gareko ho.
      const id = product.sys.id;
      const image = product.fields.image.fields.file.url;
      const Allproduct = { id, ...product.fields, image }; //fields ma vako sabai kura chaiyo
      return Allproduct; //
    });
    console.log("After", storeProducts);
    let onlyfeatured = storeProducts.filter(item => item.featured === true); //formatted rooms lai filter garne honi so storeProducts.
    console.log("onlyFeat", onlyfeatured);

    let maxPrice = Math.max(...storeProducts.map(item => item.price));
    //console.log('max price', maxPrice);

    this.setState(
      {
        storeProducts, //Not function just var i.e stores
        filteredProducts: storeProducts,
        featuredProducts: onlyfeatured,
        cart: this.getStorageCart(), //get cartItem from local storage
        loading: false,
        price: maxPrice,
        max: maxPrice
      },
      () => {
        this.addTotals();
      }
    );
  };

  //add To Cart
  addToCart = id => {
    let Cart = [...this.state.cart]; //we need individual elements so ...
    let Products = [...this.state.storeProducts];

    //Just Cart ma product xa ki nai vanera check gareko...
    //Hamle pass gareko id ra tyo id match garyo vane cart ma product xa else no.
    let tempCartItem = Cart.find(cartitem => cartitem.id === id);
    // console.log("checking cart", tempCartItem); output=undefine

    if (!tempCartItem) {
      //Milena Undefine vane yesari halne
      tempCartItem = Products.find(item => item.id === id); //instead of looking @ cart look in product
      //console.log("i am temp", tempCartItem);
      let total = tempCartItem.price; //price jati xa total teti..
      let cartItem = { ...tempCartItem, ProductCount: 1, total }; //count = number of products
      //console.log("final", cartItem);//ProductCount,total thapera
      Cart = [...Cart, cartItem]; //Initially cart was empty tara product hale paxi purano ma naya thapne honi..
      console.log(Cart);
    } else {
      //Milyo vane yesari halne
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

  //syncStorage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart)); //converting to string
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
      subTotal += item.total; //agi bhakhar add gareko total
      cartItems += item.ProductCount; //agi bhakhar add gareko productCount
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

  //Single item for single page
  getSingleItem = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    this.setState({
      singleProduct: { ...product }
    });
  };

  //Cart functionality

  //increment
  increment = id => {
    let tempCart = [...this.state.cart];
    const tempCartItem = tempCart.find(item => item.id === id);
    //console.log(tempCartItem);
    tempCartItem.ProductCount++;
    tempCartItem.total = tempCartItem.ProductCount * tempCartItem.price;
    tempCartItem.total = parseFloat(tempCartItem.total.toFixed(2));

    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
        this.syncStorage(); //adding cartItem to LS
      }
    );
  };
  //decrement
  decrement = id => {
    let tempCart = [...this.state.cart];
    const tempCartItem = tempCart.find(item => item.id === id);
    //console.log(tempCartItem);

    tempCartItem.ProductCount = tempCartItem.ProductCount - 1;
    if (tempCartItem.ProductCount === 0) {
      return this.removeItem(id);
    }
    tempCartItem.total = tempCartItem.ProductCount * tempCartItem.price;
    tempCartItem.total = parseFloat(tempCartItem.total.toFixed(2));

    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
        this.syncStorage(); //adding cartItem to LS
      }
    );
  };
  //remove item
  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id); //id milyo vane dlt na mile keep it
    this.setState(
      {
        cart: [...tempCart]
      },
      () => {
        this.addTotals();
        this.syncStorage(); //adding cartItem to LS
      }
    );
  };
  //clear cart
  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.addTotals();
        this.syncStorage(); //adding cartItem to LS
      }
    );
  };

  //Filter
  handleChange = e => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    // console.log(`Name:${name},Value:${value}`);

    this.setState(
      {
        [name]: value
      },
      this.filterData
    );
  };

  filterData = () => {
    const { storeProducts, price, company, shipping, search } = this.state;
    //all the products
    let tempProducts = [...storeProducts];

    //filter based on company
    if (company !== "all") {
      //value !== all than j value xa tyo store gara
      //company vaneko value ma vako so if value !== all than give me value
      tempProducts = tempProducts.filter(
        product => product.company === company
      );
    }

    //filter by price..
    //data ma vako price maxPrice vand less or equal hunu paryo
    let tempPrice = parseInt(price); //string to number
    tempProducts = tempProducts.filter(product => product.price <= tempPrice);

    //filter by checkbox
    if (shipping) {
      tempProducts = tempProducts.filter(
        product => product.freeShipping === true
      );
    }

    //filter by text i.e typing..
    if (search.length > 0) {
      //User is typing
      tempProducts = tempProducts.filter(product => {
        let tempSearch = search.toLowerCase(); //user type to lowercase;
        let tempTitle = product.title.toLowerCase().slice(0, search.length); //Not full title but part of title whatever user is typing...
        if (tempSearch === tempTitle) {
          return product;
        }
      });
    }

    //Updating states.
    this.setState({ filteredProducts: tempProducts });
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
            getSingleItem: this.getSingleItem,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart,
            handleChange: this.handleChange
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
