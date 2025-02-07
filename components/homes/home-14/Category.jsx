"use client";
import Link from "next/link";

import { categories7 } from "@/data/categories";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Category() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay],
    slidesPerView: 4,
    slidesPerGroup: 4,
    effect: "none",
    loop: true,
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
        spaceBetween: 60,
        pagination: false,
      },
      1200: {
        slidesPerView: 6,
        slidesPerGroup: 1,
        spaceBetween: 97,
        pagination: false,
      },
    },
  };
  return (
    <section className="category-carousel container">
      <h2 className="section-title fw-semi-bold fs-30 mb-3 pb-xl-2 mb-xl-5 theme-color">
        Shop by categories
      </h2>

      <div className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
          data-settings=""
        >
          {categories7.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <Image
                loading="lazy"
                className="h-auto mb-3 mx-auto d-block"
                src={elm.imgSrc}
                width="145"
                height="145"
                alt="image"
              />
              <div className="text-center">
                <Link
                  href="/shop-1"
                  className="menu-link menu-link_us-s fw-semi-bold theme-color"
                >
                  {elm.title}
                </Link>
              </div>
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
