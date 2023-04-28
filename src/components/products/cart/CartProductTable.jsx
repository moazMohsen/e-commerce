import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteProductAndUpdateCart,
  updateQuantity,
} from "../../../app/cartSlice";
const CartProductTable = () => {
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>product</th>
          <th>price</th>
          <th>quantity</th>
          <th>total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((cart) => (
          <tr key={cart.id}>
            <td>
              <img src={cart.image} alt="" />
            </td>
            <td>{cart.name}</td>
            <td>${cart.price}</td>
            <td>
              <QuantityBtn>
                <Button
                  className="dec"
                  onClick={() =>
                    dispatch(updateQuantity({ operation: "decrement", cart }))
                  }
                >
                  -
                </Button>
                <span>{cart.quantity}</span>
                <Button
                  className="inc"
                  onClick={() =>
                    dispatch(updateQuantity({ operation: "increment", cart }))
                  }
                >
                  +
                </Button>
              </QuantityBtn>
            </td>
            <td>${cart.price * cart.quantity}</td>
            <td>
              <DelteBtn
                onClick={() => dispatch(deleteProductAndUpdateCart(cart.id))}
              >
                delete
              </DelteBtn>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
const Table = styled.table`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  overflow: hidden;
  border-spacing: 0;
  text-transform: capitalize;
  width: 100%;
  @media (min-width: 991.98px) {
    & {
      border-radius: 20px;
    }
  }
  th,
  td {
    text-align: center;
    padding: 10px;
    white-space: nowrap;
    @media (min-width: 767.98px) {
      & {
        white-space: normal;
      }
    }
  }
  thead {
    background: ${({ theme }) => theme.blueBg};
    tr {
      font-size: 11px;
      @media (min-width: 424.98px) {
        & {
          font-size: 13px;
        }
      }
      th {
        border-right: 1px solid ${({ theme }) => theme.darkBg};
        &:last-child {
          border-right: none;
        }
      }
    }
  }
  tbody {
    tr {
      td {
        border-bottom: 1px solid ${({ theme }) => theme.borderLight};
        color: ${({ theme }) => theme.mainText};
        &:nth-child(1) {
          min-width: 120px;
          height: 120px;
        }
      }
      &:last-child {
        td {
          border-bottom: none;
        }
      }
      &:nth-child(odd) {
        background: ${({ theme }) => theme.gradientBig};
      }
      &:nth-child(even) {
        background: ${({ theme }) => theme.gradientBig};
      }
      img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 15px;
      }
    }
  }
`;
const QuantityBtn = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  height: 35px;
  @media (min-width: 991.98px) {
    & {
      border-radius: 20px;
      height: 40px;
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
`;
const Button = styled.button`
  width: 100%;
  border-radius: 20px;
  padding: 8px 0;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  border: none;
  background: ${({ theme }) => theme.gradient};
  color: ${({ theme }) => theme.mainText};
  transition: 0.2s;
  @media (min-width: 991.98px) {
    & {
      padding: 11px 0;
    }
  }
  :hover {
    opacity: 0.5;
  }
  &.dec {
    border-radius: 20px 0 0 43px;
    @media (min-width: 991.98px) {
      & {
        border-radius: 20px 0 0 20px;
      }
    }
  }
  &.inc {
    border-radius: 0 20px 43px 0;
    @media (min-width: 991.98px) {
      & {
        border-radius: 0 20px 20px 0;
      }
    }
  }
`;

const DelteBtn = styled.button`
  border: none;
  background-color: red;
  padding: 15px 25px;
  color: #fff;
  height: 50px;
  border-radius: 20px;
  text-transform: capitalize;
  font-size: 13.7px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: #d10000;
  }
`;

export default CartProductTable;
