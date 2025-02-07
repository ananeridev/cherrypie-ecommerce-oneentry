"use client";
import Link from "next/link";

import { categories10 } from "@/data/categories";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Category() {
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
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 4,
        spaceBetween: 22,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 26,
        pagination: false,
      },
      1200: {
        slidesPerView: 6,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: false,
      },
    },
  };
  return (
    <section className="category-carousel container">
      <h2 className="section-title fw-normal fs-30 text-center mb-2">
        Shop By Category
      </h2>
      <p className="font-special fs-13 mb-3 pb-2 text-secondary text-center">
        The World's Premium Brands In One Destination.
      </p>

      <div className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
          data-settings=""
        >
          {categories10.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <Image
                loading="lazy"
                className="w-100 h-auto mb-3 border-1"
                src={elm.imgSrc}
                width="210"
                height="170"
                alt="image"
              />
              <h3 className="text-center m-0">
                <Link
                  href="/shop-1"
                  className="menu-link fw-normal text-uppercase fs-15"
                >
                  {elm.name}
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
