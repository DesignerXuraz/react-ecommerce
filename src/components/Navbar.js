import React, { Fragment } from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { ProductConsumer } from "../context/contexts";
const Navbar = () => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          const { cartItems, handleSidebar, handleCart } = value;
          return (
            <NavWrapper>
              <div className="nav-center">
                <FaBars className="nav-icon" onClick={handleSidebar} />
                <img src={logo} alt="brand" />
                <div className="nav-cart">
                  <FaCartPlus className="nav-icon" onClick={handleCart} />
                  <div className="cart-items">{cartItems}</div>
                </div>
              </div>
            </NavWrapper>
          );
        }}
      </ProductConsumer>
    </Fragment>
  );
};

const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1170px;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    position: absolute;
    top: -8px;
    right: -8px;
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 1rem;
    border-radius: 50%;
    padding: 0px 4px;
  }
`;
export default Navbar;
