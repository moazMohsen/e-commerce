import React from "react";
import { Container } from "../StyledComponents";
import styled from "styled-components";
import CartProductTable from "../components/products/cart/CartProductTable";
import CartPriceBox from "../components/products/cart/CartPriceBox";
const CartPage = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <div className="tableContainer">
            <CartProductTable />
          </div>
          <CartPriceBox />
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: start;
  .tableContainer {
    overflow-y: auto;
  }
  @media (min-width: 991.98px) {
    & {
      grid-template-columns: 1fr 300px;
    }
  }
`;

export default CartPage;
