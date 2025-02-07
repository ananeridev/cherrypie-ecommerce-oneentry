"use client";
import Star from "@/components/common/Star";
import { useContextElement } from "@/context/Context";
import { products40 } from "@/data/products/car";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const filterCategories = ["All", "Bestsellers", "Most Viewed"];
import Image from "next/image";
export default function Featured() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories[0]);
  const [filtered, setFiltered] = useState(products40);
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products40);
    } else {
      setFiltered([
        ...products40.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory]);
  return (
    <section className="featured-products container">
      <div className="d-flex align-items-center justify-content-md-between flex-wrap mb-3 mb-xl-4">
        <h2 className="section-title fw-semi-bold fs-30 theme-color text-uppercase">
          Special Offers on Car Parts
        </h2>

        <ul
          className="nav nav-tabs justify-content-center"
          id="collections-tab"
          role="tablist"
        >
          {filterCategories.map((elm, i) => (
            <li
              onClick={() => setCurrentCategory(elm)}
              key={i}
              className="nav-item"
              role="presentation"
            >
              <a
                className={`nav-link nav-link_underscore  underscore-md text-uppercase theme-color fs-13 fw-semi-bold ${
                  currentCategory == elm ? "active" : ""
                }`}
              >
                {elm}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-content pt-2" id="collections-tab-content">
        <div className="tab-pane fade show active">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
            {filtered.map((elm, i) => (
              <div key={i} className="product-card-wrapper mb-2">
                <div className="product-card product-card_style9 border rounded-3 mb-3 mb-md-4 bg-white">
                  <div className="position-relative pb-3">
                    <div className="pc__img-wrapper pc__img-wrapper_wide3">
                      <Link href={`/product1_simple/${elm.id}`}>
                        <Image
                          loading="lazy"
                          src={elm.imgSrc}
                          width="255"
                          height="200"
                          alt="Cropped Faux leather Jacket"
                          className="pc__img"
                        />
                      </Link>
                    </div>
                    <div className="anim_appear-bottom position-absolute w-100 text-center">
                      <button
                        className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside d-inline-flex align-items-center justify-content-center"
                        onClick={() => addProductToCart(elm.id)}
                        title={
                          isAddedToCartProducts(elm.id)
                            ? "Already Added"
                            : "Add to Cart"
                        }
                      >
                        <svg
                          className="d-inline-block"
                          width="14"
                          height="14"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            href={`${
                              isAddedToCartProducts(elm.id)
                                ? "#icon_cart_added"
                                : "#icon_cart"
                            }`}
                          />
                        </svg>
                      </button>
                      <button
                        className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view d-inline-flex align-items-center justify-content-center"
                        data-bs-toggle="modal"
                        onClick={() => setQuickViewItem(elm)}
                        data-bs-target="#quickView"
                        title="Quick view"
                      >
                        <svg
                          className="d-inline-block"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_view" />
                        </svg>
                      </button>
                      <button
                        className={`btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist ${
                          isAddedtoWishlist(elm.id) ? "active" : ""
                        } d-inline-flex align-items-center justify-content-center`}
                        onClick={() => toggleWishlist(elm.id)}
                        title="Add To Wishlist"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_heart" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="pc__info position-relative">
                    <p className="pc__category fs-13 fw-medium">
                      {elm.category}
                    </p>
                    <h6 className="pc__title fs-16 mb-2">
                      <Link href={`/product1_simple/${elm.id}`}>
                        {elm.title}
                      </Link>
                    </h6>
                    <div className="product-card__review d-sm-flex align-items-center">
                      <div className="reviews-group d-flex">
                        <Star stars={elm.rating} />
                      </div>
                      <span className="reviews-note text-lowercase text-secondary fs-13 ms-sm-1">
                        {elm.ratingCount}
                      </span>
                    </div>
                    <div className="product-card__price d-flex">
                      <span className="money price fs-16 fw-semi-bold">
                        ${elm.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
