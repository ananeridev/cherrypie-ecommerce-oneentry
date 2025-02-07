import Features from "@/components/common/features/Features";
import Footer8 from "@/components/footers/Footer8";
import Header9 from "@/components/headers/Header9";
import BestSelling from "@/components/homes/home-9/BestSelling";
import Blogs from "@/components/homes/home-9/Blogs";
import Brands from "@/components/common/brands/Brands";
import Collections from "@/components/homes/home-9/Collections";
import Hero from "@/components/homes/home-9/Hero";
import Instagram from "@/components/homes/home-9/Instagram";
import Lookbook from "@/components/homes/home-9/Lookbook";
import React from "react";

export const metadata = {
  title: "Home 9 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage8() {
  return (
    <>
      <Header9 />
      <main className="page-wrapper">
        <Hero />
        <div className="mb-3 pb-1"></div>
        <Collections />
        <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
        <BestSelling />
        <div className="mb-5 pb-4"></div>
        <Lookbook />
        <div className="pt-1 pb-5 mt-4 mt-xl-5"></div>
        <Blogs />
        <div className="mb-5 pb-4 pb-xl-5 mb-xl-5"></div>
        <Brands />
        <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
        <Instagram />
        <div className="mb-3 mb-xl-5"></div>
        <Features />
      </main>
      <Footer8 />
    </>
  );
}
