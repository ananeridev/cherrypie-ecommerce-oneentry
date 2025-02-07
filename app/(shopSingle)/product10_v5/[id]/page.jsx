import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Header24 from "@/components/headers/Header24";

import RelatedSlider from "@/components/singleProduct/RelatedSlider";

import SingleProduct5 from "@/components/singleProduct/SingleProduct5";
import React from "react";
import { allProducts } from "@/data/products";
// e0e0e0;
export const metadata = {
  title: "Shop Single 5 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function ProductDetailsPage10({ params }) {
  const productId = params.id;
  const product =
    allProducts.filter((elm) => elm.id == productId)[0] || allProducts[0];
  return (
    <>
      <div className="header_dark">
        <Header1 />
      </div>
      <main className="page-wrapper">
        {/* <div className="mb-md-1 pb-md-3"></div> */}
        <SingleProduct5 product={product} />
        <RelatedSlider />
      </main>
      <Footer1 />
    </>
  );
}
