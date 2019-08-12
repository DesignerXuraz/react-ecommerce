import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context/contexts";
const SideCart = () => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          const { cart, cartOpen, CloseCart, cartTotal } = value;
          return (
            <CartWrapper active={cartOpen} onClick={CloseCart}>
              <ul>
                {cart.map(item => {
                  return (
                    <li key={item.id} className="cart-item mb-4">
                      <img //src={`../${item.image}`} 
                      src={item.image}
                       width="60" alt="foto" />
                      <div className="mt-3">
                        <h6 className="text-uppercase">{item.title}</h6>
                        <h6 className="text-title text-capitalize">
                          amount:{item.ProductCount}
                        </h6>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <h4 className="text-capitalize text-main">
                cart total:Rs{cartTotal}
              </h4>
              <div className="text-center my-5">
                <Link to="/cart" className="main-link">
                  cart page
                </Link>
              </div>
            </CartWrapper>
          );
        }}
      </ProductConsumer>
    </Fragment>
  );
};

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  border-left: 4px solid var(--primaryColor);
  z-index: 1;
  transform: ${props => (props.active ? "translateX(0)" : "translateX(100%)")};
  transition: var(--mainTransition);
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  li {
    list-style-type: none;
  }

  @media (min-width: 575px) {
    width: 20rem;
  }
`;

export default SideCart;
