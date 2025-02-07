import Features from "@/components/common/features/Features";
import Footer19 from "@/components/footers/Footer19";

import Header19 from "@/components/headers/Header19";
import Banner from "@/components/homes/home-19/Banner";
import BestSelling from "@/components/homes/home-19/BestSelling";
import Category from "@/components/homes/home-19/Category";
import GridBanner from "@/components/homes/home-19/GridBanner";
import Hero from "@/components/homes/home-19/Hero";
import Instagram from "@/components/homes/home-19/Instagram";
import TrendyItems from "@/components/homes/home-19/TrendyItems";
import React from "react";

export const metadata = {
  title: "Home 19 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage19() {
  return (
    <>
      <div className="theme-20">
        <Header19 />
        <main className="page-wrapper">
          <Hero />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Category />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <TrendyItems />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <GridBanner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Banner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <BestSelling />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Features />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Instagram />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
        </main>
        <Footer19 />
      </div>
    </>
  );
}
