import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import ProductsCart from "../products/ProductsCart";

const MinProductCategory = () => {
  const [products] = useSelector((state) => state.product.products);

  return (
    <Wrapper className="grid">
      {Object.keys(products).map((category) =>
        products[category].map((product) => (
          <ProductsCart
            key={product.id}
            product={product}
            category={category}
          />
        ))
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &.grid {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: max-content;
    gap: 10px;
    position: initial !important;
    @media (min-width: 767.98px) {
      & {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media (min-width: 1199.98px) {
      & {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    .filter-item {
      position: relative !important;
    }
  }
`;
export default MinProductCategory;
