import React from "react";
import { Container } from "../../StyledComponents";
import { banner1, banner2, banner3 } from "../../images/index_img";
import styled from "styled-components";

const infos = [
  {
    image: banner1,
    header: "Gamepad",
    p1: "Save 20% Product",
    p2: "Free Shipping 20km Radius",
  },
  {
    image: banner2,
    header: "Camera",
    p1: "Quality 2K Ultra",
    p2: "Save 20% On Today’s",
  },
  {
    image: banner3,
    header: "Save 20%",
    p1: "Tablet Pro IPS",
    p2: "Top Quality Products",
  },
];
const Banners3 = () => {
  return (
    <CustomeContainer>
      {infos.map((info) => (
        <div className="wrapper" key={info.header}>
          <img src={info.image} alt="" />
          <div className="contnet">
            <h4>{info.header}</h4>
            <p>{info.p1}</p>
            <p>{info.p2}</p>
          </div>
        </div>
      ))}
    </CustomeContainer>
  );
};
const CustomeContainer = styled(Container)`
  display: grid;
  gap: 10px;
  text-transform: capitalize;
  @media (min-width: 991.98px) {
    grid-template-columns: repeat(3, 1fr);
  }
  .wrapper {
    position: relative;
    img {
      width: 100%;
    }
    .contnet {
      position: absolute;
      top: 50%;
      transform: translatey(-50%);
      left: 30px;
      h4 {
        font-weight: 500;
        font-size: 18px;
      }
      p {
        margin-bottom: 10px;
      }
    }
  }
`;

export default Banners3;
