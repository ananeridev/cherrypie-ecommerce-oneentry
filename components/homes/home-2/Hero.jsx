"use client";
import { slides2 } from "@/data/heroslides";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    modules: [Pagination, Autoplay, EffectFade],
    effect: "fade",
    loop: true,
    pagination: {
      el: ".slideshow-pagination",
      type: "bullets",
      clickable: true,
    },
  };
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="swiper-container js-swiper-slider slideshow type2 full-width swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
      >
        {slides2.map((elm, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div className="overflow-hidden position-relative h-100">
              <div className="slideshow-bg">
                <Image
                  loading="lazy"
                  src={elm.imageSrc}
                  width="1903"
                  height="896"
                  alt="Pattern"
                  className="slideshow-bg__img object-fit-cover"
                  style={elm.imageStyle}
                />
              </div>
              <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
                <h6 className="text_dash text-shadow-white text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                  {elm.season}
                </h6>
                <h2 className="text-uppercase text-shadow-white h1 fw-bold mb-0 animate animate_fade animate_btt animate_delay-4">
                  {elm.title}
                </h2>
                <p className="fs-6 mb-4 pb-2 text-uppercase text-shadow-white animate animate_fade animate_btt animate_delay-5">
                  {elm.discount}
                </p>
                <button className="btn btn-outline-primary border-0 fs-base text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7 btn-55">
                  <Link href="/shop-1" className="text_dash_half">
                    Discover Now
                  </Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}
        <div className="slideshow-pagination position-left-center type2"></div>
        <a
          href="#section-grid-banner"
          className="slideshow-scroll d-none d-xxl-block position-absolute end-0 bottom-3 text_dash text-uppercase fw-medium"
        >
          Scroll
        </a>
      </Swiper>
    </>
  );
}
