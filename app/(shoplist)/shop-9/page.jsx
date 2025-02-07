import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Banner1 from "@/components/shoplist/Banner1";
import Shop1 from "@/components/shoplist/ProductList";
import Shop9 from "@/components/shoplist/Shop9";
import React from "react";

export const metadata = {
  title: "Shop 9 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function ShopPage9() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <Banner1 />
        <div className="mb-4 pb-lg-3"></div>
        <Shop9 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
