import React from "react";

export default function Price() {
  return (
    <div className="accordion" id="price-filters">
      <div className="accordion-item mb-4">
        <h5 className="accordion-header mb-2" id="accordion-heading-price">
          <button
            className="accordion-button p-0 border-0 fs-5 text-uppercase"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accordion-filter-price"
            aria-expanded="true"
            aria-controls="accordion-filter-price"
          >
            Price
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
          id="accordion-filter-price"
          className="accordion-collapse collapse show border-0"
          aria-labelledby="accordion-heading-price"
          data-bs-parent="#price-filters"
        >
          <input
            className="price-range-slider"
            type="text"
            name="price_range"
            value=""
            data-slider-min="10"
            data-slider-max="1000"
            data-slider-step="5"
            data-slider-value="[250,450]"
            data-currency="$"
          />
          <div className="price-range__info d-flex align-items-center mt-2">
            <div className="me-auto">
              <span className="text-secondary">Min Price: </span>
              <span className="price-range__min">$250</span>
            </div>
            <div>
              <span className="text-secondary">Max Price: </span>
              <span className="price-range__max">$450</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.accordion-item --> */}
    </div>
  );
}
