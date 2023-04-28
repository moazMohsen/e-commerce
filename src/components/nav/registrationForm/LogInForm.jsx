import React, { useRef } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import {
  clearEmaillErrMsg,
  clearPasswordErrMsg,
  loginForm,
} from "../../../app/userSlice";

const LogInForm = () => {
  const errMsg = useSelector((state) => state.user.errMsg);

  const dispatch = useDispatch();

  const formRef = useRef();

  const handelSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    dispatch(loginForm(formData));
  };

  return (
    <Form onSubmit={handelSubmit} ref={formRef}>
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={() => dispatch(clearEmaillErrMsg())}
      />

      {errMsg.emailErrMsg && <div className="errMes">{errMsg.emailErrMsg}</div>}
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={() => dispatch(clearPasswordErrMsg())}
      />
      {errMsg.passwordErrMsg && (
        <div className="errMes">{errMsg.passwordErrMsg}</div>
      )}
      <a href="/">Forgot your password?</a>
      <input type="submit" value="log in" />
    </Form>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  input {
    border: none;
    background-color: transparent;
    padding: 10px 3px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.mainText};
    outline: none;
    ::placeholder {
      color: #fff;
      text-transform: capitalize;
    }
    &[type="submit"] {
      background: ${({ theme }) => theme.gradient};
      border-radius: 20px;
      font-size: 14px;
      cursor: pointer;
      margin-top: 10px;
      text-transform: capitalize;
      @media (min-width: 991.98px) {
        & {
          font-size: 18px;
        }
      }
    }
  }
  a {
    padding: 0 3px;
    font-size: 12px;
    text-decoration: underline;
  }
  .errMes {
    font-size: 11px;
    color: red;
    font-weight: 500;
  }
`;

export default LogInForm;
