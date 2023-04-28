import React from "react";
import styled from "styled-components";
import {
  CategoryList,
  FilterBrand,
  FilterPrice,
  FilterType,
} from "./index_aside";
const AsideProductCategory = ({ isotope }) => {
  return (
    <Wrapper>
      <CategoryList isotope={isotope} />
      <FilterPrice />
      <FilterType />
      <FilterBrand />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (min-width: 767.98px) {
    & {
      flex-wrap: wrap;
      flex-direction: row;
    }
  }
  @media (min-width: 991.98px) {
    & {
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
`;

export default AsideProductCategory;
