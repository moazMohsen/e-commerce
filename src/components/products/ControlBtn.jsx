import React from "react";
import styled from "styled-components";
import { AiFillHeart, AiFillEye } from "react-icons/ai";

const ControlBtn = () => {
  return (
    <Container>
      <div>
        <AiFillHeart />
      </div>
      <div>
        <AiFillEye />
      </div>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.secondText};
  background: ${({ theme }) => theme.gradientBig};
  padding: 5.3px;
  border-radius: 20px;
  > div {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    cursor: pointer;
    :not(:last-child) {
      margin-bottom: 10px;
    }
    svg {
      font-size: 22px;
      color: ${({ theme }) => theme.secondText};
    }
  }
`;
export default ControlBtn;
