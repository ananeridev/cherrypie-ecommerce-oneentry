"use client";
const filterCategories3 = ["Featured", "Popular", "Best Rated"];
import { useContextElement } from "@/context/Context";
import { products9 } from "@/data/products/fashion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function TopCollections() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 5,
    slidesPerGroup: 5,
    modules: [Autoplay, Navigation, Pagination],
    effect: "none",
    loop: false,
    pagination: {
      el: "#collections-tab-1 .products-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: "#collections-tab-1 .products-carousel__next",
      prevEl: "#collections-tab-1 .products-carousel__prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 24,
        pagination: false,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 28,
        pagination: false,
      },
    },
  };
  const [currentCategory, setCurrentCategory] = useState(filterCategories3[0]);
  const [filtered, setFiltered] = useState(products9);
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products9);
    } else {
      setFiltered([
        ...products9.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory]);
  return (
    <div className="bg-white">
      <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>

      <section className="products-carousel container">
        <h2 className="section-title fw-normal text-center mb-3 pb-xl-3 mb-xl-3">
          Our Top Collection
        </h2>

        <ul
          className="nav nav-tabs mb-3 mb-xl-5 justify-content-center"
          id="collections-tab"
          role="tablist"
        >
          {filterCategories3.map((elm, i) => (
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

        <div className="tab-content" id="collections-tab-content">
          <div
            className="tab-pane fade show active"
            id="collections-tab-1"
            role="tabpanel"
            aria-labelledby="collections-tab-1-trigger"
          >
            <div className="position-relative">
              <Swiper
                className="swiper-container js-swiper-slider"
                {...swiperOptions}
              >
                {filtered.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide product-card">
                    <div className="pc__img-wrapper">
                      <Link href={`/product1_simple/${elm.id}`}>
                        <Image
                          loading="lazy"
                          src={elm.imgSrc}
                          width="260"
                          height="315"
                          alt="Cropped Faux leather Jacket"
                          className="pc__img"
                        />
                      </Link>
                      <button
                        className="pc__atc btn btn-lg anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
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
                      <div className="anim_appear-right position-absolute top-0 mt-2 me-2">
                        <button
                          className="btn btn-round-sm btn-hover-red d-block border-0 text-uppercase mb-2 js-quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickView"
                          onClick={() => setQuickViewItem(elm)}
                          title="Quick view"
                        >
                          <svg
                            className="d-inline-block"
                            width="14"
                            height="14"
                            viewBox="0 0 18 18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_view" />
                          </svg>
                        </button>
                        <button
                          className={`btn btn-round-sm btn-hover-red d-block border-0 text-uppercase js-add-wishlist ${
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
                        {elm.priceOld && (
                          <>
                            <span className="money price price-old">
                              ${elm.priceOld}
                            </span>
                            <span className="money price price-sale">
                              ${elm.price}
                            </span>
                          </>
                        )}
                        {!elm.priceOld && (
                          <span className="money price">${elm.price}</span>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* <!-- /.swiper-wrapper --> */}
              </Swiper>
              {/* <!-- /.swiper-container js-swiper-slider --> */}

              <div className="cursor-pointer products-carousel__prev type2 position-absolute top-50 d-flex align-items-center justify-content-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_prev_md" />
                </svg>
              </div>
              {/* <!-- /.products-carousel__prev --> */}
              <div className="cursor-pointer products-carousel__next type2 position-absolute top-50 d-flex align-items-center justify-content-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_next_md" />
                </svg>
              </div>
              {/* <!-- /.products-carousel__next --> */}

              <div className="products-pagination mt-4 mb-5 d-flex align-items-center justify-content-center"></div>
              {/* <!-- /.products-pagination --> */}
            </div>
            {/* <!-- /.position-relative --> */}
          </div>

          {/* <!-- /.tab-pane fade show--> */}
        </div>
        {/* <!-- /.tab-content pt-2 --> */}
      </section>
      {/* <!-- /.products-grid --> */}

      <div className="pt-1 pb-5"></div>
    </div>
  );
}
