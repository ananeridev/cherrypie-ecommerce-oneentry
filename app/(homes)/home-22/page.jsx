import Footer22 from "@/components/footers/Footer22";

import Header8 from "@/components/headers/Header8";
import Banner from "@/components/homes/home-22/Banner";
import Hero from "@/components/homes/home-22/Hero";
import OurStory from "@/components/homes/home-22/OurStory";
import SingleProduct from "@/components/homes/home-22/SingleProduct";
import React from "react";

export const metadata = {
  title: "Home 22 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage22() {
  return (
    <>
      <div className="theme-23">
        <Header8 />
        <main>
          <Hero />
          <Banner />
          <SingleProduct />
          <OurStory />
        </main>
        <Footer22 />
      </div>
    </>
  );
}
