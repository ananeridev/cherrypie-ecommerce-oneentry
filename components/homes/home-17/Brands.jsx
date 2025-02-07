"use client";

import { brandImages2 } from "@/data/brands";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Brands() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay],
    slidesPerView: 7,
    slidesPerGroup: 7,
    effect: "none",
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 7,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: false,
      },
    },
  };
  return (
    <section className="brands-carousel container">
      <div className="d-flex justify-content-center flex-wrap mb-3 mb-xl-5">
        <h2 className="section-title fw-semi-bold fs-30 theme-color text-uppercase">
          Shop By Brands
        </h2>
      </div>
      <div className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {brandImages2.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <Image
                loading="lazy"
                src={elm.src}
                width={elm.width}
                height={elm.height}
                alt="image"
              />
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
