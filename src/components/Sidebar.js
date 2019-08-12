import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context/contexts";
const Sidebar = () => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          const { sidebarOpen, handleSidebar, Links } = value;
          return (
            <SideWrapper active={sidebarOpen}>
              <ul>
                {Links.map(link => {
                  return (
                    <li key={link.id}>
                      <Link
                        to={link.path}
                        className="sidebar-link"
                        onClick={handleSidebar}
                      >
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SideWrapper>
          );
        }}
      </ProductConsumer>
    </Fragment>
  );
};

const SideWrapper = styled.nav`
  position: fixed;
  top: 60px;
  left: 0;
  height: 100vh;
  width: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transition: var(--mainTransition);
  border-right: 4px solid var(--primaryColor);
  transform: ${props => (props.active ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style: none;
    padding: 0 !important;
  }

  .sidebar-link {
    display: block;
    font-size: 2rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 1rem 3rem;
    background: transparent;
    transition: var(--mainTransition);
  }

  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 1rem 0.5rem 1rem 1.5rem;
    text-decoration: none;
  }

  @media (min-width: 575px) {
     {
      /*  yoh vanda mathi */
    }
    width: 20rem;
  }
`;

export default Sidebar;
