import React, { useEffect, useState, useRef } from "react";

import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import { FiChevronDown, FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const products = useSelector((state) => state.product.products);
  const [openCategory, setOpenCategory] = useState(false);
  const [filter, setFilter] = useState([]);
  const [icon, setIcon] = useState(false);
  // DrowpDown
  const btnRef = useRef(null);
  const btnSearch = useRef(null);

  const closeDrowpDown = (e) => {
    if (e.target !== btnRef.current && e.target !== btnSearch.current) {
      setOpenCategory(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", closeDrowpDown);
    return () => document.removeEventListener("click", closeDrowpDown);
  }, []);

  // searchFilter

  const searchFilter = (e) => {
    const query = e.target.value;
    query ? setIcon(false) : setIcon(true);

    setFilter(Object.keys(products[0]));

    let upDateList = [...Object.keys(products[0])];
    upDateList = upDateList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilter(upDateList);
  };

  return (
    <Container>
      <CategoryContainer>
        <Button
          ref={btnRef}
          onClick={() => {
            setOpenCategory(!openCategory);
            setFilter(Object.keys(products[0]));
          }}
        >
          all categories
          <FiChevronDown />
        </Button>
        {openCategory && (
          <SearchCategoryContainer
            as={motion.div}
            animate={{
              y: -35,
              opacity: 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <InputContainer>
              <SearchInputCategory
                type="search"
                placeholder="serach..."
                ref={btnSearch}
                onChange={(e) => searchFilter(e)}
              />
              {icon && <FiSearch />}
            </InputContainer>
            <CategoryUL>
              {filter.map((category, i) => (
                <li key={i}>{category}</li>
              ))}
            </CategoryUL>
          </SearchCategoryContainer>
        )}
      </CategoryContainer>
      <SearchInputProduct type="search" placeholder="search for products..." />
      <Submit type="submit" value="search" />
    </Container>
  );
};

const sharedStyle = css`
  background: ${({ theme }) => theme.gradient};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 10px 12px;
  color: ${({ theme }) => theme.mainText};
  width: 140px;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: flex-end;
  @media (min-width: 991.98px) {
    & {
      flex-basis: 50%;
    }
  }
`;
const CategoryContainer = styled.div`
  display: none;
  position: relative;
  @media (min-width: 767.98px) {
    & {
      display: block;
    }
  }
`;
const Button = styled.button`
  ${sharedStyle}
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 5px 0px 0px 5px;
  border-right: none;
  svg {
    font-size: 15px;
  }
`;
const SearchCategoryContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: 100px;
  opacity: 0;
  background: ${({ theme }) => theme.gradientBackground};
  padding: 10px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.border};
  @media (min-width: 991.98px) {
    & {
      top: 105px;
    }
  }
`;
const InputContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    transform: translatey(-50%);
    right: 8px;
    font-size: 13px;
    color: ${({ theme }) => theme.primeText};
  }
`;
const SearchInputCategory = styled.input`
  border: 1px solid ${({ theme }) => theme.border};
  padding: 10px 12px;
  color: ${({ theme }) => theme.mainText};
  background-color: transparent;
  border-radius: 7px;
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.primeText};
  }
`;
const CategoryUL = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.mainText};

  li {
    padding: 8px;
    white-space: nowrap;
    cursor: pointer;
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.border};
    }
  }
`;
const SearchInputProduct = styled.input`
  padding: 12px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.border};
  border-right: none;
  background-color: transparent;
  color: ${({ theme }) => theme.mainText};
  width: 100%;
  border-radius: 5px 0px 0px 5px;
  @media (min-width: 767.98px) {
    & {
      border-radius: 0;
    }
  }

  ::placeholder {
    color: ${({ theme }) => theme.primeText};
  }
`;
const Submit = styled.input`
  ${sharedStyle}
  border-left:none;
  border-radius: 0px 5px 5px 0px;
`;

export default SearchBar;
