"use client";

import Star from "@/components/common/Star";
import { useContextElement } from "@/context/Context";
import { products33 } from "@/data/products/cosmetics";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Featured() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Navigation],
    slidesPerView: 4,
    slidesPerGroup: 4,
    effect: "none",
    loop: true,
    pagination: false,
    navigation: {
      nextEl: ".products-carousel__next",
      prevEl: ".products-carousel__prev",
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
    },
  };
  return (
    <section className="products-carousel container">
      <h2 className="section-title text-uppercase fs-25 fw-medium text-center mb-2">
        Weekly Featured Products
      </h2>
      <p className="fs-15 mb-4 pb-xl-2 mb-xl-4 text-secondary text-center">
        The World's Premium Brands In One Destination.
      </p>

      <div className="position-relative">
        <Swiper
          className="swiper-container js-swiper-slider"
          {...swiperOptions}
        >
          {products33.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <Link href={`/product1_simple/${elm.id}`}>
                  <Image
                    loading="lazy"
                    src={elm.imgSrc}
                    width="330"
                    height="400"
                    alt="Cropped Faux leather Jacket"
                    className="pc__img"
                  />
                </Link>
                <button
                  className="pc__atc btn btn-primary btn-lg anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside left-0 w-100 bottom-0 btn-50 text-white d-flex align-items-center justify-content-center gap-2"
                  onClick={() => addProductToCart(elm.id)}
                  title={
                    isAddedToCartProducts(elm.id)
                      ? "Already Added"
                      : "Add to Cart"
                  }
                >
                  <svg
                    className="d-block me-1"
                    width="20"
                    height="20"
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
                  <span>
                    {isAddedToCartProducts(elm.id)
                      ? "Already Added"
                      : "Add To Cart"}
                  </span>
                </button>
                <div className="anim_appear-right position-absolute top-0 mt-3 me-3">
                  <button
                    className={`btn btn-square btn-hover-primary d-block border-1 text-uppercase mb-2 js-add-wishlist ${
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
                  <button
                    className="btn btn-square btn-hover-primary d-block border-1 text-uppercase js-quick-view"
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
                      <use href="#icon_view"></use>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="pc__info position-relative text-center">
                <p className="pc__category text-secondary">{elm.category}</p>
                <h6 className="pc__title text-uppercase fw-medium mb-2">
                  <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                </h6>
                <div className="product-card__price d-flex align-items-center justify-content-center mb-2">
                  <span className="money price fw-medium">${elm.price}</span>
                </div>
                <div className="product-card__review d-flex align-items-center justify-content-center">
                  <div className="reviews-group d-flex">
                    <Star stars={elm.rating} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}

        <div className="cursor-pointer products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
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
        <div className="cursor-pointer products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
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
