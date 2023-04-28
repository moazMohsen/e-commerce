import React from "react";
import styled from "styled-components";
import { Container } from "../../StyledComponents";

const FlatBanner = ({ image, header, paragraph }) => {
  return (
    <ColorBg>
      <Parallax style={{ backgroundImage: `url(${image})` }}>
        <CustomeContainer>
          <div>
            <h4>{header}</h4>
            <p>{paragraph}</p>
            <Button>shop now</Button>
          </div>
        </CustomeContainer>
      </Parallax>
    </ColorBg>
  );
};

const ColorBg = styled.div`
  background: ${({ theme }) => theme.gradient};
`;
const Parallax = styled.div`
  width: 100%;
  height: 45vh;

  background-position: 85% 78%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  position: relative;
  z-index: 1;
  @media (min-width: 767.98px) {
    & {
      background-size: 70%;
    }
  }
  @media (min-width: 1199.98px) {
    & {
      background-size: 50%;
    }
  }
`;
const CustomeContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  h4 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 23px;
    color: ${({ theme }) => theme.mainText};
    @media (min-width: 767.98px) {
      & {
        font-size: 44px;
      }
    }
    @media (min-width: 1199.98px) {
      & {
        font-size: 61px;
      }
    }
  }
  p {
    line-height: 1.3;
    color: ${({ theme }) => theme.primeText};
    @media (min-width: 767.98px) {
      & {
        width: 50%;
      }
    }
  }
`;
const Button = styled.button`
  outline: none;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.gradientBackground};
  padding: 15px;
  border-radius: 20px;
  color: ${({ theme }) => theme.mainText};
  text-transform: capitalize;
  font-size: 15px;
  margin-top: 10px;
  font-weight: 600;

  cursor: pointer;
  position: relative;
  overflow: hidden;
  @media (min-width: 1199.98px) {
    & {
      width: 30%;
    }
  }
  ::after {
    content: "";
    width: 40px;
    height: 80px;
    top: 50%;
    left: -50px;
    transform: translatey(-50%) rotate(30deg);
    background: #008cff5e;
    opacity: 0.2;
    position: absolute;
    transition: ease-in-out 0.3s;
  }
  :hover {
    ::after {
      transform: translate(900%, -50%) rotate(30deg);
    }
  }
  :hover {
    opacity: 0.9;
  }
`;
export default FlatBanner;
