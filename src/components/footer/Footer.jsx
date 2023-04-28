import React from "react";
import styled from "styled-components";
import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";
import { Container } from "../../StyledComponents";

const Footer = () => {
  return (
    <FooterCo>
      <Container>
        <TopFooter />
        <BottomFooter />
      </Container>
    </FooterCo>
  );
};

const FooterCo = styled.footer`
  background: ${({ theme }) => theme.gradientBig};
  padding: 20px 0;
`;
export default Footer;
