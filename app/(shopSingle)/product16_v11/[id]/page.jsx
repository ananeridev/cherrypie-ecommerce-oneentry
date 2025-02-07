import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import RelatedSlider from "@/components/singleProduct/RelatedSlider";
import SingleProduct11 from "@/components/singleProduct/SingleProduct11";
import React from "react";
import { allProducts } from "@/data/products";

export const metadata = {
  title: "Shop Single 11 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function ProductDetailsPage16({ params }) {
  const productId = params.id;
  const product =
    allProducts.filter((elm) => elm.id == productId)[0] || allProducts[0];
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-md-1 pb-md-3"></div>
        <SingleProduct11 product={product} />
        <RelatedSlider />
      </main>
      <Footer1 />
    </>
  );
}
