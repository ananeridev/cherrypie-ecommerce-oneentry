"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SearchPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const containerRef = useRef(null);

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
      className={`header-tools__item hover-container ${
        isPopupOpen ? "js-content_visible" : ""
      }`}
    >
      <div className="js-hover__open position-relative">
        <a
          onClick={() => setIsPopupOpen((pre) => !pre)}
          className="js-search-popup search-field__actor"
          href="#"
        >
          <svg
            className="d-block"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_search" />
          </svg>
          <i className="btn-icon btn-close-lg"></i>
        </a>
      </div>

      <div className="search-popup js-hidden-content">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="search-field container"
        >
          <p className="text-uppercase text-secondary fw-medium mb-4">
            What are you looking for?
          </p>
          <div className="position-relative">
            <input
              className="search-field__input search-popup__input w-100 fw-medium"
              type="text"
              name="search-keyword"
              placeholder="Search products"
            />
            <button className="btn-icon search-popup__submit" type="submit">
              <svg
                className="d-block"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_search" />
              </svg>
            </button>
            <button
              className="btn-icon btn-close-lg search-popup__reset"
              type="reset"
            ></button>
          </div>

          <div className="search-popup__results">
            <div className="sub-menu search-suggestion">
              <h6 className="sub-menu__title fs-base">Quicklinks</h6>
              <ul className="sub-menu__list list-unstyled">
                <li className="sub-menu__item">
                  <Link href="/shop-2" className="menu-link menu-link_us-s">
                    New Arrivals
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <a href="#" className="menu-link menu-link_us-s">
                    Dresses
                  </a>
                </li>
                <li className="sub-menu__item">
                  <Link href="/shop-3" className="menu-link menu-link_us-s">
                    Accessories
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <a href="#" className="menu-link menu-link_us-s">
                    Footwear
                  </a>
                </li>
                <li className="sub-menu__item">
                  <a href="#" className="menu-link menu-link_us-s">
                    Sweatshirt
                  </a>
                </li>
              </ul>
            </div>

            <div className="search-result row row-cols-5"></div>
          </div>
        </form>
        {/* <!-- /.header-search --> */}
      </div>
      {/* <!-- /.search-popup --> */}
    </div>
  );
}
