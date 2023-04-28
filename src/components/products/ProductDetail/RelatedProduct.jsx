import React from "react";
import { Container } from "../../../StyledComponents";
import HeadingCo from "../HeadingCo";
//  Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import ProductsCart from "../ProductsCart";

const RelatedProduct = ({ products }) => {
  return (
    <Container>
      <HeadingCo
        title={"related Product"}
        paragraph={"don't miss out on the best discount of the day!"}
      />
      <Swiper
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="categorySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductsCart product={product} key={product.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default RelatedProduct;
