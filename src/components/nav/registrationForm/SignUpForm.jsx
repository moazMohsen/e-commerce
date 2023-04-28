import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  clearPasswordErrMsg,
  clearEmaillErrMsg,
  clearUserErrMsg,
  clearonfirmPasswordMsg,
  signUpForm,
} from "../../../app/userSlice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const errMsg = useSelector((state) => state.user.errMsg);

  const formRef = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    dispatch(signUpForm(formData));
  };

  return (
    <Form ref={formRef} id="form" onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={() => dispatch(clearUserErrMsg())}
      />
      {errMsg.userErrMsg && <div className="errMes">{errMsg.userErrMsg}</div>}
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
      <input
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
        onChange={() => dispatch(clearonfirmPasswordMsg())}
      />
      {errMsg.confirmPassword && (
        <div className="errMes">{errMsg.confirmPassword}</div>
      )}
      <input type="submit" value="sign up" />
    </Form>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  input {
    border: none;
    background-color: transparent;
    padding: 10px 3px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    color: #fff;
    outline: none;

    ::placeholder {
      color: #fff;
      text-transform: capitalize;
    }
    &[type="submit"] {
      text-transform: capitalize;
      background: ${({ theme }) => theme.gradient};
      color: ${({ theme }) => theme.mainText} !important;
      border-radius: 20px;
      font-size: 14px;
      cursor: pointer;
      margin-top: 10px;
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

export default SignUpForm;
