import React from "react";

import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";

const AddCartBtn = ({ loading }) => {
  return (
    <>
      <Button className="btnCart">
        {loading ? <GiCheckMark /> : <FiShoppingBag />}
        <span> Add to cart</span>
      </Button>
    </>
  );
};
const Button = styled.button`
  outline: none;
  border: none;
  background: ${({ theme }) => theme.gradientBackground};
  padding: 15px;
  width: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.mainText};
  text-transform: capitalize;
  font-size: 12px;
  white-space: nowrap;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.5s ease;
  @media (min-width: 991.98px) {
    & {
      font-size: 15px;
    }
  }
  ::after {
    content: "";
    width: 40px;
    height: 80px;
    top: 50%;
    left: -50px;
    transform: translatey(-50%) rotate(30deg);
    background: #008cff5e;
    opacity: 0.2;
    position: absolute;
    transition: ease-in-out 0.3s;
  }
  :hover {
    ::after {
      transform: translate(900%, -50%) rotate(30deg);
    }
  }

  svg {
    margin-right: 5px;
    font-size: 20px;
    @media (min-width: 991.98px) {
      & {
        margin-right: 10px;
        font-size: 23px;
      }
    }
  }
`;
export default AddCartBtn;
