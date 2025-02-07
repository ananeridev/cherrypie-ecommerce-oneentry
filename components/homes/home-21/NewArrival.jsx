"use client";
import { useContextElement } from "@/context/Context";
import { products48 } from "@/data/products/tools";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const filterCategories = ["All", "New", "On Sale"];
import Image from "next/image";
export default function NewArrival() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories[0]);
  const [filtered, setFiltered] = useState(products48);
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products48);
    } else {
      setFiltered([
        ...products48.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory]);
  return (
    <section className="products-grid container">
      <div className="d-flex align-items-center flex-wrap gap-4 mb-3 pb-xl-2 mb-xl-3">
        <h2 className="fw-semi-bold fs-24 mb-3 text-uppercase">NEW ARRIVALS</h2>
        <ul
          className="nav nav-tabs justify-content-center mb-3 ms-md-auto"
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
                className={`nav-link nav-link_underscore  text-uppercase fs-13 fw-semi-bold ${
                  currentCategory == elm ? "active" : ""
                }`}
              >
                {elm}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="position-relative px-3 px-xl-4 py-3 py-xl-4 bg-white border-1">
        <div className="tab-content pt-2" id="collections-tab-content">
          <div className="tab-pane fade show active">
            <div className="row">
              <div className="col-12 col-md-4 col-xl-3 d-flex flex-column">
                <div className="theme-bg-color-secondary text-white px-4 py-4">
                  <h3 className="text-uppercase fw-bold text-white mt-2 mb-3">
                    OutDoor
                    <br />
                    Power
                    <br />
                    Equipment
                  </h3>
                  <Link
                    href="/shop-1"
                    className="btn btn-outline-primary border-0 fs-12 fw-semi-bold btn-40 text-uppercase py-1 px-4 mb-3 d-inline-flex align-items-center"
                  >
                    <span>Shop Now</span>
                  </Link>
                </div>
                <div className="flex-1">
                  <Image
                    width={315}
                    height={563}
                    src="/assets/images/home/demo22/banner-1.jpg"
                    alt="image"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-12 col-md-8 col-xl-9">
                <div className="row">
                  {filtered.map((elm, i) => (
                    <div key={i} className="col-12 col-sm-6 col-md-6 col-xl-4">
                      <div className="product-card">
                        <div className="pc__img-wrapper pt-100per">
                          <Link href={`/product1_simple/${elm.id}`}>
                            <Image
                              loading="lazy"
                              src={elm.imgSrc}
                              width="315"
                              height="310"
                              alt="Cropped Faux leather Jacket"
                              className="pc__img"
                            />
                          </Link>
                          <button
                            className="pc__atc btn fs-base anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside bg-black text-white left-0 w-100 bottom-0"
                            onClick={() => addProductToCart(elm.id)}
                            title={
                              isAddedToCartProducts(elm.id)
                                ? "Already Added"
                                : "Add to Cart"
                            }
                          >
                            {isAddedToCartProducts(elm.id)
                              ? "Already Added"
                              : "Add To Cart"}
                          </button>
                        </div>

                        <div className="pc__info position-relative">
                          <p className="pc__category">{elm.category}</p>
                          <h6 className="pc__title fs-15 fw-semi-bold mb-2">
                            <Link href={`/product1_simple/${elm.id}`}>
                              {elm.title}
                            </Link>
                          </h6>
                          <div className="product-card__price d-flex">
                            <span className="money price theme-color fs-15 fw-semi-bold">
                              ${elm.price}
                            </span>
                          </div>

                          <button
                            className={`pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist ${
                              isAddedtoWishlist(elm.id) ? "active" : ""
                            } mt-1`}
                            onClick={() => toggleWishlist(elm.id)}
                            title="Add To Wishlist"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_heart" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
