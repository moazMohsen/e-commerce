import React from "react";
import styled from "styled-components";

const BtnHeader = ({ header, children, onClick }) => {
  return (
    <Button onClick={onClick}>
      {children}
      <span>{header}</span>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10.3px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 15px;
  background: ${({ theme }) => theme.gradient};
  color: ${({ theme }) => theme.mainText};
  cursor: pointer;
  svg {
    font-size: 18px;
  }
  span {
    font-size: 17px;
    text-transform: capitalize;
  }
`;

export default BtnHeader;
