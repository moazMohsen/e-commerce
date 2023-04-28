import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { BsStarFill, BsStar } from "react-icons/bs";

import AddCartBtn from "./AddCartBtn";
import ControlBtn from "./ControlBtn";

import { addCartToFire } from "../../app/cartSlice";
import NotificationContext from "../../context/NotificationContext";

const ProductsCart = ({ product, category }) => {
  const dispatch = useDispatch();
  const { setNotificationCart, setNotificationLogin } =
    useContext(NotificationContext);
  const loading = useSelector((state) => state.cart.loading);
  const user = useSelector((state) => state.user.user.userName);

  const addProductToCart = async () => {
    if (!user) {
      setNotificationLogin(true);
      setTimeout(() => {
        setNotificationLogin(false);
      }, 2000);

      return false;
    }
    try {
      await dispatch(addCartToFire({ product }));
      setNotificationLogin(false);
      notification();
    } catch (error) {
      console.log(error);
    }
  };
  const notification = () => {
    setNotificationCart(product);
    setTimeout(() => {
      setNotificationCart({});
    }, 1000);
  };

  return (
    <Container
      className={`filter-item ${category && category.replace(/&|\s/g, "")}`}
    >
      <Link to={`/productDetailPage/?productID=${product.id}`}>
        <div className="img-box">
          <img src={product.image} alt="" loading="lazy" />
        </div>
        <div className="productInfo">
          <div className="heading">
            <h1>{product.name}</h1>
          </div>
          <div className="info">
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
              {product.price}$
              <span>{product.price && product.price * (50 / 100)}$</span>
            </div>
          </div>
        </div>
      </Link>
      <div
        className="btnContainer"
        onClick={() => {
          addProductToCart();
        }}
      >
        <AddCartBtn loading={loading} />
      </div>
      <div className="ControlContainer">
        <ControlBtn />
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  color: #141a6a;
  border-radius: 20px;
  padding: 10px;
  overflow: hidden;
  text-transform: capitalize;
  transition: all 0.2s;
  position: relative !important;
  height: 100%;
  :hover {
    z-index: 999;
    img {
      transform: scale(1.2);
    }
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    color: ${({ theme }) => theme.secondText};
    .img-box {
      flex-basis: 30%;
      img {
        width: 90px;
        height: 100%;
        object-fit: contain;
        transition: all 0.3s;
        @media (min-width: 365.98px) {
          & {
            width: 150px;
          }
        }
        @media (min-width: 991.98px) {
          & {
            width: 130px;
          }
        }
        @media (min-width: 1199.98px) {
          & {
            width: 150px;
          }
        }
      }
    }
    .productInfo {
      flex-basis: 70%;
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      h1 {
        font-size: 11px;
        font-weight: 600;
        text-align: center;

        @media (min-width: 365.98px) {
          & {
            font-size: 12px;
          }
        }
        @media (min-width: 424.98px) {
          & {
            font-size: 14px;
          }
        }

        @media (min-width: 991.98px) {
          & {
            font-size: 14.5px;
          }
        }
        @media (min-width: 1199.98px) {
          & {
            font-size: 15.5px;
          }
        }
      }
    }
    .review {
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: center;
      @media (min-width: 1199.98px) {
        margin-bottom: 5px;
      }
      .star {
        display: flex;
        gap: 3px;
        svg {
          color: #ffe000;
          font-size: 12px;
          @media (min-width: 365.98px) {
            & {
              font-size: 13px;
            }
          }
          @media (min-width: 424.98px) {
            & {
              font-size: 14px;
            }
          }
          @media (min-width: 991.98px) {
            & {
              font-size: 16px;
            }
          }
          @media (min-width: 1199.98px) {
            & {
              font-size: 19px;
            }
          }
        }
      }
      .reviewNum {
        color: #2b38d1;
        font-size: 13px;
        font-weight: 500;
        @media (min-width: 424.98px) {
          & {
            font-size: 14px;
          }
        }
      }
    }
    .price {
      font-size: 17px;
      font-weight: 600;
      text-align: center;
      @media (min-width: 424.98px) {
        & {
          font-size: 21px;
        }
      }
      @media (min-width: 1199.98px) {
        & {
          font-size: 25px;
        }
      }
      span {
        text-decoration: line-through;
        opacity: 0.7;
        font-size: 13px;
        font-weight: 300;
        color: #ff0000;
        margin-left: 5px;
        @media (min-width: 424.98px) {
          & {
            font-size: 14px;
          }
        }
      }
    }
  }

  .btnContainer {
    position: absolute;
    z-index: 40;
    bottom: -80px;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    transition: all 0.5s;
  }
  &:hover {
    .btnContainer {
      bottom: 0px;
    }
    .ControlContainer {
      right: 10px;
    }
  }

  .ControlContainer {
    position: absolute;
    top: 10px;
    right: -100px;
    transition: all 0.5s;
  }
`;

export default ProductsCart;
