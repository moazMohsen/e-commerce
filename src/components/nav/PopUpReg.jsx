import React, { useState } from "react";
//
import { useDispatch, useSelector } from "react-redux";
//
import styled from "styled-components";
import { Overlay } from "../../StyledComponents";
//
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
//

import SignUpForm from "./registrationForm/SignUpForm";
import LogInForm from "./registrationForm/LogInForm";
import { loginFacebook, loginGoogle } from "../../app/userSlice";
import { motion } from "framer-motion";

const PopUpReg = ({ onClose }) => {
  const [signup, setSignup] = useState(false);
  const user = useSelector((state) => state.user.user.userName);

  const dispatch = useDispatch();
  //
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handelLoginGoogle = () => {
    dispatch(loginGoogle());
  };
  //
  const handelLoginFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    <>
      {!user && (
        <Overlay
          onClick={handleOverlayClick}
          as={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Container
            as={motion.div}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <AiFillCloseCircle onClick={onClose} />
            <h1>welcome to uminx store</h1>
            {/* login */}
            {!signup && (
              <>
                <LogInForm />
                <Button onClick={() => setSignup(true)}>create acount</Button>
              </>
            )}
            {/* signup */}
            {signup && <SignUpForm />}

            <p>or</p>
            <BtnContainer>
              <Button onClick={handelLoginGoogle}>
                <FcGoogle />
                continue with google
              </Button>
              <Button onClick={handelLoginFacebook}>
                <BsFacebook />
                continue with facebook
              </Button>
            </BtnContainer>
            <Privace>
              By continuing, you agree to uminx{" "}
              <a href="/">Terms of Service,</a>
              and acknowledge you've read our <a href="/">Privacy Policy,</a>
              <a href="/">Notice at collection</a>
            </Privace>
          </Container>
        </Overlay>
      )}
    </>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 999;
  background: ${({ theme }) => theme.gradientOverlay};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 90%;

  @media (min-width: 767.98px) {
    & {
      width: 45%;
      min-height: 80%;
    }
  }
  @media (min-width: 991.98px) {
    & {
      width: 35%;
    }
  }
  @media (min-width: 1199.98px) {
    & {
      width: 28%;
    }
  }

  h1 {
    text-align: center;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 14px;
    @media (min-width: 423.98px) {
      & {
        font-size: 16px;
      }
    }
    @media (min-width: 1199.98px) {
      & {
        font-size: 18px;
      }
    }
  }
  p:first-of-type {
    text-transform: uppercase;
    font-size: 18px;
  }
  & > svg:nth-child(1) {
    position: absolute;
    top: 00px;
    right: 0;
    font-size: 40px;
    cursor: pointer;
    transition: all 0.5s;
    :hover {
      opacity: 0.8;
    }
  }
  & > button {
    width: 100%;
    border-radius: 20px !important;
    font-size: 14px;
    justify-content: center;
    @media (min-width: 991.98px) {
      & {
        font-size: 18px;
      }
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 15px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px !important;
  color: ${({ theme }) => theme.mainText} !important;
  line-height: 1.3;
  font-size: 11px;
  @media (min-width: 991.98px) {
    & {
      font-size: 12.5px;
    }
  }
  svg {
    font-size: 35px !important;
  }
`;
const Privace = styled.p`
  font-size: 11px;
  text-align: center;
  text-transform: capitalize;
  @media (min-width: 991.98px) {
    & {
      font-size: 12px;
    }
  }
  a {
    text-decoration: underline;
    font-weight: 500;
    color: ${({ theme }) => theme.secondText};
  }
`;
export default PopUpReg;
