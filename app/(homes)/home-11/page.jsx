import Features from "@/components/common/features/Features";
import Footer10 from "@/components/footers/Footer10";
import Header11 from "@/components/headers/Header11";
import BestSaller from "@/components/homes/home-11/BestSaller";
import Categories from "@/components/homes/home-11/Categories";
import GridBanner from "@/components/homes/home-11/GridBanner";
import Hero from "@/components/homes/home-11/Hero";
import RecentViewed from "@/components/homes/home-11/RecentViewed";
import SpecialOffers from "@/components/homes/home-11/SpecialOffers";
import TopDeals from "@/components/homes/home-11/TopDeals";
import React from "react";

export const metadata = {
  title: "Home 11 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage11() {
  return (
    <>
      <div className="theme-11">
        <Header11 />
        <main>
          <Hero />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <TopDeals />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <GridBanner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Categories />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <BestSaller />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <SpecialOffers />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <RecentViewed />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Features />
        </main>
        <Footer10 />
      </div>
    </>
  );
}
