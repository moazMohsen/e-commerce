import React from "react";
import styled from "styled-components";
import { FiMoon, FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../app/modeSlice";

const Mode = () => {
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(changeMode())}>
      {mode ? <FiMoon /> : <FiSun />}
    </Button>
  );
};

const Button = styled.button`
  svg {
    color: ${({ theme }) => theme.mainText};
  }
`;
export default Mode;
