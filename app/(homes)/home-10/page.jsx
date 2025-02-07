import Brands from "@/components/common/brands/Brands";
import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Banner from "@/components/homes/home-10/Banner";
import BestSelling from "@/components/homes/home-10/BestSelling";
import Blogs from "@/components/homes/home-10/Blogs";
import GridBanner from "@/components/homes/home-10/GridBanner";
import Hero from "@/components/homes/home-10/Hero";
import Lookbook from "@/components/homes/home-10/Lookbook";
import Trending from "@/components/homes/home-10/Trending";
import VideoBanner from "@/components/homes/home-10/VideoBanner";
import React from "react";

export const metadata = {
  title: "Home 10 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage10() {
  return (
    <>
      <div className="gradient-bg-10">
        <Header10 />
        <main>
          <Hero />
          <div className="container mw-1620 bg-white">
            <div className="mb-3 mb-xl-5 pt-1 pb-2"></div>
            <Brands />
            <div className="mb-3 mb-xl-5 pt-1 pb-2"></div>
            <Banner />
            <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
            <Trending />
          </div>
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
          <VideoBanner />
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
          <GridBanner />
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
          <Lookbook />
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
          <BestSelling />
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
          <Blogs />
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
        </main>
        <Footer9 />
      </div>
    </>
  );
}
