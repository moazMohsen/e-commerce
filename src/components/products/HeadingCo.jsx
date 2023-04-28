import React from "react";
import styled from "styled-components";

const HeadingCo = ({ title, paragraph }) => {
  return (
    <Heading>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </Heading>
  );
};

const Heading = styled.div`
  margin-bottom: 29px;
  text-transform: uppercase;
  border-radius: 20px 0 0 20px;
  padding: 10px;
  background: ${({ theme }) => theme.gradientBig};
  border-bottom: 1px solid #222ead;
  width: fit-content;
  @media (min-width: 991.98px) {
    & {
      padding: 10px 90px 20px 20px;
    }
  }
  h1 {
    font-weight: 500;
    color: ${({ theme }) => theme.mainText};
    font-size: 19px;
    @media (min-width: 767.98px) {
      & {
        font-size: 21px;
        margin-bottom: 5px;
      }
    }
  }
  p {
    color: #2b38d1;
    font-size: 12px;
    line-height: 1.2;
    @media (min-width: 767.98px) {
      & {
        font-size: 14px;
      }
    }
  }
`;

export default HeadingCo;
