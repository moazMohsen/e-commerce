import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Container } from "../../../StyledComponents";

import OffersBanner from "./OffersBanner";
import ProductsCart from "../ProductsCart";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./swiperOffers.scss";

// import required modules
import { Grid, Navigation, Pagination } from "swiper";
import HeadingCo from "../HeadingCo";

const DiscountProSection = () => {
  const products = useSelector((state) => state.product.products);
  const [productsWithOffers, setProductsWithOffers] = useState([]);
  const [highestPrice, setHighestPrice] = useState([]);

  const fillterProductsWitheOffers = () => {
    const productsWithOfers = Object.values(products[0]).flatMap((category) =>
      category.filter((offer) => offer.offers === true)
    );
    setProductsWithOffers(productsWithOfers);
  };

  const heighestPrice = () => {
    if (productsWithOffers.length > 0) {
      const maxPrice = Math.max(
        ...productsWithOffers.map((products) => products.price)
      );
      const maxPriceProdut = productsWithOffers.find(
        (products) => products.price === maxPrice
      );
      setHighestPrice(maxPriceProdut);
    }
  };
  useEffect(() => {
    heighestPrice();
  }, [productsWithOffers]);

  useEffect(() => {
    fillterProductsWitheOffers();
  }, []);

  return (
    <Container>
      <HeadingCo
        title={"best discount"}
        paragraph={"don't miss out on the best discount of the day!"}
      />
      <ProductContainer>
        <Wraper>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 2,
                grid: {
                  rows: 1,
                },
              },
              768: {
                slidesPerView: 3,
                grid: {
                  rows: 1,
                },
              },

              991: {
                slidesPerView: 3,
                grid: {
                  rows: 2,
                },
              },

              1024: {
                slidesPerView: 3,
                grid: {
                  rows: 2,
                },
              },
            }}
            grid={2}
            // loop={true}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Grid, Navigation]}
            className="swiperOffers"
          >
            {productsWithOffers.map((products) => (
              <SwiperSlide key={products.id}>
                <ProductsCart product={products} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Wraper>
        <OffersBanner offers={highestPrice} />
      </ProductContainer>
    </Container>
  );
};

const ProductContainer = styled.div`
  display: grid;
  gap: 20px;
  @media (min-width: 991.98px) {
    & {
      grid-template-columns: 2fr 1fr;
      gap: 30px;
    }
  }
`;
const Wraper = styled.div`
  min-width: 0;

  order: 2;
  @media (min-width: 991.98px) {
    & {
      order: 1;
      height: 100vh;
      max-height: 625px;
    }
  }
  @media (min-width: 1199.98px) {
    & {
      height: 100vh;
      max-height: 625px;
    }
  }
`;

export default DiscountProSection;

// write code that get all object contains offers properties equal to true

// const products = [
//   {
//     ComputerHardware: [
//       {
//         id: 78587,
//         image:
//           "https://uminex.kutethemes.net/wp-content/uploads/2023/01/products_13_1.jpg",
//         name: "Dell Vostro 3888 i9 8GB 512GB – Win10",
//         offers: true,
//         price: "564",
//         review: 0,
//       },
//       {
//         id: 78587,
//         image:
//           "https://uminex.kutethemes.net/wp-content/uploads/2023/01/products_13_1.jpg",
//         name: "Dell Vostro 3888 i9 8GB 512GB – Win10",

//         price: "564",
//         review: 0,
//       },
//     ],
//     Laptop: [
//       {
//         id: 78587,
//         image:
//           "https://uminex.kutethemes.net/wp-content/uploads/2023/01/products_13_1.jpg",
//         name: "Dell Vostro 3888 i9 8GB 512GB – Win10",
//         offers: true,
//         price: "564",
//         review: 0,
//       },
//       {
//         id: 78587,
//         image:
//           "https://uminex.kutethemes.net/wp-content/uploads/2023/01/products_13_1.jpg",
//         name: "Dell Vostro 3888 i9 8GB 512GB – Win10",

//         price: "564",
//         review: 0,
//       },
//     ],
//   },
// ];
