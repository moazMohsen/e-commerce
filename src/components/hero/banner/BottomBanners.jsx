import React from "react";
import styled from "styled-components";
import { botomBanner1, botomBanner2 } from "../../../images/index_img";
const BottomBanners = () => {
  return (
    <Container>
      <div>
        <img src={botomBanner1} alt="" />
        <div className="content">
          <div className="subtitle">smart phone</div>
          <div className="text">
            <p>up to</p>
            <p>offer 20%</p>
          </div>
          <button>shop now</button>
        </div>
      </div>
      <div>
        <img src={botomBanner2} alt="" />
        <div className="content">
          <div className="subtitle">smart gaming</div>
          <div className="text">
            <p>up to</p>
            <p>offer 45%</p>
          </div>
          <button>shop now</button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: bottomBanner;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  @media (min-width: 767.98px) {
    & {
      flex-direction: column;
    }
  }
  @media (min-width: 990.98px) {
    & {
      flex-direction: row;
    }
  }
  > div {
    position: relative;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
    .content {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translate(10px, -50%);
      text-transform: capitalize;
      .subtitle {
        background-color: #fff;
        width: fit-content;
        padding: 0 5px;
        color: #2b38d1;
        font-style: italic;
        font-size: 8px;
        margin-bottom: 5px;
        @media (min-width: 991.98px) {
          & {
            font-size: 13px;
          }
        }
      }
      .text {
        margin-bottom: -5px;
        p:nth-child(1) {
          font-size: 13px;
          font-weight: 600;
          -webkit-text-stroke: 0.3px #fff;
          color: transparent;
          text-transform: uppercase;
          line-height: 1;
        }
        p:nth-child(2) {
          font-size: 10px;
          line-height: 1.7;
        }
        @media (min-width: 991.98px) {
          & {
            margin-bottom: 8px;
            p:nth-child(1) {
              font-size: 29px;
              margin-bottom: 0;
            }
            p:nth-child(2) {
              font-size: 29px;
            }
          }
        }
        @media (min-width: 990.98px) {
          & {
            margin-bottom: 0;
          }
        }
      }
      button {
        background: linear-gradient(
          335deg,
          rgb(16 36 255 / 13%) 97%,
          rgb(43, 56, 209) 106%
        );
        color: #fff;
        border: 1px solid #2b38d1;
        padding: 3px 5px;
        border-radius: 15px;

        cursor: pointer;
        font-size: 9px;
        font-weight: 600;
        text-transform: uppercase;
        &:hover {
          opacity: 0.7;
        }
        @media (min-width: 991.98px) {
          & {
            padding: 5px 10px;
            margin-top: 10px;
            font-size: 14px;
          }
        }
        @media (min-width: 990.98px) {
          & {
            margin-top: 0;
          }
        }
      }
    }
  }
`;
export default BottomBanners;
