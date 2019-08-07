import React, { Fragment } from "react";
import ProductsBcg from "../images/productsBcg.jpeg";
import Hero from "../components/Hero";

import ProductList from "../components/ProductList";
import { ProductConsumer } from "../context/contexts";
import Title from "../components/Title";
const ProductsPage = () => {
  return (
    <Fragment>
      <Hero img={ProductsBcg} />
      <ProductConsumer>
        {value => {
          const { storeProducts } = value;
          return (
            <section className="py-5">
              <div className="container">
                {/* title */}
                <Title title="our products" middle="true" />
                {/* products */}
                <div className="row py-5">
                  {storeProducts.map(products => {
                    return <ProductList key={products.id} product={products} />;
                  })}
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </Fragment>
  );
};

export default ProductsPage;
