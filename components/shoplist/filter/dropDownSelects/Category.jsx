"use client";

import { useEffect, useRef, useState } from "react";
const listItems = [
  { id: 1, title: "Banking", count: 95 },
  { id: 2, title: "Digital & Creative", count: 39 },
  { id: 3, title: "Retail", count: 8 },
  { id: 4, title: "Designer", count: 5 },
  { id: 5, title: "Developer", count: 2 },
];

export default function Category() {
  const [activeItems, setActiveItems] = useState([]);
  const toggleItems = (item) => {
    if (activeItems.includes(item)) {
      setActiveItems((pre) => [...pre.filter((elm) => elm != item)]);
    } else {
      setActiveItems((pre) => [...pre, item]);
    }
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
    <fieldset className="multi-select">
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
            Category
          </span>
        </div>
        <div className="filters-container js-hidden-content mt-2">
          <ul className="multi-select__list list-unstyled mb-0">
            {listItems.map((elm, i) => (
              <li
                key={i}
                onClick={() => toggleItems(elm)}
                className={`search-suggestion__item multi-select__item text-primary js-search-select js-multi-select ${
                  activeItems.includes(elm) ? "mult-select__item_selected" : ""
                }`}
              >
                <span className="me-auto">{elm.title}</span>
                <span className="text-secondary">{elm.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </fieldset>
  );
}
