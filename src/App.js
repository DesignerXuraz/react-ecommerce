import React, { Component, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

//Pages
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/DefaultPage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";

//Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* Navbar,Sidebar,SideCart*/}
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
