import React, { Fragment } from "react";
import { ProductConsumer } from "../../context/contexts";
import CartItems from "./CartItems";
const CartList = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ProductConsumer>
              {value => {
                const {
                  cart,
                  increment,
                  decrement,
                  removeItem,
                  clearCart
                } = value;
                if (cart.length === 0) {
                  return (
                    <h2 className="text-center my-4">
                      Your Cart Is Currently Empty..
                    </h2>
                  );
                }
                return (
                  <div>
                    {cart.map(cartItem => (
                      <CartItems
                        key={cartItem.id}
                        cartItem={cartItem}
                        increment={increment}
                        decrement={decrement}
                        removeItem={removeItem}
                      />
                    ))}
                  </div>
                );
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartList;
