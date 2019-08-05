import React, { Fragment } from "react";
import aboutBcg from "../images/aboutBcg.jpeg";
import defaultBcg from "../images/defaultBcg.jpeg";
import Hero from "../components/Hero";
import Title from "../components/Title";
const AboutPage = () => {
  return (
    <Fragment>
      <Hero img={aboutBcg} />
      <div className="container py-5">
        <div className="row">
          <div className="col-10 my-6 mx-auto col-md-6">
            <img
              src={defaultBcg}
              className="img-fluid img-thumbnail"
              alt="about"
            />
          </div>
          <div className="col-10 my-6 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-22">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quisquam illo voluptas in tempora ex, exercitationem excepturi
              repudiandae dignissimos nam.
            </p>
            <p className="text-lead text-muted my-22">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quisquam illo voluptas in tempora ex, exercitationem excepturi
              repudiandae dignissimos nam.
            </p>
            <button
              type="button"
              className="main-link"
              style={{ marginTop: "1rem" }}
            >
              <span style={{ color: "black", textTransform: "capitalize" }}>
                More Info
              </span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPage;
