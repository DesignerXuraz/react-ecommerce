import React, { Fragment } from "react";
import { ProductConsumer } from "../../context/contexts";
const cartTotals = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <ProductConsumer>
            {value => {
              const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
              return (
                <div className="col text-center my-4">
                  <button
                    className="btn btn-outline-danger text-capitalize mb-4"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                  <h3>subTotal: Rs {cartSubTotal}</h3>
                  <h3>Tax: Rs {cartTax}</h3>
                  <h3>Total: Rs {cartTotal}</h3>
                </div>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </Fragment>
  );
};

export default cartTotals;
