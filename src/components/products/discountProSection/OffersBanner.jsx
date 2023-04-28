import React from "react";
import styled from "styled-components";

import { BsStarFill, BsStar } from "react-icons/bs";

const OffersBanner = ({ offers }) => {
  return (
    <Container>
      <div className="discount">20%</div>
      <div className="img-box">
        <img src={offers.image} alt="" />
      </div>
      <div className="productInfo">
        <h1>{offers.name}</h1>
        <div className="review">
          <div className="star">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
          </div>
          <div className="reviewNum">03</div>
        </div>
        <div className="price">
          ${offers.price}
          <span>{offers.price && offers.price * (50 / 100)}</span>
        </div>
        <div className="offerTimerEnd">
          <div className="txt">
            <span>hurry up!</span> offer ends in:
          </div>
          <div className="timeBox">
            <span>
              1<small>hours</small>
            </span>
            :
            <span>
              21<small>minutes</small>
            </span>
            :
            <span>
              21<small>seconds</small>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  background: linear-gradient(325deg, #f7706200 30%, #ff0000 126%);
  color: ${({ theme }) => theme.mainText};
  border: 1px solid #ff0000;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  text-transform: capitalize;
  @media (min-width: 767.98px) {
    & {
      padding: 20px;
      flex-direction: row;
      gap: 20px;
    }
  }
  @media (min-width: 991.98px) {
    & {
      flex-direction: column;
      height: 100vh;
      max-height: 605px;
      order: 2;
    }
  }
  @media (min-width: 991.98px) {
    & {
      max-height: 625px;
    }
  }
  .discount {
    position: absolute;
    font-size: 18px;
    font-weight: bold;
    top: 0;
    left: 0;
    background-color: #ff0000;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 30% 30% 0% 30%;
    display: grid;
    place-items: center;
    z-index: 100;
    @media (min-width: 767.98px) {
      & {
        font-size: 20px;
        width: 70px;
        height: 70px;
      }
    }
  }
  .img-box {
    overflow: hidden;
    border-radius: 20px;
    @media (min-width: 767.98px) {
      & {
        height: 100%;
      }
    }
    @media (min-width: 991.98px) {
      & {
        margin: 15px 15px 0;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s;
      :hover {
        transform: scale(1.1);
      }
    }
  }
  .productInfo {
    margin-top: 20px;
    @media (min-width: 767.98px) {
      & {
        margin-top: 0;
      }
    }
    h1 {
      font-size: 14.3px;
      font-weight: 600;
      @media (min-width: 424.98px) {
        & {
          font-size: 16px;
        }
      }
      @media (min-width: 767.98px) {
        & {
          font-size: 17px;
        }
      }
      @media (min-width: 991.98px) {
        & {
          font-size: 16.3px;
        }
      }
    }
    .review {
      display: flex;
      gap: 10px;
      align-items: center;
      margin: 5px 0;
      .star {
        display: flex;
        gap: 5px;
        svg {
          color: #ffe000;
          font-size: 13px;
          @media (min-width: 424.98px) {
            & {
              font-size: 15px;
            }
          }
          @media (min-width: 991.98px) {
            & {
              font-size: 16px;
            }
          }
        }
      }
      .reviewNum {
        color: #2b38d1;
        font-size: 13px;
        @media (min-width: 424.98px) {
          & {
            font-size: 15px;
          }
        }
        @media (min-width: 991.98px) {
          & {
            font-size: 15px;
          }
        }
      }
    }
    .price {
      font-size: 22px;
      font-weight: 600;
      @media (min-width: 991.98px) {
        & {
        }
      }
      span {
        text-decoration: line-through;
        opacity: 0.7;
        font-size: 15px;
        font-weight: 300;
      }
    }
  }
  .offerTimerEnd {
    margin-top: 5px;
    @media (min-width: 767.98px) {
      & {
        margin-top: 20px;
      }
    }
    @media (min-width: 991.98px) {
      & {
        margin: 10px 0 15px;
      }
    }
    .txt {
      margin-bottom: 5px;
      span {
        font-weight: 600;
        font-size: 20px;
        color: #ff0000;
        @media (min-width: 991.98px) {
          & {
            font-size: 25px;
          }
        }
      }
    }
    .timeBox {
      display: flex;
      gap: 5px;
      align-items: center;
      span {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        width: 30px;
        height: 20px;
        color: #fff;
        background-color: #ff0000;
        font-size: 25px;
        font-weight: 600;
        padding: 34px 34px 23px;
        line-height: 22px;
        @media (min-width: 991.98px) {
          & {
            padding: 34px 34px 23px;
            width: 50px;
            height: 40px;
            font-size: 40px;
          }
        }
        small {
          font-size: 11px;
          font-weight: 500;
        }
      }
    }
  }
`;

export default OffersBanner;
