import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context/contexts";
const ProductList = ({ product }) => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          const { addToCart, syncSingleProduct } = value;
          return (
            <ProductListWrap className="col-10 mx-auto  col-md-6 col-lg-4 my-3">
              <div className="card">
                <div className="img-container">
                  <img
                    src={product.image}
                    alt="Images"
                    className="card-img-top  p-3"
                    style={{ height: "300px" }}
                  />
                  <div className="product-icons">
                    {/* singleProduct icon */}
                    <Link
                      to={`/products/${product.id}`}
                      onClick={() => {
                        syncSingleProduct(product.id);
                      }}
                    >
                      <FaSearch className="icon" />
                    </Link>
                    {/* add to cart icon */}
                    <FaCartPlus
                      className="icon"
                      onClick={() => {
                        addToCart(product.id);
                      }}
                    />
                  </div>
                </div>
                <div className="card-body d-flex justify-content-between">
                  <p className="mb-0">{product.title}</p>
                  <p className="mb-0">Rs{product.price}</p>
                </div>
              </div>
            </ProductListWrap>
          );
        }}
      </ProductConsumer>
    </Fragment>
  );
};

const ProductListWrap = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
  }
  .card:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .card-img-top {
    transition: var(--mainTransition);
  }

  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.4;
  }

  .img-container {
    position: relative;
  }

  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }

  .card:hover .product-icons {
    opacity: 1;
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

export default ProductList;
