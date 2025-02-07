"use client";

import { products29 } from "@/data/products/medical";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import CountDownComponent2 from "@/components/common/CountDownComponent2";

export default function DailyDeal() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Navigation],
    slidesPerView: 5,
    slidesPerGroup: 1,
    effect: "none",
    loop: false,
    navigation: {
      nextEl: "#product_hot_deals .products-carousel__next",
      prevEl: "#product_hot_deals .products-carousel__prev",
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
      <div className="d-flex align-items-center flex-wrap gap-4 mb-3 pb-xl-2 mb-xl-5">
        <h2 className="section-title fw-semi-bold fs-30 theme-color mb-3">
          Daily Deal Of The Day
        </h2>
        <div className="text-white theme-bg-color-secondary border-circle fw-bold d-flex align-items-center gap-2 px-4 py-1 mb-3">
          <span>Ends in:</span>
          <div
            className="position-relative d-flex align-items-center text-center color-secondary js-countdown fs-20"
            data-date="18-3-2024"
            data-time="06:50"
          >
            <CountDownComponent2 />
          </div>
        </div>
      </div>
      <div id="product_hot_deals" className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {products29.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="swiper-slide product-card product-card_style8"
            >
              <div className="pc__img-wrapper pc__img-wrapper_wide2">
                <Link href={`/product1_simple/${elm.id}`}>
                  <Image
                    loading="lazy"
                    src={elm.imgSrc}
                    width="260"
                    height="280"
                    alt="image"
                    className="pc__img"
                  />
                </Link>
              </div>

              <div className="pc__info position-relative">
                <p className="pc__category">{elm.category}</p>
                <h6 className="pc__title fs-5">
                  <Link
                    href={`/product1_simple/${elm.id}`}
                    className="theme-color"
                  >
                    {elm.title}
                  </Link>
                </h6>

                <div className="product-card__price d-flex mb-2">
                  <span className="money price fs-5 theme-color">
                    ${elm.price}
                  </span>
                </div>

                <div className="product-card__countdown">
                  <div className="progress progress_uomo progress_uomo_medium mb-2">
                    <div
                      className="progress-bar theme-bg-color-secondary"
                      role="progressbar"
                      style={{ width: elm.percentage }}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="text-secondary d-flex align-items-center justify-content-between gap-2">
                    <div>
                      Available:{" "}
                      <span className="theme-color">{elm.available}</span>
                    </div>
                    <div>
                      Already Sold:{" "}
                      <span className="theme-color">{elm.sold}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}

        <div className="cursor-pointer products-carousel__prev navigation-sm bg-light-green-e4f5f2 position-absolute top-50 d-flex align-items-center justify-content-center">
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
        <div className="cursor-pointer products-carousel__next navigation-sm bg-light-green-e4f5f2 position-absolute top-50 d-flex align-items-center justify-content-center">
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
