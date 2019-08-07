import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";
class Services extends Component {
  state = {
    services: [
      {
        id: 0,
        icon: <FaDolly />,
        title: "free shipping",
        text:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sequi!"
      },
      {
        id: 1,
        icon: <FaRedo />,
        title: "30 days return policy",
        text:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sequi!"
      },
      {
        id: 2,
        icon: <FaDollarSign />,
        title: "secure payment",
        text:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sequi!"
      }
    ]
  };
  render() {
    return (
      <Fragment>
        <ServiceWrapper>
          <div className="container py-5">
            <div className="row">
              {this.state.services.map(item => {
                return (
                  <div
                    className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                    key={item.id}
                  >
                    <div className="service-icon">{item.icon}</div>
                    <div
                      className="mt-2"
                      style={{ fontWeight: "bold", color: "#fff" }}
                    >
                      {item.title}
                    </div>
                    <div className="mt-2" style={{ color: "#fff" }}>
                      {item.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ServiceWrapper>
      </Fragment>
    );
  }
}

const ServiceWrapper = styled.div`
  background: rgba(0, 0, 0);
  .service-icon {
    font-size: 2.5rem;
    color: var(--mainWhite);
  }
`;

export default Services;
