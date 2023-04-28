import React from "react";
import styled from "styled-components";
import { Container } from "../../StyledComponents";

const TopFooter = () => {
  return (
    <Grid>
      <Wrapper>
        <h4>About the store</h4>
        <p>Got Question? Call us 24/7</p>
        <p>(123) 456-7890</p>
        <p>268 St, South New York/NY 98944, United States</p>
        <p>Customersupport@example.com</p>
        <p>Info@example.com</p>
      </Wrapper>
      <Wrapper>
        <h4>Quick links</h4>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Feedback</a>
          </li>
        </ul>
      </Wrapper>
      <Wrapper>
        <h4>Subscribe to the newsletter</h4>
        <p>
          Join 20.000+ subscribers and get a new discount coupon on every
          Saturday. Updates information on Sales and Offers.
        </p>
        <form action="/signup" method="post">
          <input type="email" name="email" placeholder="Email Address" />
          <button type="submit">Sign Up</button>
        </form>
        <p>Subscribe for Uminex and get 20% off your first purchase.</p>
      </Wrapper>
    </Grid>
  );
};
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 20px;
  gap: 20px;

  @media (min-width: 767.98px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 991.98px) {
    & {
      grid-template-columns: 1fr 1fr 2fr;
    }
  }
`;
const Wrapper = styled.div`
  text-transform: capitalize;
  padding-bottom: 10px;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }
  @media (min-width: 991.98px) {
    &:not(:last-child) {
      border-bottom: none;
    }
  }

  h4 {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.mainText};
  }
  p {
    margin: 8px 0;
    font-size: 14px;
    font-weight: 400;

    color: ${({ theme }) => theme.primeText};
  }
  ul {
    display: flex;
    gap: 8px;
    flex-direction: column;
    li {
      font-size: 14px;
      font-weight: 400;
      a {
        color: ${({ theme }) => theme.primeText};
      }
    }
  }
  form {
    width: 100%;
    display: flex;
    input {
      flex: 1;
      outline: none;
      padding: 10px;
      border: none;
    }
    button {
      color: ${({ theme }) => theme.mainText};
      border: 1px solid ${({ theme }) => theme.border};
      background: ${({ theme }) => theme.gradient};
      padding: 15px 20px;
      cursor: pointer;
    }
  }
`;
export default TopFooter;
