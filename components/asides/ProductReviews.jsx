"use client";
import { useEffect } from "react";
import Reviews from "../singleProduct/Reviews";
import { closeModalProductReviews } from "@/utlis/aside";

export default function ProductReviews() {
  useEffect(() => {
    const pageOverlay = document.getElementById("pageOverlay");

    pageOverlay.addEventListener("click", closeModalProductReviews);

    return () => {
      pageOverlay.removeEventListener("click", closeModalProductReviews);
    };
  }, []);
  return (
    <div
      className="aside aside_right overflow-hidden product-single__aside"
      id="productReviews"
    >
      <div className="aside-header d-flex align-items-center">
        <h3 className="text-uppercase fs-6 mb-0">REVIEWS (3)</h3>
        <button
          onClick={closeModalProductReviews}
          className="btn-close-lg js-close-aside btn-close-aside ms-auto"
        />
      </div>
      {/* /.aside-header */}
      <div className="aside-content">
        <Reviews />
      </div>
      {/* /.aside-content */}
    </div>
  );
}
