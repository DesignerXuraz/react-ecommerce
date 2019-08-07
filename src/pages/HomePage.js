import React, { Fragment } from "react";
import { ProductConsumer } from "../context/contexts";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Services from "../components/Services";
import Featured from "../components/Featured";

const HomePage = () => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          return (
            <Fragment>
              <Hero title="awesome gadgets" max="true">
                <Link
                  to="/products"
                  className="main-link"
                  style={{ margin: "2rem" }}
                >
                  Our Products
                </Link>
              </Hero>
              <Services />
              <Featured />
            </Fragment>
          );
        }}
      </ProductConsumer>
    </Fragment>
  );
};

export default HomePage;
