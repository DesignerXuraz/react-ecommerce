import React, { Fragment } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/contexts";
const SideCart = () => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          const { cart, cartOpen, CloseCart } = value;
          return (
            <CartWrapper active={cartOpen} onClick={CloseCart}>
              <p>Cart Items</p>
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

  @media (min-width: 575px) {
    width: 20rem;
  }
`;

export default SideCart;
