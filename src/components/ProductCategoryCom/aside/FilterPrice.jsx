import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import BtnHeader from "./BtnHeader";
import useMediaQuery from "../../../hook/useMediaQuery";
import { AsideContainer } from "../../../StyledComponents";
import { motion } from "framer-motion";

const FilterPrice = () => {
  const [maxRange, setMaxRange] = useState(7500);
  const [minRange, setMinRange] = useState(2500);
  const rangeProgress = useRef();
  const minInput = useRef();
  const maxInput = useRef();
  let priceGap = 2000,
    maxValue = 10000;

  const filterPrice = (e, pos) => {
    let range = e.target.value;
    console.log(range);
    if (pos === "max") {
      setMaxRange(range);
    } else {
      setMinRange(range);
    }
    if (+maxRange - +minRange < priceGap) {
      if (e.target.className === "range-min") {
        if (+maxRange - priceGap > 0) {
          setMinRange(+maxRange - priceGap);
        }
      } else {
        if (+maxRange + priceGap > 1000) {
          setMaxRange(+minRange + priceGap);
        }
      }
    } else {
      rangeProgress.current.style.left = `${(+minRange / +maxValue) * 100}%`;
      rangeProgress.current.style.right = `${
        100 - (+maxRange / +maxValue) * 100
      }%`;
    }
  };
  const [open, SetOpen] = useState(false);
  const mediaQuery = useMediaQuery("(min-width:991px)");

  useEffect(() => {
    mediaQuery ? SetOpen(true) : SetOpen(false);
  }, [mediaQuery]);

  return (
    <AsideContainer
      as={motion.div}
      animate={{ height: open ? "183px" : "81px" }}
      transition={{ duration: 0.3 }}
    >
      <BtnHeader header={"filter price"} onClick={() => SetOpen(!open)}>
        <RiMoneyDollarCircleLine />
      </BtnHeader>
      {open && (
        <Form>
          <div className="wrapper">
            <div className="slider">
              <div className="progress" ref={rangeProgress}></div>
            </div>
            <div className="input-range">
              <input
                ref={minInput}
                className="range-max"
                type="range"
                min="0"
                max="10000"
                step="0"
                value={minRange}
                onChange={(e) => filterPrice(e, "min")}
              />
              <input
                ref={maxInput}
                className="range-min"
                type="range"
                min="0"
                max="10000"
                step="0"
                value={maxRange}
                onChange={(e) => filterPrice(e, "max")}
              />
            </div>
          </div>
          <div className="priceRange">
            price: {minRange}$ - {maxRange}$
          </div>
        </Form>
      )}
    </AsideContainer>
  );
};

const Form = styled.form`
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  margin-top: 10px;
  .wrapper {
    padding: 30px 20px 15px;
  }
  .priceRange {
    padding: 0px 30px 15px;
    color: ${({ theme }) => theme.mainText};
  }
  .slider {
    height: 5px;
    position: relative;
    background: ${({ theme }) => theme.border};
    border-radius: 5px;
    overflow: hidden;
    .progress {
      height: 100%;
      left: 25%;
      right: 25%;
      position: absolute;
      border-radius: 5px;
      background: ${({ theme }) => theme.primeText};
    }
  }
  .input-range {
    position: relative;
    input {
      position: absolute;
      width: 100%;
      height: 5px;
      top: -5px;
      background: none;
      pointer-events: none;
      appearance: none;
    }
    input[type="range"]::-webkit-slider-thumb {
      height: 17px;
      width: 17px;
      border-radius: 50%;
      background: ${({ theme }) => theme.primeText};
      pointer-events: auto;
      -webkit-appearance: none;
    }
  }
`;
export default FilterPrice;
