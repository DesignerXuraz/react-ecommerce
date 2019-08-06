import React, { Fragment } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/contexts";

const Footer = () => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          return (
            <FooterWrapper>
              <div className="container py-3">
                <div className="row">
                  <div className="col-md-7">
                    <p className="text-capitalize">
                      copyright &copy; radiant pasal {new Date().getFullYear()}
                      .all right reserved.
                    </p>
                  </div>
                  <div className="col-md-5 d-flex justify-content-around">
                    {value.socialLinks.map(item => {
                      return (
                        <a href={item.url} key={item.id}>
                          {item.icon}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FooterWrapper>
          );
        }}
      </ProductConsumer>
    </Fragment>
  );
};

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
export default Footer;
