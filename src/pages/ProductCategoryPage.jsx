import React, { useRef, useEffect } from "react";

import styled from "styled-components";
import Banners3 from "../components/banners/Banners3";
import AsideProductCategory from "../components/ProductCategoryCom/aside/AsideProductCategory";
import MinProductCategory from "../components/ProductCategoryCom/MinProductCategory";
import { Container } from "../StyledComponents";

//
import Isotope from "isotope-layout";

const ProductCategoryPage = () => {
  const isotope = useRef();

  Isotope.LayoutMode.create("none", {
    _resetLayout: function () {
      // do nothing
    },
  });

  useEffect(() => {
    isotope.current = new Isotope(".grid", {
      itemSelector: ".filter-item",
      layoutMode: "none",
    });

    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const filterValue =
      searchParams.get("category") === "all"
        ? "*"
        : `.${searchParams.get("category")}`;

    isotope.current.arrange({ filter: filterValue });
  }, []);

  const handelFilterKeyChange = (e) => {
    const isSelected = e.target.checked;
    const filterValue = e.target.value.replace(/&|\s/g, "");
    const FilterSelected = isSelected ? filterValue : "all";

    isotope.current.arrange({ filter: FilterSelected });
  };

  return (
    <>
      <Container>
        <Grid>
          <AsideProductCategory isotope={handelFilterKeyChange} />
          <MinProductCategory />
        </Grid>
      </Container>
      <Banners3 />
    </>
  );
};
const Grid = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 991.98px) {
    & {
      grid-template-columns: 1fr 2fr;
    }
  }
  @media (min-width: 1199.98px) {
    & {
      grid-template-columns: 1fr 3fr;
    }
  }
`;

export default ProductCategoryPage;
