import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import RelatedSlider from "@/components/singleProduct/RelatedSlider";
import SingleProduct16 from "@/components/singleProduct/SingleProduct16";
import React from "react";
import { allProducts } from "@/data/products";

export const metadata = {
  title: "Shop Single Out Of Stack || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function ProductDetailsPage6({ params }) {
  const productId = params.id;
  const product =
    allProducts.filter((elm) => elm.id == productId)[0] || allProducts[0];
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-md-1 pb-md-3"></div>
        <SingleProduct16 product={product} />
        <RelatedSlider />
      </main>
      <Footer1 />
    </>
  );
}
