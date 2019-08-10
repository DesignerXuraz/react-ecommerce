import React, { Fragment } from "react";
import Cart from "../components/CartPage/Cart";
import Hero from "../components/Hero";
import storeBcg from "../images/storeBcg.jpeg";
const CartPage = () => {
  return (
    <Fragment>
      {/* <Hero img={storeBcg} /> */}
      <Cart />
    </Fragment>
  );
};

export default CartPage;
