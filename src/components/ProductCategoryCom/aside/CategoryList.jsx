import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FiBookmark } from "react-icons/fi";
import BtnHeader from "./BtnHeader";
import { useSearchParams } from "react-router-dom";
import useMediaQuery from "../../../hook/useMediaQuery";
import { AsideContainer } from "../../../StyledComponents";
import { motion } from "framer-motion";

const CategoryList = ({ isotope }) => {
  const products = useSelector((state) => state.product.products);
  const [searchParams, setSearchParams] = useSearchParams();
  const categorypram = searchParams.get("category");
  const [open, SetOpen] = useState(false);
  const mediaQuery = useMediaQuery("(min-width:991px)");

  useEffect(() => {
    mediaQuery ? SetOpen(true) : SetOpen(false);
  }, [mediaQuery]);

  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      searchParams.set("category", name.replace(/&|\s/g, ""));
    } else {
      searchParams.delete("category");
    }
    setSearchParams(searchParams);
  };

  return (
    <AsideContainer
      as={motion.div}
      animate={{ height: open ? "373px" : "81px" }}
      transition={{ duration: 0.3 }}
    >
      <BtnHeader header={"category"} onClick={() => SetOpen(!open)}>
        <FiBookmark />
      </BtnHeader>
      {open && (
        <Form>
          <div>
            <input
              type="checkbox"
              id={"all"}
              name={"all"}
              value="*"
              checked={"all" === categorypram || ""}
              onChange={(e) => {
                handleCheckBoxChange(e);
                isotope(e);
              }}
            />
            <label htmlFor={"all"}>all</label>
          </div>
          {Object.keys(products[0]).map((category, i) => (
            <div key={i}>
              <input
                type="checkbox"
                id={category}
                name={category}
                value={`.${category}`}
                checked={category.replace(/&|\s/g, "") === categorypram || ""}
                onChange={(e) => {
                  handleCheckBoxChange(e);
                  isotope(e);
                }}
              />
              <label htmlFor={category}>{category}</label>
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
    text-transform: capitalize;
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
export default CategoryList;
