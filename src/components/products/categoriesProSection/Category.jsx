import React from "react";
import styled from "styled-components";
import ProductsCart from "../ProductsCart";
//
import { FiChevronRight } from "react-icons/fi";
//  Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperCategory.scss";
//
import CategoryBanner from "./CategoryBanner";
import { Navigation } from "swiper";

const Category = ({ categoryName, products }) => {
  return (
    <Container>
      <div className="header">
        <h2>{categoryName}</h2>
        <a href="#/">
          <span>view more</span>
          <FiChevronRight />
        </a>
      </div>
      <div className="wraper">
        <CategoryBanner categoryName={categoryName} />
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={2}
          breakpoints={{
            991: {
              slidesPerView: 1,
            },
            1199: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="categorySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductsCart product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 10px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.gradient};
  min-width: 0;
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px 15px;
    background: ${({ theme }) => theme.gradient};
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.mainText};
    border-radius: 20px;
    @media (min-width: 424.98px) {
      & {
        flex-direction: row;
      }
    }
    h2 {
      text-transform: capitalize;
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 5px;
      @media (min-width: 424.98px) {
        & {
          margin-bottom: 0;
        }
      }
    }
    a {
      align-self: flex-end;
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${({ theme }) => theme.primeText};
    }
  }

  .wraper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (min-width: 767.98px) {
      & {
        flex-direction: row;
      }
    }
    @media (min-width: 991.98px) {
      & {
        height: 300px;
      }
    }
  }
`;
export default Category;
