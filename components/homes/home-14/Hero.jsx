"use client";
import Link from "next/link";

import { slideData9 } from "@/data/heroslides";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Pagination, EffectFade],
    navigation: false,
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
      className="swiper-container js-swiper-slider slideshow type4 slideshow-navigation-white-sm swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
    >
      {slideData9.map((elm, i) => (
        <SwiperSlide key={i} className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-bg">
              <Image
                loading="lazy"
                src={elm.bgImg}
                width="1920"
                height="600"
                alt="Pattern"
                className="slideshow-bg__img object-fit-cover"
              />
            </div>
            <div className="position-absolute left-0 right-0 bottom-0 top-0 container">
              <div className="slideshow-character position-absolute position-right-bottom">
                <Image
                  loading="lazy"
                  src={elm.characterImg}
                  width="697"
                  height="540"
                  alt="Woman Fashion 1"
                  className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto"
                />
              </div>
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6
                className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3"
                style={{ color: "#5e6b8c" }}
              >
                FACEMASK
              </h6>
              <h2 className="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white theme-color">
                {elm.title}
              </h2>
              <p className="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5 theme-color">
                {elm.subtitle}
              </p>
              <Link
                href="/shop-1"
                className="btn btn-outline-primary animate_btt animate_delay-7 border-0 fs-base text-uppercase fw-medium btn-50 border-circle theme-bg-color-secondary text-white"
              >
                <span>SHOP NOW</span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* <!-- /.slideshow-item --> */}

      {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}

      <div className="container">
        <div className="slideshow-pagination d-flex align-items-center position-absolute bottom-0 left-50 mb-5"></div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.container --> */}
    </Swiper>
  );
}
