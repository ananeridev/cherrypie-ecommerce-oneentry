"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import { slides1 } from "@/data/heroslides";
import Image from "next/image";
export default function Banner4() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    modules: [Pagination, EffectFade],
    effect: "fade",
    loop: true,
    pagination: {
      el: ".slideshow-pagination",
      type: "bullets",
      clickable: true,
    },
  };
  return (
    <Swiper
      className="swiper-container js-swiper-slider slideshow slideshow_small"
      {...swiperOptions}
    >
      {slides1.map((elm, i) => (
        <SwiperSlide key={i} className="swiper-slide">
          <div
            className="overflow-hidden position-relative h-100"
            style={{ background: "#eee" }}
          >
            <div className="slideshow-character position-absolute bottom-0 pos_right-center">
              <Image
                loading="lazy"
                src={elm.characterImg}
                width="246"
                height="450"
                alt="Woman Fashion 1"
                className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto"
              />
              <div className="character_markup">
                <p className="font-special text-uppercase animate animate_fade animate_rtl animate_delay-10">
                  {elm.characterText}
                </p>
              </div>
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle p-3 p-xl-5">
              <h6 className="text_dash text-uppercase text-red fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                {elm.text1}
              </h6>
              <h2 className="text-uppercase page-title fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                {elm.text2}
              </h2>
              {!i ? (
                <h2 className="text-uppercase page-title fw-bold animate animate_fade animate_btt animate_delay-5">
                  {elm.text3}
                </h2>
              ) : (
                ""
              )}
              {i ? (
                <h6 className="text-uppercase mb-3 animate animate_fade animate_btt animate_delay-3">
                  {elm.text4}
                </h6>
              ) : (
                ""
              )}
              <a
                href="#"
                className="btn-link btn-link_lg text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7"
              >
                Discover More
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="container">
        <div className="slideshow-pagination d-flex align-items-center position-absolute bottom-0 mb-5"></div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.container --> */}
      {/* <!-- /.slideshow-social-follow --> */}
    </Swiper>
  );
}
