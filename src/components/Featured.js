import React, { Fragment } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context/contexts";
import ProductList from "./ProductList";
const Featured = () => {
  return (
    <Fragment>
      <section className="py-5">
        <div className="container">
          {/* Title */}
          <Title title="featured products" center="true" />
          {/* FeaturedProducts */}
          <div className="row my-5">
            <ProductConsumer>
              {value => {
                const { featuredProducts } = value;
                return featuredProducts.map(onlyfeatured => {
                  return (
                    <ProductList key={onlyfeatured.id} product={onlyfeatured}>
                      {onlyfeatured}
                    </ProductList>
                  );
                });
              }}
            </ProductConsumer>
          </div>

          <div className="row mt-5">
            <div className="col text-center">
              <Link to="/products" className="main-link">
                Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Featured;
