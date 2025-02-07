"use client";
import { useContextElement } from "@/context/Context";
import { products43 } from "@/data/products/baby";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const filterCategories = ["Women", "One Sale", "New"];
import Image from "next/image";
export default function BestSeller() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories[0]);
  const [filtered, setFiltered] = useState(products43);
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products43);
    } else {
      setFiltered([
        ...products43.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory]);
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Navigation],
    slidesPerView: 4,
    slidesPerGroup: 4,
    effect: "none",
    loop: false,
    pagination: false,
    navigation: {
      nextEl: "#product_1 .products-carousel__next",
      prevEl: "#product_1 .products-carousel__prev",
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
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: false,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 34,
        pagination: false,
      },
    },
  };
  return (
    <section className="products-carousel container">
      <h2 className="text-uppercase h3 fw-bold theme-color text-center mb-4 pt-1 pb-lg-2">
        Best Seller
      </h2>

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
              className={`nav-link nav-link_underscore  ${
                currentCategory == elm ? "active" : ""
              }`}
            >
              {elm}
            </a>
          </li>
        ))}
      </ul>

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
              data-settings=""
            >
              {filtered.map((elm, i) => (
                <SwiperSlide key={i} className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <Link href={`/product1_simple/${elm.id}`}>
                      <Image
                        loading="lazy"
                        src={elm.imgSrc}
                        width="255"
                        height="270"
                        alt="image"
                        className="pc__img"
                      />
                    </Link>
                    <button
                      className="pc__atc btn btn-lg anim_appear-bottom btn btn-50 theme-bg-color-secondary text-white position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside d-flex align-items-center justify-content-center gap-2 lh-1 border-circle"
                      onClick={() => addProductToCart(elm.id)}
                      title={
                        isAddedToCartProducts(elm.id)
                          ? "Already Added"
                          : "Add to Cart"
                      }
                    >
                      <svg
                        className="d-block"
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
                      <span className="d-block pt-1">
                        {isAddedToCartProducts(elm.id)
                          ? "Already Added"
                          : "Add To Cart"}
                      </span>
                    </button>
                    <div className="anim_appear-right position-absolute top-0 mt-2 me-2">
                      <button
                        className="btn btn-round-sm btn-hover-red d-block border-1 text-uppercase mb-2 js-quick-view theme-hover-bg"
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
                        className={`btn btn-round-sm btn-hover-red d-block border-1 text-uppercase js-add-wishlist ${
                          isAddedtoWishlist(elm.id) ? "active" : ""
                        } theme-hover-bg`}
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

                  <div className="pc__info position-relative text-center">
                    <p className="pc__category">{elm.category}</p>
                    <h6 className="pc__title mb-2 fs-15 fw-semi-bold">
                      <a
                        href={`/product1_simple/${elm.id}`}
                        className="theme-color"
                      >
                        {elm.title}
                      </a>
                    </h6>
                    <div className="product-card__price d-flex align-items-center justify-content-center">
                      <span className="money price theme-color-secondary fw-bold font-heading">
                        ${elm.price}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* <!-- /.swiper-wrapper --> */}
            </Swiper>
            {/* <!-- /.swiper-container js-swiper-slider --> */}

            <div className="cursor-pointer products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center rounded-circle border-1 bg-grey-eeeeee navigation-sm mt-0">
              <svg
                className="w-auto"
                width="7"
                height="11"
                viewBox="0 0 7 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_prev_sm"></use>
              </svg>
            </div>
            <div className="cursor-pointer products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center rounded-circle border-1 bg-grey-eeeeee navigation-sm mt-0">
              <svg
                className="w-auto"
                width="7"
                height="11"
                viewBox="0 0 7 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_next_sm"></use>
              </svg>
            </div>
          </div>
          {/* <!-- /.position-relative --> */}
        </div>
      </div>
    </section>
  );
}
