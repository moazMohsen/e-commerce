import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logoLight, logoDark } from "../../images/index_img";
import {
  CartBtn,
  FavoriteBtn,
  RegistrationBtn,
  Mode,
  SearchBar,
} from "./index_nav";
import { Container } from "../../StyledComponents";

const NavBar = () => {
  const mode = useSelector((state) => state.mode.mode);
  return (
    <Nav>
      <CustomeContainer>
        <Link to="/">
          <Logo src={mode ? logoDark : logoLight} alt="logo" />
        </Link>
        <Control>
          <Mode />
          <RegistrationBtn />
          <FavoriteBtn />
          <CartBtn />
        </Control>
        <SearchBar />
      </CustomeContainer>
    </Nav>
  );
};
const Nav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const CustomeContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;

  @media (min-width: 991.98px) {
    & {
      flex-wrap: nowrap;
      gap: 25px;
    }
  }
`;

const Logo = styled.img`
  width: 90px;
  @media (min-width: 767.98px) {
    & {
      width: 120px;
    }
  }
`;

const Control = styled.div`
  display: flex;
  align-items: stretch;
  gap: 7px;
  @media (min-width: 375px) {
    gap: 15px;
  }
  @media (min-width: 991.98px) {
    order: 3;
  }

  button {
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 7px;
    background: ${({ theme }) => theme.gradient};
    color: white;
    padding: 5px 5px;
    cursor: pointer;
    text-transform: capitalize;
    svg {
      font-size: 22px;
    }
    @media (min-width: 767.98px) {
      & {
        padding: 5px 10px;
      }
    }
  }
`;

export default NavBar;
