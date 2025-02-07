"use client";

import { useEffect, useRef, useState } from "react";

const categories = ["All Category", "Men", "Women", "Kids"];
export default function CategorySelect() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className={`hover-container position-relative ${
        isPopupOpen ? "js-content_visible" : ""
      }`}
    >
      <div
        className="js-hover__open"
        onClick={() => setIsPopupOpen((pre) => !pre)}
      >
        <input
          className="header-search__category search-field__actor border-0 bg-white w-100"
          type="text"
          name="search-category"
          placeholder="All Category"
          value={selectedCategory}
          readOnly
        />
      </div>
      <div className="header-search__category-list js-hidden-content mt-2">
        <ul className="search-suggestion list-unstyled">
          {categories.map((category, index) => (
            <li
              onClick={() => {
                setSelectedCategory(category);
                setIsPopupOpen(false);
              }}
              key={index}
              className="search-suggestion__item js-search-select"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
