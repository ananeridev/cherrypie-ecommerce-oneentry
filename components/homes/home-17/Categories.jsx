"use client";
import Link from "next/link";

import { categories9 } from "@/data/categories";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Categories() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay],
    slidesPerView: 6,
    slidesPerGroup: 1,
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
      <div className="d-flex align-items-center justify-content-md-between flex-wrap mb-3 mb-xl-4">
        <h2 className="section-title fw-semi-bold fs-30 theme-color text-uppercase">
          Shop by categories
        </h2>

        <Link
          className="btn-link default-underline text-uppercase fs-13 fw-semi-bold theme-color"
          href="/shop-1"
        >
          Shop All Products
        </Link>
      </div>

      <div className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {categories9.map((elm, i) => (
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
                  className="menu-link menu-link_us-s fw-semi-bold fs-15 theme-color text-uppercase"
                >
                  {elm.name}
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
