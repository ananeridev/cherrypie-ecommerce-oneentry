import Brands from "@/components/common/brands/Brands";
import Footer18 from "@/components/footers/Footer18";

import Header18 from "@/components/headers/Header18";
import Banner from "@/components/homes/home-18/Banner";
import Blogs from "@/components/homes/home-18/Blogs";
import Hero from "@/components/homes/home-18/Hero";
import NewArrival from "@/components/homes/home-18/NewArrival";
import Populer from "@/components/homes/home-18/Populer";
import Trending from "@/components/homes/home-18/Trending";
import React from "react";

export const metadata = {
  title: "Home 18 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage18() {
  return (
    <>
      <div className="theme-19">
        <Header18 />
        <main>
          <Hero />
          <div className="mb-4 mb-xl-5 pt-xl-1 pb-5"></div>
          <Populer />
          <div className="mb-3 mb-xl-4 pt-xl-1 pb-4"></div>
          <Banner />
          <div className="mb-4 mb-xl-5 pt-xl-1 pb-5"></div>
          <NewArrival />
          <div className="mb-4 mb-xl-5 pt-xl-1 pb-5"></div>
          <Trending />
          <div className="mb-4 mb-xl-5 pt-xl-1 pb-5"></div>
          <Blogs />
          <div className="mb-4 mb-xl-5 pt-xl-1 pb-5"></div>
          <Brands />
          <div className="mb-4 mb-xl-5 pt-xl-1 pb-5"></div>
        </main>
        <Footer18 />
      </div>
    </>
  );
}
