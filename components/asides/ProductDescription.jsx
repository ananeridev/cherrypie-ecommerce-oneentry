"use client";

import { closeModalProductDescription } from "@/utlis/aside";
import { useEffect } from "react";
import Description from "../singleProduct/Description";

export default function ProductDescription() {
  useEffect(() => {
    const pageOverlay = document.getElementById("pageOverlay");

    pageOverlay.addEventListener("click", closeModalProductDescription);

    return () => {
      pageOverlay.removeEventListener("click", closeModalProductDescription);
    };
  }, []);
  return (
    <div
      className="aside aside_right overflow-hidden product-single__aside"
      id="productDescription"
    >
      <div className="aside-header d-flex align-items-center">
        <h3 className="text-uppercase fs-6 mb-0">DESCRIPTION</h3>
        <button
          onClick={closeModalProductDescription}
          className="btn-close-lg js-close-aside btn-close-aside ms-auto"
        />
      </div>
      {/* /.aside-header */}
      <div className="aside-content">
        <Description />
      </div>
      {/* /.aside-content */}
    </div>
  );
}
