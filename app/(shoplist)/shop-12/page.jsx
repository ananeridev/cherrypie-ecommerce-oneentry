import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Banner7 from "@/components/shoplist/Banner7";
import BreadCumb from "@/components/shoplist/BreadCumb";
import Collections from "@/components/shoplist/Collections";
import React from "react";

export const metadata = {
  title: "Shop 12 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function ShopPage12() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <Banner7 />
        <div className="mb-4 pb-lg-3"></div>
        <div className="container">
          <div className="breadcrumb mb-4 pb-md-2">
            <BreadCumb />
          </div>
        </div>
        <Collections />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
