import React, { Fragment } from "react";
import { ProductConsumer } from "../context/contexts";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          return (
            <Hero title="awesome gadgets" max="true">
              <Link
                to="/products"
                className="main-link"
                style={{ margin: "2rem" }}
              >
                Our Products
              </Link>
            </Hero>
          );
        }}
      </ProductConsumer>
    </Fragment>
  );
};

export default HomePage;
