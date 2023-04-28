import React, { useContext } from "react";
import NotificationContext from "../../../context/NotificationContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Notifcation = () => {
  const { notificationCart } = useContext(NotificationContext);

  return (
    Object.keys(notificationCart).length > 0 && (
      <Wrapper
        as={motion.div}
        initial={{ x: 60, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="image">
          <img src={notificationCart.image} alt="" />
        </div>
        <div className="content">
          <h3>{notificationCart.name}</h3>
          <p>Product has been added to cart!</p>
          <Link to="/CartPage">view cart</Link>
        </div>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 300px;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.gradientOverlay};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 15px;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: capitalize;

  .image {
    width: 70px;
    height: 70px;
    flex: 30%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .content {
    flex-basis: 70%;
    h3 {
      font-size: 15px;
      font-weight: 500;
      line-height: 1.3;
      color: ${({ theme }) => theme.mainText};
    }
    p {
      font-size: 12px;
      white-space: nowrap;
      margin: 10px 0 0px;
      color: ${({ theme }) => theme.primeText};
    }
    a {
      width: 100%;
      display: inline-block;
      text-align: end;
      font-size: 11.3px;
      text-decoration: underline;
    }
  }
`;

export default Notifcation;
