import React from "react";
import styled from "styled-components";
const Title = ({ title, middle }) => {
  return (
    <TitleWrapper className="row" middle={middle}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline" />
      </div>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-align: ${props => (props.middle ? "center" : "left")};
  .title-underline {
    height: 0.25rem;
    width: 7rem;
    background: var(--primaryColor);
    margin: ${props => (props.middle ? "0 auto" : "0")};
  }
`;

export default Title;
