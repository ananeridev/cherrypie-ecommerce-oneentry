"use client";
import Link from "next/link";

import { slideData11 } from "@/data/heroslides";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Navigation, EffectFade],
    navigation: {
      nextEl: ".slideshow__next",
      prevEl: ".slideshow__prev",
    },
    pagination: false,
    slidesPerView: 1,
    effect: "fade",
    loop: true,
  };
  return (
    <Swiper
      {...swiperOptions}
      className="swiper-container js-swiper-slider slideshow minh-100 slideshow-navigation-white-sm swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
    >
      {slideData11.map((elm, i) => (
        <SwiperSlide key={i} className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div
              className="slideshow-bg"
              style={{ backgroundColor: "#f5e6e0" }}
            >
              <Image
                loading="lazy"
                src={elm.imgSrc}
                width="1920"
                height="960"
                alt="Pattern"
                className="slideshow-bg__img object-fit-cover"
              />
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text-uppercase fs-18 fw-medium animate animate_fade animate_btt animate_delay-3 text-uppercase text-white">
                {elm.subtitle}
              </h6>
              <h2 className="h1 fw-bold color-white mb-4 animate animate_fade animate_btt animate_delay-5 text-uppercase">
                {elm.title.split(" ").slice(0, 3).join(" ")}
                <br />
                {elm.title.split(" ").slice(3).join(" ")}
              </h2>
              <div className="d-flex align-items-center gap-4 animate animate_fade animate_btt animate_delay-7">
                <Link
                  href="/shop-1"
                  className="btn btn-outline-primary border-0 fw-bold text-uppercase"
                >
                  Shop Now
                </Link>
                <Link
                  href="/shop-1"
                  className="btn btn-outline-primary border-0 color-white fw-bold theme-bg-color text-uppercase"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}

      <div className="cursor-pointer slideshow__prev position-absolute top-50 d-flex align-items-center justify-content-center border-radius-0 border-1 border-white color-white transparent-bg">
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="#icon_prev_sm"></use>
        </svg>
      </div>
      {/* <!-- /.slideshow__prev --> */}
      <div className="cursor-pointer slideshow__next position-absolute top-50 d-flex align-items-center justify-content-center border-radius-0 border-1 border-white color-white transparent-bg">
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="#icon_next_sm"></use>
        </svg>
      </div>
      {/* <!-- /.slideshow__next --> */}
    </Swiper>
  );
}
