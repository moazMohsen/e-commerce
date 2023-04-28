import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../../StyledComponents";
import HeadingCo from "../HeadingCo";
import ProductsCart from "../ProductsCart";

//  Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperRecommende.scss";
import { Navigation } from "swiper";

const RecommendeSection = () => {
  const products = useSelector((state) => state.product.products[0]);

  return (
    <Container>
      <HeadingCo
        title={"recommended for you"}
        paragraph={"don't miss out on the best product of the day!"}
      />
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="categorySwiper"
      >
        {Object.keys(products).map((key) =>
          products[key].map((product) => (
            <SwiperSlide key={product.id}>
              <ProductsCart product={product} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </Container>
  );
};

export default RecommendeSection;
