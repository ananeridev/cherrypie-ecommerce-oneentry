"use client";
import Star from "@/components/common/Star";
import { useContextElement } from "@/context/Context";
import { products23 } from "@/data/products/electronics";
import Link from "next/link";
import { useEffect, useState } from "react";

const filterCategories = ["All", "Top New", "Featured"];
import Image from "next/image";
import CountDownComponent2 from "@/components/common/CountDownComponent2";
export default function SpecialOffers() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories[0]);
  const [filtered, setFiltered] = useState(products23);
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products23);
    } else {
      setFiltered([
        ...products23.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory]);
  return (
    <section className="special-offers border-top-1">
      <div className="container">
        <div className="mb-3 mb-xl-5 pb-3 pb-xl-5"></div>

        <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4">
          <h2 className="section-title fw-bold">Special Offers</h2>

          <ul
            className="nav nav-tabs justify-content-center"
            id="collections-1-tab"
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
                  className={`nav-link nav-link_underscore ${
                    currentCategory == elm ? "active" : ""
                  }`}
                >
                  {elm}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="tab-content pt-2" id="collections-2-tab-content">
          <div
            className="tab-pane fade show active"
            id="collections-tab-5"
            role="tabpanel"
            aria-labelledby="collections-tab-5-trigger"
          >
            <div className="row">
              {filtered.slice(0, 1).map((elm, i) => (
                <div key={i} className="col-md-6 col-lg-5 col-xl-40per">
                  <div className="product-card product-card_style8 hover-container">
                    <div className="pc__img-wrapper pc__img-wrapper_wide2">
                      <Link href={`/product1_simple/${elm.id}`}>
                        <Image
                          loading="lazy"
                          src={elm.imgSrc}
                          width="256"
                          height="233"
                          alt="image"
                          className="pc__img"
                        />
                      </Link>
                    </div>

                    <div className="pc__info position-relative">
                      <p className="pc__category">{elm.category}</p>
                      <h6 className="pc__title">
                        <Link href={`/product1_simple/${elm.id}`}>
                          {elm.title}
                        </Link>
                      </h6>
                      <div className="product-card__review d-sm-flex align-items-center">
                        <div className="reviews-group d-flex">
                          <Star stars={5} />
                        </div>
                        <span className="reviews-note text-lowercase text-secondary ms-sm-1">
                          {elm.reviews}
                        </span>
                      </div>

                      <div className="product-card__price d-flex mb-2">
                        <span className="money price fs-5">${elm.price}</span>
                      </div>

                      <div className="product-card__countdown mb-3">
                        <div className="text-secondary d-flex align-items-center gap-1 mb-1">
                          <span>Ends in</span>
                          <div
                            className="position-relative d-flex align-items-center text-center color-secondary js-countdown"
                            data-date="18-3-2024"
                            data-time="06:50"
                          >
                            <CountDownComponent2 />
                          </div>
                        </div>
                        <div className="progress progress_uomo progress_uomo_small mb-2">
                          <div
                            className="progress-bar theme-bg-color-secondary"
                            role="progressbar"
                            style={{ width: "40%" }}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div className="text-secondary d-flex align-items-center justify-content-between gap-2">
                          <div>
                            Available: <span className="text-primary">6</span>
                          </div>
                          <div>
                            Already Sold:{" "}
                            <span className="text-primary">28</span>
                          </div>
                        </div>
                      </div>

                      <div className="anim_appear-fade position-relative d-none d-sm-flex align-items-center bg-body">
                        <button
                          className="btn-link btn-link_lg me-auto me-xxl-4 text-uppercase fw-medium js-add-cart js-open-aside"
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
                        <button
                          className="btn-link btn-link_lg me-auto text-uppercase fw-medium js-quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickView"
                          onClick={() => setQuickViewItem(elm)}
                          title="Quick view"
                        >
                          <span className="d-xxl-block">Quick View</span>
                          <span className="d-xxl-none">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_view" />
                            </svg>
                          </span>
                        </button>
                        <button
                          className={`pc__btn-wl bg-transparent border-0 js-add-wishlist ${
                            isAddedtoWishlist(elm.id) ? "active" : ""
                          }`}
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
                </div>
              ))}

              <div className="col-md-6 col-lg-5 col-xl-60per">
                <div className="row">
                  {filtered.slice(1).map((elm, i) => (
                    <div key={i} className="col-md-6 col-lg-4">
                      <div className="product-card product-card_style8 hover-container">
                        <div className="pc__img-wrapper pc__img-wrapper_wide2">
                          <Link href={`/product1_simple/${elm.id}`}>
                            <Image
                              loading="lazy"
                              src={elm.imgSrc}
                              width="256"
                              height="233"
                              alt="image"
                              className="pc__img"
                            />
                          </Link>
                        </div>

                        <div className="pc__info position-relative">
                          <p className="pc__category">{elm.category}</p>
                          <h6 className="pc__title">
                            <Link href={`/product1_simple/${elm.id}`}>
                              {elm.title}
                            </Link>
                          </h6>
                          <div className="product-card__review d-sm-flex align-items-center">
                            <div className="reviews-group d-flex">
                              <Star stars={5} />
                            </div>
                            <span className="reviews-note text-lowercase text-secondary ms-sm-1">
                              {elm.reviews}
                            </span>
                          </div>

                          <div className="product-card__price d-flex mb-2">
                            <span className="money price fs-5">
                              ${elm.price}
                            </span>
                          </div>

                          <div className="anim_appear-bottom position-absolute bottom-0 start-0 end-0 d-none d-sm-flex align-items-center bg-body">
                            <button
                              className="btn-link btn-link_lg me-auto me-xxl-4 text-uppercase fw-medium js-add-cart js-open-aside"
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
                            <button
                              className="btn-link btn-link_lg me-auto text-uppercase fw-medium js-quick-view"
                              data-bs-toggle="modal"
                              data-bs-target="#quickView"
                              onClick={() => setQuickViewItem(elm)}
                              title="Quick view"
                            >
                              <span className="d-xxl-block">Quick View</span>
                              <span className="d-xxl-none">
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <use href="#icon_view" />
                                </svg>
                              </span>
                            </button>
                          </div>
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
