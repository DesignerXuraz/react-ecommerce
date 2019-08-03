import React, { Fragment } from "react";
import { ProductConsumer } from "../context/contexts";
const HomePage = () => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          console.log(value);
          return <p>Hello From Home Page</p>;
        }}
      </ProductConsumer>
    </Fragment>
  );
};

export default HomePage;
