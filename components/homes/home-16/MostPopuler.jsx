"use client";
import Star from "@/components/common/Star";
import { useContextElement } from "@/context/Context";
import { products35 } from "@/data/products/bikes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const filterCategories = ["All", "Bestsellers", "Most Viewed"];
import Image from "next/image";
export default function MostPopuler() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories[0]);

  const [filtered, setFiltered] = useState(products35);
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products35);
    } else {
      setFiltered([
        ...products35.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory]);
  return (
    <section className="products-grid container">
      <h2 className="section-title text-uppercase fs-40 fw-bold text-center mb-2">
        Most Popular Products
      </h2>
      <p className="fs-15 mb-2 pb-xl-2 text-secondary text-center">
        The World's Premium Brands In One Destination.
      </p>

      <ul
        className="nav nav-tabs justify-content-center mb-3 mb-xl-4"
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
              className={`nav-link nav-link_underscore  text-uppercase ${
                currentCategory == elm ? "active" : ""
              }`}
            >
              {elm}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content pt-2" id="collections-tab-content">
        <div className="tab-pane fade show active">
          <div className="row">
            {filtered.map((elm, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                  <div className="pc__img-wrapper border-1 pt-100per">
                    <Link href={`/product1_simple/${elm.id}`}>
                      <Image
                        loading="lazy"
                        src={elm.imgSrc}
                        width="330"
                        height="330"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </Link>
                    <div className="anim_appear-fade position-absolute w-100 h-100 left-0 top-0 d-flex align-items-center justify-content-center bg-white-overlay">
                      <button
                        className="btn btn-square theme-bg-color text-white border-0 text-uppercase me-1 me-md-2 js-add-cart js-open-aside"
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
                          ></use>
                        </svg>
                      </button>
                      <button
                        className="btn btn-square theme-bg-color text-white border-0 text-uppercase me-1 me-md-2 js-quick-view"
                        data-bs-toggle="modal"
                        data-bs-target="#quickView"
                        onClick={() => setQuickViewItem(elm)}
                        title="Quick view"
                      >
                        <svg
                          className="d-inline-block"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_view"></use>
                        </svg>
                      </button>
                      <button
                        className={`btn btn-square theme-bg-color text-white border-0 text-uppercase js-add-wishlist ${
                          isAddedtoWishlist(elm.id) ? "active" : ""
                        }`}
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
                          <use href="#icon_heart"></use>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="pc__info position-relative">
                    <div className="pc__category text-secondary fw-semi-bold d-flex align-items-center justify-content-between">
                      <span>{elm.category}</span>
                      <div className="reviews-group d-flex theme-color">
                        <Star stars={elm.ratings} />
                      </div>
                    </div>
                    <h6 className="pc__title fw-bold text-uppercase fs-18">
                      <Link href={`/product1_simple/${elm.id}`}>
                        {elm.title}
                      </Link>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price theme-color fw-bold fs-18">
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
