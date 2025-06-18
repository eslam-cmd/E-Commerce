import React from "react";
import SliderCarousel from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import ProductsContainer from "../../Components/Products/ProductsContainer";
import DicountSection from "./DicountSection";
import BrandContainer from "../../Components/Brand/BrandContainer";
import CategoryHeader from "../../Components/Category/CategoryHeader";
const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "650px" }}>
      <CategoryHeader />
      <SliderCarousel />
      <HomeCategory />
      <ProductsContainer
        title="best seller"
        btntitle="more"
        pathroute={"/AllProducts"}
      />
      <DicountSection />
      <ProductsContainer title=" New arrival" btntitle="more" />
      <BrandContainer title=" The most famous brands " btntitle="more" />
    </div>
  );
};

export default HomePage;
