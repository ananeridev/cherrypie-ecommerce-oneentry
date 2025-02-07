"use client";
import Link from "next/link";
import Image from "next/image";

import ColorSelection from "@/components/common/ColorSelection";
import { useContextElement } from "@/context/Context";
import { products28 } from "@/data/products/glasses";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function NewArrival() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    slidesPerGroup: 4,
    effect: "none",
    loop: true,
    pagination: {
      el: ".products-pagination",
      type: "bullets",
      clickable: true,
    },
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
    <section className="products-carousel full-width_padding">
      <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
        NEW <strong>ARRIVALS</strong>
      </h2>

      <div className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {products28.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="swiper-slide product-card product-card_style10"
            >
              <div className="position-relative pb-3">
                <div className="pc__img-wrapper pc__img-wrapper_wide3">
                  <Link href={`/product1_simple/${elm.id}`}>
                    <Image
                      loading="lazy"
                      src={elm.imgSrc}
                      width="256"
                      height="201"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </Link>
                  <button
                    className={`pc__btn-wl position-absolute rounded-circle border-0 text-secondary js-add-wishlist ${
                      isAddedtoWishlist(elm.id) ? "active" : ""
                    } bg-transparent`}
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
                      <use href="#icon_heart"></use>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="pc__info position-relative d-flex flex-column align-items-center mb-3 mb-md-4 mb-xxl-5">
                <h6 className="pc__title text-uppercase fw-semi-bold">
                  <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                </h6>
                <div className="product-card__price d-flex text-secondary mb-2">
                  <span className="money price">${elm.price}</span>
                </div>
                <div className="d-flex align-items-center">
                  <ColorSelection />
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}
      </div>
      {/* <!-- /.position-relative --> */}
      <div className="text-center mt-2">
        <Link
          className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
          href="/shop-1"
        >
          See All Products
        </Link>
      </div>
    </section>
  );
}
