"use client";

import { categoriesData11 } from "@/data/categories";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
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
    navigation: false,
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 4,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 40,
        pagination: false,
      },
      1200: {
        slidesPerView: 6,
        slidesPerGroup: 1,
        spaceBetween: 60,
        pagination: false,
      },
      1500: {
        slidesPerView: 6,
        slidesPerGroup: 1,
        spaceBetween: 80,
        pagination: false,
      },
    },
  };
  return (
    <section className="category-carousel container">
      <h2 className="text-uppercase h3 fw-bold theme-color text-center mb-4 pt-1 pb-lg-2">
        Shop By Categories
      </h2>

      <div className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
          data-settings=""
        >
          {categoriesData11.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <Image
                loading="lazy"
                className="w-100 h-auto mb-3"
                src={elm.imgSrc}
                width="170"
                height="145"
                alt="image"
              />
              <h3 className="text-center m-0">
                <Link
                  href="/shop-1"
                  className="menu-link fw-bold fs-15 theme-color text-uppercase"
                >
                  {elm.title}
                </Link>
              </h3>
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
