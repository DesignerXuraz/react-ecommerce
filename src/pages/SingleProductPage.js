import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import singleProductBcg from "../images/singleProductBcg.jpeg";
import Hero from "../components/Hero";
import { ProductConsumer } from "../context/contexts";
const SingleProductPage = () => {
  return (
    <Fragment>
      <Hero img={singleProductBcg} title="product" />
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart, loading } = value;
          if (loading) {
            return <h1>Loading...</h1>;
          }
          const {
            id,
            image,
            price,
            title,
            company,
            description
          } = singleProduct;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-md-6">
                    <img
                      src={`../${image}`}
                      alt="single product image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-10 mx-auto col-md-6">
                    <h5 className="text-title mb-4">Model:{title}</h5>
                    <h5 className="text-capitalize text-muted mb-4">
                      Company:{company}
                    </h5>
                    <h5 className="text-capitalize mb-4 text-main">
                      price: Rs{price}
                    </h5>
                    <p className="text-title text-capitalize mt-3">
                      Some info about product:
                    </p>
                    <p>{description}</p>
                    <button
                      type="submit"
                      onClick={() => {
                        addToCart(id);
                      }}
                      className="main-link m-4"
                    >
                      Add To Cart
                    </button>
                    <Link to="/products" className="main-link">
                      Back To Products
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </Fragment>
  );
};

export default SingleProductPage;
