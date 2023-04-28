import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteProductAndUpdateCart,
  getCartFromFire,
} from "../../../app/cartSlice";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Carts = ({ setTogleCart }) => {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const refContainer = useRef();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    dispatch(getCartFromFire());
  }, [user]);

  useEffect(() => {
    refContainer.current.addEventListener("click", (e) => {
      if (e.target.classList.contains("overalay")) {
        setTogleCart(false);
      }
    });
  }, []);

  useEffect(() => {
    let totalPrice = cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cart]);

  return (
    <Container
      ref={refContainer}
      className="overalay"
      as={motion.div}
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="carts"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4, delay: 0.2, type: "tween" }}
      >
        <div className="closeCart ">
          <span>shopping cart </span>
          <span>
            <AiOutlineCloseCircle onClick={() => setTogleCart(false)} />
          </span>
        </div>
        <motion.div className="cartsComponent">
          {cart.map((cart) => (
            <div className="cartsWrapper" key={cart.id}>
              <div className="img-container">
                <img src={cart.image} alt="" />
              </div>
              <div className="contnet">
                <h5>{cart.name}</h5>
                <div className="price">
                  <span>
                    {cart.quantity} <AiOutlineClose />
                  </span>
                  <span>${cart.price}</span>
                </div>
              </div>
              <div
                className="control"
                onClick={() => dispatch(deleteProductAndUpdateCart(cart.id))}
              >
                <AiOutlineCloseCircle />
              </div>
            </div>
          ))}
        </motion.div>
        <CartControl>
          <div className="info">
            <span> subTotal:</span>
            <span>${totalPrice}</span>
          </div>
          <Button onClick={() => setTogleCart(false)}>
            <Link to="/CartPage"> view cart</Link>
          </Button>
          <Button type="submit">check out</Button>
        </CartControl>
      </motion.div>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.gradientOverlay};
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  backdrop-filter: blur(5px);

  .carts {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 400px;
    padding: 20px;
    background: ${({ theme }) => theme.gradient};
    justify-content: space-between;
    .cartsComponent {
      padding-right: 10px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      gap: 15px;
      color: ${({ theme }) => theme.mainText};
    }
    .cartsWrapper {
      border: 1px solid ${({ theme }) => theme.border};
      border-radius: 20px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      .img-container {
        flex-basis: 25%;
        img {
          border-radius: 10px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          @media (min-width: 991.98px) {
            & {
              border-radius: 20px;
            }
          }
        }
      }
      .contnet {
        flex-basis: 50%;

        h5 {
          text-transform: capitalize;
        }
        .price {
          margin-top: 10px;
          display: flex;
          span {
            border: 1px solid #2b38d1;
            border-radius: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            :nth-child(1) {
              width: 50px;
              height: 30px;
            }
            :nth-child(2) {
              width: 85px;
              height: 30px;
              margin-left: 10px;
            }
          }
        }
      }
      .control {
        cursor: pointer;
        svg {
          font-size: 23px;
        }
      }
    }
  }

  .closeCart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    text-transform: capitalize;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.mainText};
    padding: 5px 10px;
    border-radius: 20px;
    svg {
      font-size: 25px;
      line-height: 0;
    }
  }
`;
const CartControl = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 10px 0 0;
  border-top: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.mainText};
  .info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 7px;
    font-size: 20px;
  }
`;
const Button = styled.button`
  width: 100%;
  font-size: 16px;
  color: ${({ theme }) => theme.mainText} !important;
  transition: 0.5s;
  &:hover {
    background: ${({ theme }) => theme.btnHover};
  }
  ${CartControl} &:last-of-type {
    padding: 15px 0 !important;
  }
  ${CartControl} &:first-of-type {
    background-image: linear-gradient(325deg, #f7706200 30%, #ff0000 126%);
    border: 1px solid #ff0000;
    padding: 0 !important;
    :hover {
      background: linear-gradient(345deg, #f7706200 30%, #ff0000 126%);
    }
  }
  a {
    padding: 15px 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.mainText};
  }
`;
export default Carts;
