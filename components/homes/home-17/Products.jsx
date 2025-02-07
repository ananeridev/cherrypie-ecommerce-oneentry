"use client";

import Star from "@/components/common/Star";
import { useContextElement } from "@/context/Context";
import { products40 } from "@/data/products/car";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Products() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 5,
    slidesPerGroup: 1,
    effect: "none",
    loop: true,
    modules: [Autoplay, Navigation],
    navigation: {
      nextEl: "#new_product .products-carousel__next",
      prevEl: "#new_product .products-carousel__prev",
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
        spaceBetween: 35,
        pagination: false,
      },
    },
  };
  return (
    <section className="products-carousel container">
      <div className="d-flex align-items-center justify-content-md-between flex-wrap mb-3 mb-xl-4">
        <h2 className="section-title fw-semi-bold fs-30 theme-color text-uppercase">
          New & Popular Products
        </h2>

        <Link
          className="btn-link default-underline text-uppercase fs-13 fw-semi-bold theme-color"
          href="/shop-1"
        >
          Shop All Products
        </Link>
      </div>
      <div id="new_product" className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {products40.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="swiper-slide product-card product-card_style9 border rounded-3 bg-white"
            >
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
                <p className="pc__category fs-13 fw-medium">{elm.category}</p>
                <h6 className="pc__title fs-16 mb-2">
                  <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
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
            </SwiperSlide>
          ))}
          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}

        <div className="cursor-pointer products-carousel__prev navigation-sm bg-white position-absolute top-50 mt-0 d-flex align-items-center justify-content-center">
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
        <div className="cursor-pointer products-carousel__next navigation-sm bg-white position-absolute top-50 mt-0 d-flex align-items-center justify-content-center">
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
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
