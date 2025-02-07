import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import RelatedSlider from "@/components/singleProduct/RelatedSlider";
import SingleProduct13 from "@/components/singleProduct/SingleProduct13";
import React from "react";
import { allProducts } from "@/data/products";

export const metadata = {
  title: "Shop Single 3 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function ProductDetailsPage3({ params }) {
  const productId = params.id;
  const product =
    allProducts.filter((elm) => elm.id == productId)[0] || allProducts[0];
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-md-1 pb-md-3"></div>
        <SingleProduct13 product={product} />
        <RelatedSlider />
      </main>
      <Footer1 />
    </>
  );
}
