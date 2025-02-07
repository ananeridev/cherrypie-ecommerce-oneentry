import Footer3 from "@/components/footers/Footer3";

import Header3 from "@/components/headers/Header3";
import Categories from "@/components/homes/home-3/Categories";
import CategoryBanner from "@/components/homes/home-3/CategoryBanner";
import FeaturesProducts from "@/components/homes/home-3/FeaturesProducts";
import Hero from "@/components/homes/home-3/Hero";
import HotDeals from "@/components/homes/home-3/HotDeals";
import Instagram from "@/components/homes/home-3/Instagram";
import React from "react";

export const metadata = {
  title: "Home 3 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage3() {
  return (
    <div className="gradient-bg">
      <Header3 />
      <main>
        <Hero />
        <div className="container mw-1620 bg-white border-radius-10">
          <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
          <Categories />
          <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
          <HotDeals />
          <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
          <CategoryBanner />
          <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
          <FeaturesProducts />
        </div>
        <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
        <Instagram />
      </main>
      <hr className="mt-2 text-secondary" />
      <Footer3 />
    </div>
  );
}
