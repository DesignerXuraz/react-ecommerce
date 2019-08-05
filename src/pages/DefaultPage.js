import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";

const DefaultPage = () => {
  return (
    <Fragment>
      <Hero title="404" img={defaultBcg} max="true">
        <h2 className="text-uppercase">page not found..</h2>
        <Link to="/" className="main-link" style={{ marginTop: "2rem" }}>
          Return Home
        </Link>
      </Hero>
    </Fragment>
  );
};

export default DefaultPage;
