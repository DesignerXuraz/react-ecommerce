import React, { Fragment } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  return (
    <Fragment>
      <section className="py-5">
        <div className="container">
          <Title title="your cart" middle="true" />
        </div>
        <CartColumns />
        <CartList />
        <CartTotals />
      </section>
    </Fragment>
  );
};

export default Cart;
