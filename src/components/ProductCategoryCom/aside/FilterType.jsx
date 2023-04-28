import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiCategory } from "react-icons/bi";
import BtnHeader from "./BtnHeader";
import useMediaQuery from "../../../hook/useMediaQuery";
import { AsideContainer } from "../../../StyledComponents";
import { motion } from "framer-motion";

const FilterType = () => {
  const types = ["new", "renewed", "refurbished", "used"];
  const [open, SetOpen] = useState(false);
  const mediaQuery = useMediaQuery("(min-width:991px)");

  useEffect(() => {
    mediaQuery ? SetOpen(true) : SetOpen(false);
  }, [mediaQuery]);
  return (
    <AsideContainer
      as={motion.div}
      animate={{ height: open ? "280px" : "81px" }}
      transition={{ duration: 0.3 }}
    >
      <BtnHeader header={"Filter by type"} onClick={() => SetOpen(!open)}>
        <BiCategory />
      </BtnHeader>
      {open && (
        <Form>
          {types.map((type, i) => (
            <div key={i}>
              <input type="checkbox" id={type} name={type} value={type} />
              <label htmlFor={type}>{type}</label>
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
export default FilterType;
