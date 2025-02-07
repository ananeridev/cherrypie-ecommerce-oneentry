"use client";
import { products51 } from "@/data/products/fashion";
import { menuCategories } from "@/data/products/productCategories";

import { useEffect, useState } from "react";

export default function BannerLinks() {
  const [currentCategory, setCurrentCategory] = useState(menuCategories[0]);
  const [filtered, setFiltered] = useState(products51);
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products51);
    } else {
      setFiltered(
        products51.filter((elm) => elm.filterCategory2 == currentCategory)
      );
    }
  }, [currentCategory]);
  return (
    <>
      {menuCategories.map((elm, i) => (
        <li key={i} className="me-3 me-xl-4 pe-1">
          <a
            onClick={() => setCurrentCategory(elm)}
            className={`menu-link menu-link_us-s ${
              currentCategory == elm ? "menu-link_active" : ""
            }`}
          >
            {elm}
          </a>
        </li>
      ))}
    </>
  );
}
