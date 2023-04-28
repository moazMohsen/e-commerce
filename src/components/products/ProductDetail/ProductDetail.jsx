import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BsStarFill, BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addCartToFire, getCartFromFire } from "../../../app/cartSlice";
import NotificationContext from "../../../context/NotificationContext";

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const [style, setStyle] = useState({});
  const { notificationCart, setNotificationCart, setNotificationLogin } =
    useContext(NotificationContext);
  const user = useSelector((state) => state.user.user.userName);
  const [quantity, setQuantity] = useState(1);
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    const relatedCart = cart.filter((cart) => cart.id === product.id);
    setQuantity(relatedCart[0]?.quantity || 1);
  }, [cart, product.id]);

  useEffect(() => {
    dispatch(getCartFromFire());
  }, [notificationCart]);

  const handelMouseMove = (e) => {
    const clientX = e.clientX - e.currentTarget.offsetLeft;
    const clientY = e.clientY - e.currentTarget.offsetTop;
    const mWidth = e.currentTarget.offsetWidth;
    const mHeight = e.currentTarget.offsetWidth;
    const x = (clientX / mWidth) * 300;
    const y = (clientY / mHeight) * 300;
    setStyle({
      transform: `translate(-${x}px, -${y}px) scale(1.8)`,
      transformOrigin: `${x}px ${y}px`,
    });
  };
  const handelMouseLeave = (e) => {
    setStyle({});
  };

  const addProductToCart = async () => {
    if (!user) {
      setNotificationLogin(true);
      setTimeout(() => {
        setNotificationLogin(false);
      }, 1000);
      return false;
    }
    try {
      await dispatch(addCartToFire({ product, quantity }));
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

  const handelQuantity = (operation) => {
    if (quantity <= 1 && operation === "decrement") {
      return;
    }
    setQuantity(operation === "increment" ? quantity + 1 : quantity - 1);
  };
  return (
    <Wrapper>
      <div
        className="imageContainer"
        onMouseMove={handelMouseMove}
        onMouseLeave={handelMouseLeave}
      >
        <img src={product.image} alt="" style={style} />
      </div>
      <div className="contentContainer">
        <div className="heading">
          <h2>{product.name}</h2>
          <div className="heading-info">
            <div>
              <p>
                brand: <span>appel</span>
              </p>
            </div>
            <div>
              <p>
                sku: <span>d&e005</span>
              </p>
            </div>
            <div className="review">
              <div className="star">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStar />
                <BsStar />
                <BsStar />
              </div>
              <div className="reviewNum">3 reviews</div>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="price">
            <h2>price</h2>${product.price}
          </div>
          <div>
            <h2>specifications</h2>
            <ul className="description">
              {product.description.map((description, i) => (
                <li key={i}>{description}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>color</h2>
            <ul className="color">
              {product.color.map((color) => (
                <li style={{ backgroundColor: color }} key={color}></li>
              ))}
            </ul>
          </div>
        </div>
        <ButtonContainer>
          <div className="quantiy">
            <Button className="dec" onClick={() => handelQuantity("decrement")}>
              -
            </Button>
            <span>{quantity}</span>
            <Button className="inc" onClick={() => handelQuantity("increment")}>
              +
            </Button>
          </div>
          <div className="addCart">
            <Button
              className="addCartBtn"
              onClick={() => {
                addProductToCart();
              }}
            >
              add to cart
            </Button>
          </div>
        </ButtonContainer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 767.98px) {
    & {
      flex-direction: row;
    }
  }
  .imageContainer {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    img {
      will-change: transform;
      width: 60%;
      @media (min-width: 767.98px) {
        & {
          width: 100%;
        }
      }
      @media (min-width: 991.98px) {
        & {
          width: 80%;
        }
      }
    }
  }
  .contentContainer {
    flex-basis: 50%;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .heading {
      border-bottom: 1px solid ${({ theme }) => theme.border};
      padding-bottom: 10px;
      h2 {
        margin-bottom: 15px;
        text-transform: capitalize;
        font-weight: 500;
        font-size: 15px;
        color: ${({ theme }) => theme.mainText};
        @media (min-width: 424.98px) {
          & {
            font-size: 17px;
          }
        }
        @media (min-width: 991.98px) {
          & {
            font-size: 22px;
          }
        }
      }
      .heading-info {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        @media (min-width: 424.98px) {
          & {
            flex-wrap: nowrap;
            flex-direction: row;
          }
        }
        > div {
          padding: 0 10px;
          text-transform: capitalize;
          &:nth-child(1) {
            border-right: 1px solid ${({ theme }) => theme.border};
          }
          @media (min-width: 424.98px) {
            &:not(:last-of-type) {
              border-right: 1px solid ${({ theme }) => theme.border};
            }
          }
        }
        .review {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          margin: 5px 0;
          @media (min-width: 424.98px) {
            & {
              flex-direction: column;
            }
          }
          @media (min-width: 991.98px) {
            & {
              flex-direction: row;
              gap: 5px;
              align-items: center;
            }
          }
          .star {
            display: flex;
            gap: 5px;
            svg {
              color: #ffe000;
            }
          }
          .reviewNum {
            color: #2b38d1;
          }
        }
        p {
          color: ${({ theme }) => theme.primeText};
          span {
            color: ${({ theme }) => theme.mainText};
          }
        }
      }
    }
    .info {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .price {
        font-size: 40px;
        color: ${({ theme }) => theme.mainText};
      }
      h2 {
        text-transform: capitalize;
        font-weight: 300;
        font-size: 18px;
        color: ${({ theme }) => theme.primeText};
      }
      .description {
        margin: 10px 18px 0;
        @media (min-width: 991.98px) {
          & {
            margin: 10px 50px 0;
          }
        }
        li {
          color: ${({ theme }) => theme.mainText};
          list-style: disc;
        }
      }
      .color {
        background: #fff;
        width: fit-content;
        padding: 4px;
        border-radius: 20px;
        margin: 10px 18px 0;
        display: flex;
        flex-direction: row;
        gap: 10px;
        @media (min-width: 991.98px) {
          & {
            margin: 10px 50px 0;
          }
        }
        li {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  .quantiy {
    flex-basis: 40%;
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 20px;
    @media (min-width: 991.98px) {
      & {
        flex-basis: 30%;
      }
    }
    span {
      color: ${({ theme }) => theme.mainText};
      border: 1px solid ${({ theme }) => theme.border};
      border-bottom: 0;
      border-top: 0;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      font-size: 20px;
    }
  }
  .addCart {
    flex-basis: 60%;
    @media (min-width: 991.98px) {
      & {
        flex-basis: 70%;
      }
    }
  }
`;
const Button = styled.button`
  width: 100%;
  border-radius: 20px;
  padding: 15px 0;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  border: none;
  background: ${({ theme }) => theme.gradient};
  color: ${({ theme }) => theme.mainText};
  transition: 0.2s;

  &.dec {
    border-radius: 20px 0 0 20px;
  }
  &.inc {
    border-radius: 0 20px 20px 0;
  }
  &.addCartBtn {
    border: 1px solid ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.gradient};
    color: ${({ theme }) => theme.mainText};
    :hover {
      background: ${({ theme }) => theme.btnHover};
    }
  }
`;
export default ProductDetail;
