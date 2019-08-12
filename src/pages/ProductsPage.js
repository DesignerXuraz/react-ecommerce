import React, { Fragment } from "react";
import ProductsBcg from "../images/productsBcg.jpeg";
import Hero from "../components/Hero";

import ProductList from "../components/ProductList";
import { ProductConsumer } from "../context/contexts";
import Title from "../components/Title";

import FilterProduct from "../components/FilterProducts";
const ProductsPage = () => {
  return (
    <Fragment>
      {/* <Hero img={ProductsBcg} /> */}
      <ProductConsumer>
        {value => {
          const { filteredProducts } = value;
          return (
            <section className="py-5">
              <div className="container">
                {/* title */}
                <Title title="our products" middle="true" />

                {/* FilterProduct*/}
                <FilterProduct />
                <div className="row">
                  {/* Total Count */}
                  <div className="col-10 mx-auto">
                    <h5 className="text-title">
                      Total Products:{filteredProducts.length}
                    </h5>
                  </div>
                </div>

                {/* products.. No products than empty else show available products */}
                <div className="row py-5">
                  {filteredProducts.length === 0 ? (
                    <div className="col text-center text-title">
                      sorry,no items match your search !!
                    </div>
                  ) : (
                    filteredProducts.map(products => {
                      return (
                        <ProductList key={products.id} product={products} /> //REUSABLE
                      );
                    })
                  )}
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
