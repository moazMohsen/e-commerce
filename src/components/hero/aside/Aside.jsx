import { useSelector } from "react-redux";
import styled from "styled-components";
import { FiBookmark, FiChevronRight } from "react-icons/fi";
import { FaHotjar, FaStar, FaRegGem, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import BtnHeader from "../../ProductCategoryCom/aside/BtnHeader";
import { useEffect, useState } from "react";
import useMediaQuery from "../../../hook/useMediaQuery";
import { motion } from "framer-motion";
const Aside = () => {
  const products = useSelector((state) => state.product.products);
  const [open, SetOpen] = useState(false);

  const mediaQuery = useMediaQuery("(min-width:991px)");

  useEffect(() => {
    mediaQuery ? SetOpen(true) : SetOpen(false);
  }, [mediaQuery]);

  return (
    <Container>
      <BtnHeader header={"category"} onClick={() => SetOpen(!open)}>
        <FiBookmark />
      </BtnHeader>
      {open && (
        <Ul
          as={motion.ul}
          initial={{ height: 0 }}
          animate={{ height: open ? "281px" : "0" }}
          transition={{ duration: 0.3 }}
        >
          <li>
            <Link to={`/productCategoryPage/?category=all`}>
              <FiChevronRight />
              <span>all</span>
            </Link>
          </li>
          {Object.keys(products[0]).map((category, i) => (
            <li key={i}>
              <Link
                to={`/productCategoryPage/?category=${category.replace(
                  /&|\s/g,
                  ""
                )}`}
              >
                <FiChevronRight />
                <span>{category}</span>
              </Link>
            </li>
          ))}
        </Ul>
      )}

      <Card>
        <div>
          <FaHotjar />
          <span>best discount</span>
        </div>
        <div>
          <FaStar />
          <span>best seller</span>
        </div>
        <div>
          <FaRegGem />
          <span>recommended</span>
        </div>
        <div>
          <FaHeart />
          <span>featured products</span>
        </div>
      </Card>
    </Container>
  );
};

const Container = styled.aside`
  grid-area: aside;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.gradientBig};
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  button {
    margin-bottom: 10px;
  }
`;
const Ul = styled.ul`
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.gradientBig};
  border-radius: 15px;
  margin: 0 0 10px;
  display: flex;
  flex-direction: column;
  font-size: 17px;
  overflow: hidden;

  li {
    padding: 10px;
    cursor: pointer;
    :not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.border};
    }
    a {
      display: flex;
      align-items: center;
      gap: 5px;
      text-transform: capitalize;
      color: ${({ theme }) => theme.mainText};
      svg {
        color: ${({ theme }) => theme.primeText};
      }
    }
  }

  @media (min-width: 991.98px) {
    & {
      white-space: nowrap;
      display: flex;
    }
  }
`;
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  div {
    color: ${({ theme }) => theme.mainText};
    border-radius: 15px;
    flex-basis: calc(50% - 10px);
    flex-grow: 1;
    gap: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
    padding: 5px;
    cursor: pointer;
    svg {
      color: #fff;
    }
    :hover {
      :nth-child(1) {
        background: linear-gradient(345deg, #f7706200 30%, #ff0000 126%);
      }
      :nth-child(2) {
        background: linear-gradient(345deg, #f7706200 30%, #ff00e0 126%);
      }
      :nth-child(3) {
        background: linear-gradient(345deg, #f7706200 30%, #00c4ff 126%);
      }
      :nth-child(4) {
        background: linear-gradient(345deg, #f7706200 30%, #ffd400 126%);
      }
    }

    span {
      font-size: 10px;
      font-weight: 500;
      white-space: nowrap;
    }
    :nth-child(1) {
      background-image: linear-gradient(325deg, #f7706200 30%, #ff0000 126%);
      border: 1px solid #ff0000;
    }
    :nth-child(2) {
      background: linear-gradient(325deg, #f7706200 30%, #ff00e0 126%);
      border: 1px solid #ff00e0;
    }
    :nth-child(3) {
      background: linear-gradient(325deg, #f7706200 30%, #00c4ff 126%);
      border: 1px solid #00c4ff;
    }
    :nth-child(4) {
      background: linear-gradient(325deg, #f7706200 30%, #ffd400 126%);
      border: 1px solid #ffd400;
    }
  }
  @media (min-width: 767.98px) {
    & {
      flex-wrap: nowrap;
      > div {
        flex-direction: row;
        padding: 10px;
      }
    }
    svg {
      flex-basis: 20%;
    }

    span {
      flex: 1;
    }
  }
  @media (min-width: 991.98px) {
    & {
      flex-direction: column;
      div {
        width: 100%;
        span {
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
`;
export default Aside;
