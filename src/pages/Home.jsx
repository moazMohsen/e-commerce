import React from "react";

//
import CategoriesProSection from "../components/products/categoriesProSection/CategoriesProSection";
import RecommendeSection from "../components/products/recommendeSection/RecommendeSection";
import StoreFeature from "../components/StoreFeature/StoreFeature";

import DiscountProSection from "../components/products/discountProSection/DiscountProSection";
import FlatBanner from "../components/parallaxBanner/FlatBanner";
import Banners3 from "../components/banners/Banners3";
import Hero from "../components/hero/Hero";

//
import { laptop, headphone } from "../images/index_img";
const Home = () => {
  return (
    <>
      <Hero />

      <StoreFeature />
      <FlatBanner
        image={laptop}
        header={"get discount"}
        paragraph={
          "Hurry, these deals won’t last long! Get your discount before it’s gone!"
        }
      />
      <DiscountProSection />
      <FlatBanner
        image={headphone}
        header={"get discount"}
        paragraph={
          "Hurry, these deals won’t last long! Get your discount before it’s gone!"
        }
      />
      <CategoriesProSection />
      <Banners3 />
      <RecommendeSection />
    </>
  );
};

export default Home;
