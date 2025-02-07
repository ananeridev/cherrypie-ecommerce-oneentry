import { colors } from "@/data/products/productFilterOptions";
import React, { useEffect, useRef, useState } from "react";

export default function Color() {
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [isDDActive, setIsDDActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the referenced element
      if (ref.current && !ref.current.contains(event.target)) {
        setIsDDActive(false);
      }
    };

    // Add event listener to document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`position-relative hover-container d-none d-lg-block  px-1 ${
        isDDActive ? "js-content_visible" : ""
      }`}
    >
      <div
        onClick={() => setIsDDActive((pre) => !pre)}
        className="js-hover__open"
      >
        <span className="multi-select__actor fw-medium text-uppercase js-no-update">
          Color
        </span>
      </div>
      <div className="filters-container js-hidden-content mt-2">
        <div className="d-flex flex-wrap">
          {colors.map((swatch, index) => (
            <a
              onClick={() => setActiveColor(swatch)}
              key={index}
              className={`swatch-color js-filter ${
                activeColor == swatch ? "swatch_active" : ""
              }`}
              style={{ color: swatch.color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
