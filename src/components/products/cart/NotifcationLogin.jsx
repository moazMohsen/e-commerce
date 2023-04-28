import React, { useContext } from "react";
import NotificationContext from "../../../context/NotificationContext";
import styled from "styled-components";
import { motion } from "framer-motion";

export const NotifcationLogin = () => {
  const { notificationLogin } = useContext(NotificationContext);

  return (
    notificationLogin && (
      <Wrapper
        as={motion.div}
        initial={{ y: 30, x: "50%", opacity: 0 }}
        animate={{ y: 0, x: "50%", opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h5>
          <span>Please!!!</span>log in to add items to your cart
        </h5>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 300px;
  bottom: 15px;
  right: 50%;
  transform: translateX(50%);
  background: ${({ theme }) => theme.gradientBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 15px;
  z-index: 1000;
  text-transform: capitalize;
  h5 {
    text-align: center;
    font-weight: 400;
    color: ${({ theme }) => theme.mainText};
    text-align: center;
    font-weight: 400;
    color: #fff;
    font-size: 16px;
    span {
      display: block;
      margin-bottom: 10px;
      font-size: 19px;
      font-weight: 600;
    }
  }
`;
