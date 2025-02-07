"use client";

import { useContextElement } from "@/context/Context";
import { products30 } from "@/data/products/medical";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const filterCategories = ["Featured", "Best Seller", "Sales"];
import Image from "next/image";
export default function FeaturedProducts() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories[0]);
  const [filtered, setFiltered] = useState(products30);
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products30);
    } else {
      setFiltered([
        ...products30.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory]);
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 5,
    slidesPerGroup: 1,
    effect: "none",
    modules: [Autoplay, Pagination],
    loop: false,
    pagination: {
      el: "#product_1 .slideshow-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 22,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 28,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 28,
      },
    },
  };
  return (
    <section className="featured-products container">
      <div className="d-flex align-items-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4">
        <h2 className="section-title fw-semi-bold fs-30 theme-color">
          Featured products
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
                className={`nav-link nav-link_underscore text-uppercase theme-color ${
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
                  className="swiper-slide product-card product-card_style9 type2"
                >
                  <div className="position-relative pb-3">
                    <div className="pc__img-wrapper pc__img-wrapper_wide3">
                      <Link href={`/product1_simple/${elm.id}`}>
                        <Image
                          loading="lazy"
                          src={elm.imgSrc}
                          width="260"
                          height="280"
                          alt="Cropped Faux leather Jacket"
                          className="pc__img"
                        />
                      </Link>
                    </div>
                    <div className="anim_appear-bottom position-absolute w-100 text-center">
                      <button
                        className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside"
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
                        className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view"
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
                          <use href="#icon_view" />
                        </svg>
                      </button>
                      <button
                        className={`btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist ${
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
                          <use href="#icon_heart" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="pc__info position-relative">
                    <p className="pc__category">{elm.category}</p>
                    <h6 className="pc__title">
                      <Link href={`/product1_simple/${elm.id}`}>
                        {elm.title}
                      </Link>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">${elm.price}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* <!-- /.swiper-wrapper --> */}
            </Swiper>
            {/* <!-- /.swiper-container js-swiper-slider --> */}

            <div className="slideshow-pagination mt-4 d-flex align-items-center justify-content-center theme-color"></div>
          </div>
          {/* <!-- /.position-relative --> */}
        </div>
      </div>
    </section>
  );
}
