"use client";

import { brands } from "@/data/products/productFilterOptions";
import { useEffect, useState } from "react";

export default function Brands() {
  const [activeBrands, setActiveBrands] = useState([]);
  const toggleBrands = (brand) => {
    if (activeBrands.includes(brand)) {
      setActiveBrands((pre) => [...pre.filter((elm) => elm != brand)]);
    } else {
      setActiveBrands((pre) => [...pre, brand]);
    }
  };
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    setActiveBrands((pre) => [
      ...pre.filter((elm) =>
        elm.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    ]);
  }, [searchQuery]);
  return (
    <div className="accordion" id="brand-filters">
      <div className="accordion-item mb-4 pb-3">
        <h5 className="accordion-header" id="accordion-heading-brand">
          <button
            className="accordion-button p-0 border-0 fs-5 text-uppercase"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accordion-filter-brand"
            aria-expanded="true"
            aria-controls="accordion-filter-brand"
          >
            Brands
            <svg
              className="accordion-button__icon type2"
              viewBox="0 0 10 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g aria-hidden="true" stroke="none" fillRule="evenodd">
                <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
              </g>
            </svg>
          </button>
        </h5>
        <div
          id="accordion-filter-brand"
          className="accordion-collapse collapse show border-0"
          aria-labelledby="accordion-heading-brand"
          data-bs-parent="#brand-filters"
        >
          <div className="search-field multi-select accordion-body px-0 pb-0">
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
                    onClick={() => toggleBrands(elm)}
                    className={`search-suggestion__item multi-select__item text-primary js-search-select js-multi-select ${
                      activeBrands.includes(elm)
                        ? "mult-select__item_selected"
                        : ""
                    }`}
                  >
                    <span className="me-auto">{elm.name}</span>
                    <span className="text-secondary">{elm.count}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- /.accordion-item --> */}
    </div>
  );
}
