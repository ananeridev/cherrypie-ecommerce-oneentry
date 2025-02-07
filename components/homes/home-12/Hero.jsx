"use client";
import Link from "next/link";

import { slidesData7 } from "@/data/heroslides";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Navigation, Pagination, EffectFade],
    navigation: {
      nextEl: ".slideshow__next",
      prevEl: ".slideshow__prev",
    },
    pagination: {
      el: ".slideshow-pagination",
      type: "bullets",
      clickable: true,
    },
    slidesPerView: 1,
    effect: "fade",
    loop: true,
  };
  return (
    <Swiper
      {...swiperOptions}
      className="swiper-container js-swiper-slider slideshow type3 slideshow-navigation-white-sm swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
    >
      {slidesData7.map((elm, i) => (
        <SwiperSlide key={i} className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div
              className="slideshow-bg"
              style={{ backgroundColor: elm.backgroundColor }}
            >
              <Image
                loading="lazy"
                src="/assets/images/home/demo12/slideshow-pattern.png"
                width="1903"
                height="560"
                alt="Pattern"
                className="slideshow-bg__img object-fit-cover"
              />
            </div>
            <div className="position-absolute left-0 right-0 bottom-0 top-0 container">
              <div className="slideshow-character position-absolute position-right-center mx-xl-5">
                <Image
                  loading="lazy"
                  src={elm.imgUrl2}
                  width="518"
                  height="329"
                  alt="Woman Fashion 1"
                  className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto"
                />
              </div>
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 theme-color">
                {elm.title}
              </h6>
              <h2 className="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white theme-color-secondary">
                {elm.subtitle1}
              </h2>
              <h2 className="fs-50 fw-bold mb-2 mb-lg-4 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white theme-color">
                {elm.subtitle2}
              </h2>
              <Link
                href="/shop-1"
                className="btn-link btn-link_lg default-underline fw-medium text-uppercase animate animate_fade animate_btt animate_delay-7"
              >
                Discover More
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}

      <div className="cursor-pointer slideshow__prev position-absolute top-50 d-flex align-items-center justify-content-center">
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="#icon_prev_sm" />
        </svg>
      </div>
      {/* <!-- /.slideshow__prev --> */}
      <div className="cursor-pointer slideshow__next position-absolute top-50 d-flex align-items-center justify-content-center">
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="#icon_next_sm" />
        </svg>
      </div>
      {/* <!-- /.slideshow__next --> */}

      <div className="container">
        <div className="slideshow-pagination d-flex align-items-center position-absolute bottom-0 mb-5"></div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.container --> */}
    </Swiper>
  );
}
