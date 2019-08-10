import React, { Fragment } from "react";
import styled from "styled-components";
import Bimg from "../images/storeBcg.jpeg";

const Hero = ({ img, title, children, max }) => {
  return (
    <Fragment>
      <HeroWrapper max={max} img={img}>
        <div className="banner">
          {/* <h1 className="title">{title}</h1> */}
          {children}
        </div>
      </HeroWrapper>
    </Fragment>
  );
};

const HeroWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: ${props => (props.max ? "100vh" : "55vh")};
  background: url(${props => props.img}) center/cover no-repeat;
  color: var(--mainWhite);

  .title {
    font-size: 3.5rem;
    text-transform: uppercase;
    letter-spacing: var(---mainSpacing);
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.9);
  }
`;

Hero.defaultProps = {
  img: Bimg
};

export default Hero;
