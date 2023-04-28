import React from "react";
import styled from "styled-components";
import { categoryInfo } from "./categoryInfo";
const CategoryBanner = ({ categoryName }) => {
  const specificobj = categoryInfo.find((cat) => cat.category === categoryName);
  if (!specificobj) return null;

  return (
    <Container>
      <img src={specificobj.image} alt="" />
      <div className="content">
        <h5>{specificobj.header}</h5>
        <p>
          <span>{specificobj.name}</span>
          <span>{specificobj.module}</span>
        </p>
        <div>
          <span>just from:</span>
          {specificobj.price}$
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  color: #141a6a;
  text-transform: capitalize;
  height: 300px;
  @media (min-width: 767.98px) {
    & {
      flex: 1;
    }
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
    border-radius: 20px;
    object-position: 0 100%;
    @media (min-width: 374.98px) {
      & {
        object-position: 0 80%;
      }
    }
  }
  .content {
    position: absolute;
    inset: 20px;

    h5 {
      white-space: nowrap;
      margin-bottom: 5px;
      font-size: 20px;
      @media (min-width: 424.98px) {
        & {
          font-size: 23px;
        }
      }
      @media (min-width: 991.98px) {
        & {
          font-size: 17px;
        }
      }
    }
    p {
      white-space: nowrap;
      span {
        display: block;
        font-size: 19px;
        @media (min-width: 424.98px) {
          & {
            font-size: 21px;
          }
        }
        &:nth-child(2) {
          font-size: 16px;
          font-weight: 600;
          color: #2935c5;
        }
      }
    }
    div {
      font-size: 14px;
      font-weight: 600;
      span {
        color: #141a6a85;
        font-size: 12px;
        font-weight: 900;
        @media (min-width: 424.98px) {
          & {
            font-size: 15px;
          }
        }
      }
      @media (min-width: 424.98px) {
        & {
          font-size: 18px;
        }
      }
    }
  }
`;
export default CategoryBanner;
