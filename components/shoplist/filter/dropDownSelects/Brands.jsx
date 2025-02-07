"use client";

import { brands } from "@/data/products/productFilterOptions";
import { useEffect, useRef, useState } from "react";

export default function Items() {
  const [activeItems, setActiveItems] = useState([]);
  const toggleItems = (item) => {
    if (activeItems.includes(item)) {
      setActiveItems((pre) => [...pre.filter((elm) => elm != item)]);
    } else {
      setActiveItems((pre) => [...pre, item]);
    }
  };
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    setActiveItems((pre) => [
      ...pre.filter((elm) =>
        elm.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    ]);
  }, [searchQuery]);
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
          Brands
        </span>
      </div>
      <div className="search-field multi-select filters-container js-hidden-content mt-2">
        <div className="search-field__input-wrapper mb-3">
          <input
            type="text"
            name="search_text"
            className="search-field__input form-control form-control-sm border-light border-2"
            placeholder="SEARCH"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <ul className="multi-select__list list-unstyled">
          {brands
            .filter((elm) =>
              elm.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((elm, i) => (
              <li
                key={i}
                onClick={() => toggleItems(elm)}
                className={`search-suggestion__item multi-select__item text-primary js-search-select js-multi-select ${
                  activeItems.includes(elm) ? "mult-select__item_selected" : ""
                }`}
              >
                <span className="me-auto">{elm.name}</span>
                <span className="text-secondary">{elm.count}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
