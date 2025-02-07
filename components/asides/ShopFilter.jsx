"use client";

import { useEffect } from "react";

import { closeModalShopFilter } from "@/utlis/aside";

import FilterAll from "../shoplist/filter/FilterAll";
export default function ShopFilter() {
  useEffect(() => {
    const pageOverlay = document.getElementById("pageOverlay");

    pageOverlay.addEventListener("click", closeModalShopFilter);

    return () => {
      pageOverlay.removeEventListener("click", closeModalShopFilter);
    };
  }, []);

  return (
    <div className="aside-filters aside aside_right" id="shopFilterAside">
      <div className="aside-header d-flex align-items-center">
        <h3 className="text-uppercase fs-6 mb-0">Filter By</h3>
        <button
          onClick={() => closeModalShopFilter()}
          className="btn-close-lg js-close-aside btn-close-aside ms-auto"
        />
      </div>
      {/* /.aside-header */}
      <div className="aside-content">
        <FilterAll />
      </div>
      {/* /.aside-content */}
    </div>
  );
}
