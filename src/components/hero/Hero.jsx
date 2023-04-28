import React from "react";
import styled from "styled-components";
import Aside from "./aside/Aside";
import Banners from "./banner/Banners";
import { Container } from "../../StyledComponents";
const Hero = () => {
  return (
    <Container>
      <Grid>
        <Banners />
        <Aside />
      </Grid>
    </Container>
  );
};
const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-areas:
    "aside"
    "banner"
    "bottomBanner";
  grid-template-rows: auto auto 80px;
  @media (min-width: 767.98px) {
    & {
      grid-template-areas:
        "aside aside"
        "banner bottomBanner";
      grid-template-columns: 1fr 250px;
      grid-template-rows: auto;
    }
  }
  @media (min-width: 991.98px) {
    & {
      grid-template-columns: 1fr 3fr;
      grid-template-rows: 350px 1fr;
      grid-template-areas: "aside banner" "aside bottomBanner";
    }
  }
`;

export default Hero;
