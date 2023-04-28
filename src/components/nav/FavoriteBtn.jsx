import React from "react";
import { FiHeart } from "react-icons/fi";
import styled from "styled-components";

const FavoriteBtn = () => {
  return (
    <Button>
      <FiHeart />
      <span>02</span>
    </Button>
  );
};

const Button = styled.button`
  position: relative;
  span {
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
    font-size: 12px;
    font-weight: bold;
    padding: 11px;
    z-index: 11;
  }
  svg {
    color: ${({ theme }) => theme.mainText};
  }
`;
export default FavoriteBtn;
