"use client";
import { categories } from "@/data/categories";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Categories() {
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
        spaceBetween: 30,
        pagination: false,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: false,
      },
    },
  };
  return (
    <section className="category-carousel container">
      <h2 className="section-title text-uppercase fw-bold text-center mb-3 pb-xl-2 mb-xl-4">
        Shop by category
      </h2>

      <div className="position-relative">
        <Swiper
          style={{ maxWidth: "100vw", overflow: "hidden" }}
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {categories.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <Image
                loading="lazy"
                className="w-100 h-auto mb-3"
                src={elm.imgSrc}
                width="258"
                height="278"
                alt="image"
              />
              <div className="text-center">
                <a href="#" className="menu-link menu-link_us-s text-uppercase">
                  {elm.name}
                </a>
                <p className="mb-0 text-secondary">
                  {elm.productCount} Products
                </p>
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
