"use client";

import { useContextElement } from "@/context/Context";
import { products22 } from "@/data/products/electronics";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const filterCategories = ["TV/Audio", "Cameras", "Video"];
import Image from "next/image";
export default function BestSaller() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories[0]);
  const [filtered, setFiltered] = useState(products22);
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products22);
    } else {
      setFiltered([
        ...products22.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory]);
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    effect: "none",
    loop: false,
    modules: [Autoplay],
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: false,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: false,
      },
    },
  };
  return (
    <section className="best-sellers border-top-1">
      <div className="container">
        <div className="mb-3 mb-xl-5 pb-3 pb-xl-5"></div>

        <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4">
          <h2 className="section-title fw-bold">Best Sellers</h2>

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

        <div className="tab-content pt-2" id="collections-tab-content">
          <div
            className="tab-pane fade show active"
            id="collections-tab-1"
            role="tabpanel"
            aria-labelledby="collections-tab-1-trigger"
          >
            <div id="product_1" className="position-relative">
              <Swiper
                {...swiperOptions}
                className="swiper-container js-swiper-slider"
              >
                {filtered.map((elm, i) => (
                  <SwiperSlide
                    key={i}
                    className="swiper-slide product-card product-card_style8 hover-container"
                  >
                    <div className="pc__img-wrapper pc__img-wrapper_wide2">
                      <Link href={`/product1_simple/${elm.id}`}>
                        <Image
                          loading="lazy"
                          src={elm.imgSrc}
                          width="328"
                          height="298"
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
                          {[1, 2, 3, 4, 5].map((elm, i) => (
                            <svg
                              key={i}
                              className="review-star"
                              viewBox="0 0 9 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path>
                            </svg>
                          ))}
                        </div>
                        <span className="reviews-note text-lowercase text-secondary ms-sm-1">
                          {elm.reviews}
                        </span>
                      </div>

                      <div className="product-card__price d-flex mb-2">
                        <span className="money price fs-5">${elm.price}</span>
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
                  </SwiperSlide>
                ))}

                {/* <!-- /.swiper-wrapper --> */}
              </Swiper>
              {/* <!-- /.swiper-container js-swiper-slider --> */}
            </div>
            {/* <!-- /.position-relative --> */}
          </div>
        </div>
      </div>
    </section>
  );
}
