import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BtnHeader from "./BtnHeader";
import { MdPhotoFilter } from "react-icons/md";
import useMediaQuery from "../../../hook/useMediaQuery";
import { AsideContainer } from "../../../StyledComponents";
import { motion } from "framer-motion";

const FilterBrand = () => {
  const brands = ["apple", "samsung", "toshiba", "panasonic"];
  const [open, SetOpen] = useState(false);

  const mediaQuery = useMediaQuery("(min-width:991px");
  useEffect(() => {
    mediaQuery ? SetOpen(true) : SetOpen(false);
  }, [mediaQuery]);
  return (
    <AsideContainer
      as={motion.div}
      animate={{ height: open ? "280px" : "81px" }}
      transition={{ duration: 0.3 }}
    >
      <BtnHeader header={"filter Brand"} onClick={() => SetOpen(!open)}>
        <MdPhotoFilter />
      </BtnHeader>
      {open && (
        <Form>
          {brands.map((brand, i) => (
            <div key={i}>
              <input type="checkbox" id={brand} name={brand} value={brand} />
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        </Form>
      )}
    </AsideContainer>
  );
};

const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.gradientBig};
  border-radius: 15px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  font-size: 17px;
  div {
    cursor: pointer;
    :not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.border};
    }
    display: flex;
    align-items: center;
    gap: 5px;
    input {
      margin-left: 10px;
    }
    input[type="checkbox"] {
      accent-color: ${({ theme }) => theme.border};
    }
    label {
      cursor: pointer;
      padding: 10px;
      color: ${({ theme }) => theme.mainText};
      :hover {
        color: ${({ theme }) => theme.primeText};
      }
    }
  }
`;
export default FilterBrand;
