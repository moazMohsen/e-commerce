import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteAllCartAndUpdateCart } from "../../../app/cartSlice";

const CartPriceBox = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [supTotal, setSupTotal] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    let supTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.price * cartItem.quantity);
    }, 0);
    setSupTotal(supTotal);
  }, [cart]);

  return (
    <CartPrice>
      <div className="total-box">
        <h4>cart totals</h4>
        <div>
          <p>subTotal</p>
          <span>${supTotal}</span>
        </div>
      </div>
      <div className="btn-box ">
        <button
          className="red"
          onClick={() => dispatch(deleteAllCartAndUpdateCart())}
        >
          clear cart
        </button>
      </div>
      <div className="btn-box">
        <button>proceed to checkout</button>
      </div>
    </CartPrice>
  );
};

const CartPrice = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  text-transform: capitalize;
  max-width: 300px;
  .total-box {
    border-bottom: 1px solid ${({ theme }) => theme.border};
    width: 100%;
    padding-bottom: 11px;
    h4 {
      font-size: 21px;
      font-weight: 400;
      color: ${({ theme }) => theme.mainText};
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 15px 0;
      p {
        color: ${({ theme }) => theme.secondText};
      }
      span {
        font-size: 26px;
        color: ${({ theme }) => theme.mainText};
      }
    }
  }
  .btn-box {
    width: 100%;
    button {
      border: 1px solid ${({ theme }) => theme.border};
      background: ${({ theme }) => theme.gradient};
      width: 100%;
      padding: 15px;
      border-radius: 20px;
      color: ${({ theme }) => theme.mainText};
      font-size: 17px;
      text-transform: capitalize;
      cursor: pointer;
      transition: all 0.5s;
      :hover {
        background: ${({ theme }) => theme.btnHover};
      }
      &.red {
        background: red;
        color: #fff;
      }
    }
  }
`;

export default CartPriceBox;
