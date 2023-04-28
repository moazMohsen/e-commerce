import React, { useEffect, useState } from "react";
//
import { FiUser } from "react-icons/fi";
//
import styled from "styled-components";
//
import { useDispatch, useSelector } from "react-redux";

import { setUserLogin, logOut } from "../../app/userSlice";
import PopUpReg from "./PopUpReg";

const RegistrationBtn = () => {
  const dispatch = useDispatch();

  const [popUpReg, setPopUpReg] = useState(false);
  const userName = useSelector((state) => state.user.user.userName);

  useEffect(() => {
    dispatch(setUserLogin());
  }, []);

  return (
    <>
      {!userName ? (
        <>
          <Button onClick={() => setPopUpReg(!popUpReg)}>
            <FiUser />
          </Button>
        </>
      ) : (
        <Button
          onClick={() => {
            dispatch(logOut());
            setPopUpReg(false);
          }}
        >
          <FiUser />
          <div>
            <span className="laptop">log out</span>
            <span className="phone"> {userName.charAt(0)}</span>
            <span className="laptop"> {userName}</span>
          </div>
        </Button>
      )}
      {popUpReg && <PopUpReg onClose={() => setPopUpReg(false)} />}
    </>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  white-space: nowrap;
  font-weight: 600;
  color: ${({ theme }) => theme.mainText} !important;
  @media (min-width: 767.98px) {
    & {
      gap: 7px;
    }
  }
  div {
    font-weight: bold;
    font-size: 17px;
    white-space: pre;
    @media (min-width: 991.98px) {
      & {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }

    span {
      font-size: 13px;
      &.phone {
        position: absolute;
        top: -12px;
        right: -12px;
        background-color: #2b38d1;
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
        @media (min-width: 767.98px) {
          & {
            display: none;
          }
        }
      }
      &.laptop {
        display: none;
        @media (min-width: 767.98px) {
          & {
            display: flex;
          }
        }
      }
    }
  }
`;

export default RegistrationBtn;
