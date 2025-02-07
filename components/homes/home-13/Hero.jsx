"use client";
import Link from "next/link";
import Image from "next/image";

import { slideData8 } from "@/data/heroslides";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
      className="swiper-container js-swiper-slider slideshow slideshow-lg swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
      {...swiperOptions}
    >
      {slideData8.map((elm, i) => (
        <SwiperSlide key={i} className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div
              className="slideshow-bg"
              style={{ backgroundColor: elm.backgroundColor }}
            >
              <Image
                loading="lazy"
                src={elm.imgSrc}
                width="1920"
                height="760"
                alt="Pattern"
                className="slideshow-bg__img object-fit-cover"
              />
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 text-white mb-3 mb-md-4">
                {elm.title1}
              </h6>
              <h2 className="fs-45 fw-semi-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-white">
                {elm.title2}
              </h2>
              <h2 className="fs-45 fw-semi-bold mb-2 mb-lg-4 animate animate_fade animate_btt animate_delay-5 lh-1 text-white">
                {elm.title3}
              </h2>
              <div className="animate animate_fade animate_btt animate_delay-7">
                <Link
                  href="/shop-1"
                  className="btn btn-outline-primary border-0 fs-base text-uppercase fw-medium btn-50"
                >
                  <span>SHOP NOW</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}
      <div className="container-fluid">
        <div className="position-relative">
          <a
            href="#section-collections-grid_masonry"
            className="slideshow-scroll d-none d-xxl-block position-absolute end-0 bottom-0 text_dash text-uppercase fw-medium text-white mb-4"
          >
            Scroll
          </a>
        </div>
      </div>
    </Swiper>
  );
}
