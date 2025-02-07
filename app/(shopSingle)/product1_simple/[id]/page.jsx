import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import RelatedSlider from "@/components/singleProduct/RelatedSlider";
import SingleProduct12 from "@/components/singleProduct/SingleProduct12";
import { allProducts } from "@/data/products";
import React from "react";

export default function ProductDetailsPage1({ params }) {
  const productId = params.id;
  const product =
    allProducts.filter((elm) => elm.id == productId)[0] || allProducts[0];
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-md-1 pb-md-3"></div>
        <SingleProduct12 product={product} />
        <RelatedSlider />
      </main>
      <Footer1 />
    </>
  );
}
