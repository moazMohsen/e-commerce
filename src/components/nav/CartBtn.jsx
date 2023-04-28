import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
import Carts from "../products/cart/Carts";
import { useDispatch, useSelector } from "react-redux";
import { getCartFromFire } from "../../app/cartSlice";

const CartBtn = () => {
  const [togleCart, setTogleCart] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const user = useSelector((state) => state.user.user.userName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartFromFire());
  }, [user]);

  useEffect(() => {
    let totlaPrice = cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    setTotalPrice(totlaPrice);
  }, [user, cart]);

  return (
    <>
      <Button onClick={() => setTogleCart(!togleCart)}>
        <FiShoppingBag />
        <div>{totalPrice}$</div>
        <span>{cart.length}</span>
      </Button>
      {togleCart && <Carts setTogleCart={setTogleCart} />}
    </>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  > span {
    position: absolute;
    top: -12px;
    right: -12px;
    background-color: red;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 11;
    font-size: 12px;
    font-weight: bold;
    padding: 11px;
  }
  div {
    color: ${({ theme }) => theme.mainText};

    @media (min-width: 767.98px) {
      & {
        display: flex;
        margin-left: 8px;
      }
    }
    display: none;
    flex-direction: column;
    align-items: flex-start;

    font-weight: bold;
    font-size: 17px;
    span {
      font-size: 11px;
      white-space: pre;
      margin-bottom: 3px;
    }
  }
  svg {
    color: ${({ theme }) => theme.mainText};
  }
`;
export default CartBtn;
