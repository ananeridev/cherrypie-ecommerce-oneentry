import Brands from "@/components/common/brands/Brands";
import Footer12 from "@/components/footers/Footer12";

import Header7 from "@/components/headers/Header7";
import Categories from "@/components/homes/home-13/Categories";
import Cta from "@/components/homes/home-13/Cta";
import Features from "@/components/homes/home-13/Features";
import GridBanner from "@/components/homes/home-13/GridBanner";
import Hero from "@/components/homes/home-13/Hero";
import Instagram from "@/components/homes/home-13/Instagram";
import MostPopular from "@/components/homes/home-13/MostPopular";
import NewArrival from "@/components/homes/home-13/NewArival";
import React from "react";

export const metadata = {
  title: "Home 13 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage13() {
  return (
    <>
      <div className="theme-13">
        <Header7 />
        <main>
          <Hero />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <Categories />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <GridBanner />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <MostPopular />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <NewArrival />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <Cta />
          <div className="mb-4 pb-4 pb-xl-5 mb-xl-5"></div>
          <Brands />
          <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
          <Instagram />
          <div className="mb-3 mb-xl-5"></div>
          <Features />

          <div className="mb-3 mb-xl-5"></div>
        </main>
        <Footer12 />{" "}
      </div>
    </>
  );
}
