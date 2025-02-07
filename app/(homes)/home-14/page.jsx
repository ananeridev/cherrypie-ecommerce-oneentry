import Footer13 from "@/components/footers/Footer13";

import Header13 from "@/components/headers/Header13";
import Blogs from "@/components/homes/home-14/Blogs";
import Category from "@/components/homes/home-14/Category";
import DailyDeal from "@/components/homes/home-14/DailyDeal";
import FaceMask from "@/components/homes/home-14/FaceMask";
import FeaturedProducts from "@/components/homes/home-14/FeaturedProducts";
import GridBanner from "@/components/homes/home-14/GridBanner";
import Hero from "@/components/homes/home-14/Hero";
import HospitalEquipment from "@/components/homes/home-14/HospitalEquipment";

import React from "react";

export const metadata = {
  title: "Home 14 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage14() {
  return (
    <>
      <div className="theme-14">
        <Header13 />
        <main>
          <Hero />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Category />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <DailyDeal />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <GridBanner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <FeaturedProducts />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <HospitalEquipment />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <FaceMask />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Blogs />
          <div className="mb-3 mb-xl-4 pb-3 pt-1 pb-xl-4"></div>
        </main>
        <Footer13 />
      </div>
    </>
  );
}
