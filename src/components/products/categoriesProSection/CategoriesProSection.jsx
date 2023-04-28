import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import { Container } from "../../../StyledComponents";
import styled from "styled-components";
import HeadingCo from "../HeadingCo";
const CategoriesProSection = () => {
  const products = useSelector((state) => state.product.products[0]);

  return (
    <Container>
      <HeadingCo
        title={"category"}
        paragraph={"DON'T MISS OUT ON THE BEST DISCOUNT OF THE DAY!"}
      />
      <Warpper>
        {Object.entries(products).map(([categoryName, products]) => (
          <Category
            key={categoryName}
            categoryName={categoryName}
            products={products}
          />
        ))}
      </Warpper>
    </Container>
  );
};

const Warpper = styled.div`
  display: grid;
  gap: 60px 30px;
  @media (min-width: 991.98px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default CategoriesProSection;
