"use client";
import Link from "next/link";

import { slideData10 } from "@/data/heroslides";
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
      className="swiper-container js-swiper-slider slideshow type4 slideshow-navigation-white-sm swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
      {...swiperOptions}
    >
      {slideData10.map((elm, i) => (
        <SwiperSlide key={i} className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-bg">
              <Image
                loading="lazy"
                src={elm.bgImage}
                width="1920"
                height="600"
                alt="Pattern"
                className="slideshow-bg__img object-fit-cover"
              />
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h2
                className="fs-70 mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 text-uppercase fw-normal"
                style={{ fontFamily: "var(--font-variable-average_Sans)" }}
              >
                {elm.title}
              </h2>
              <p className="h6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5 lh-2rem">
                {elm.description.split(" ").slice(0, 13).join(" ")}
                <br />
                {elm.description.split(" ").slice(13).join(" ")}
              </p>
              <div className="animate animate_fade animate_btt animate_delay-7">
                <Link
                  href="/shop-1"
                  className="btn btn-primary border-0 fs-base text-uppercase fw-normal btn-50"
                >
                  <span>VIEW MORE</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}

      <div className="cursor-pointer slideshow__prev position-absolute top-50 d-flex align-items-center justify-content-center border-radius-0">
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
      <div className="cursor-pointer slideshow__next position-absolute top-50 d-flex align-items-center justify-content-center border-radius-0">
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
    </Swiper>
  );
}
