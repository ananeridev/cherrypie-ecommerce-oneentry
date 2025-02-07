"use client";

import { closeModalProductAdditionalInformation } from "@/utlis/aside";
import { useEffect } from "react";
import AdditionalInfo from "../singleProduct/AdditionalInfo";

export default function ProductAdditionalInformation() {
  useEffect(() => {
    const pageOverlay = document.getElementById("pageOverlay");

    pageOverlay.addEventListener(
      "click",
      closeModalProductAdditionalInformation
    );

    return () => {
      pageOverlay.removeEventListener(
        "click",
        closeModalProductAdditionalInformation
      );
    };
  }, []);
  return (
    <div
      className="aside aside_right overflow-hidden product-single__aside"
      id="productAdditionalInformation"
    >
      <div className="aside-header d-flex align-items-center">
        <h3 className="text-uppercase fs-6 mb-0">ADDITIONAL INFORMATION</h3>
        <button
          onClick={closeModalProductAdditionalInformation}
          className="btn-close-lg js-close-aside btn-close-aside ms-auto"
        />
      </div>
      {/* /.aside-header */}
      <div className="aside-content">
        <AdditionalInfo />
      </div>
      {/* /.aside-content */}
    </div>
  );
}
