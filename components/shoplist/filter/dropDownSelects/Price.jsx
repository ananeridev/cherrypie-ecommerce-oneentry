"use client";

import Slider from "rc-slider";
import { useEffect, useRef, useState } from "react";

export default function Price() {
  const [price, setPrice] = useState([20, 70987]);

  // price range handler

  // price range handler
  const handleOnChange = (value) => {
    setPrice(value);
  };
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
          Price
        </span>
      </div>
      <div className="filters-container js-hidden-content mt-2">
        <Slider
          range
          formatLabel={() => ``}
          max={100000}
          min={0}
          defaultValue={price}
          onChange={(value) => handleOnChange(value)}
          id="slider"
        />
        <div className="price-range__info d-flex align-items-center mt-2">
          <div className="me-auto">
            <span className="text-secondary">Min Price: </span>
            <span className="price-range__min">${price[0]}</span>
          </div>
          <div>
            <span className="text-secondary">Max Price: </span>
            <span className="price-range__max">${price[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
