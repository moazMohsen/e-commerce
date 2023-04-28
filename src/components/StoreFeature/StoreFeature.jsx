import React from "react";
import styled from "styled-components";
import { Container } from "../../StyledComponents";

import {
  BsFillShieldSlashFill,
  BsFillChatLeftDotsFill,
  BsCardChecklist,
  BsReplyAllFill,
} from "react-icons/bs";
const StoreFeature = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <BsFillShieldSlashFill />
          <div className="content">
            <h4>safe payment</h4>
            <p>100% secure payment</p>
          </div>
        </div>
        <div>
          <BsFillChatLeftDotsFill />
          <div className="content">
            <h4>help center</h4>
            <p>24/7 suport</p>
          </div>
        </div>
        <div>
          <BsReplyAllFill />
          <div className="content">
            <h4>fast delivery</h4>
            <p>deliver in 24 hours max!</p>
          </div>
        </div>
        <div>
          <BsCardChecklist />
          <div className="content">
            <h4>curated items</h4>
            <p>form hanpicked sellers</p>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  background: ${({ theme }) => theme.gradientBig};
  padding: 30px 0;

  @media (min-width: 767.98px) {
    & {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-right: 1px solid ${({ theme }) => theme.border};
    padding: 0 10px;
    color: ${({ theme }) => theme.mainText};
    &:last-child,
    &:nth-child(2) {
      border-right: none;
    }
    @media (min-width: 767.98px) {
      &:nth-child(2) {
        border-right: inherit;
      }
    }
    .content {
      text-transform: capitalize;
      h4 {
        text-align: center;
        font-weight: 600;
        @media (min-width: 1199.98px) {
          & {
            font-size: 19px;
          }
        }
      }
      p {
        color: ${({ theme }) => theme.primeText};
        font-size: 14px;
        text-align: center;
        margin-top: 5px;
        @media (min-width: 767.98px) {
          & {
            font-size: 15px;
          }
        }
        @media (min-width: 1199.98px) {
          & {
            font-size: 18px;
          }
        }
      }
    }
    svg {
      font-size: 28px;
      @media (min-width: 767.98px) {
        & {
          font-size: 33px;
        }
      }
      @media (min-width: 1199.98px) {
        & {
          font-size: 44px;
        }
      }
    }
  }
`;

export default StoreFeature;
