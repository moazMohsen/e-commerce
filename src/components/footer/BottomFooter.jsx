import React from "react";
import styled from "styled-components";

import { payment } from "../../images/index_img";

const BottomFooter = () => {
  return (
    <Wrapper>
      <div>
        <p>© Uminex all rights reserved. Powered by moaz.mo.</p>
      </div>
      <div>
        <h5>Payment Method:</h5>
        <img src={payment} alt="" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.mainText};
  margin-top: 15px;
  @media (min-width: 991.98px) {
    & {
      flex-direction: row;
    }
  }
  p {
    font-size: 14px;
    text-align: center;
  }
  div {
    &:nth-child(2) {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
      @media (min-width: 991.98px) {
        & {
          flex-direction: row;
          margin-top: 0;
        }
      }
      h5 {
        white-space: nowrap;
      }
      img {
        width: 100%;
      }
    }
  }
`;
export default BottomFooter;
