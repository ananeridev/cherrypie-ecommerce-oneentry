import Features from "@/components/common/features/Features";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Hero from "@/components/homes/home-7/Hero";
import Lookbook from "@/components/homes/home-7/Lookbook";
import ProductsGrid from "@/components/homes/home-7/ProductsGrid";
import ProductsSlider from "@/components/homes/home-7/ProductsSlider";
import TrendingProducts from "@/components/homes/home-7/TrendingProducts";
import React from "react";

export const metadata = {
  title: "Home 7 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage7() {
  return (
    <>
      <Header7 />
      <main>
        <Hero />
        <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
        <TrendingProducts />
        <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
        <ProductsGrid />
        <div className="mb-5 pb-4"></div>
        <Lookbook />
        <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
        <ProductsSlider />
        <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
        <Features />
      </main>
      <Footer7 />
    </>
  );
}
