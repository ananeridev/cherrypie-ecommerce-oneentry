"use client";
import Link from "next/link";
import { categories8 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Categories() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    effect: "none",
    loop: true,
    pagination: false,
    navigation: false,
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
    },
  };
  return (
    <section className="category-carousel container">
      <h2 className="section-title text-uppercase fs-25 fw-medium text-center mb-2">
        Most Preferred Categories
      </h2>
      <p className="fs-15 mb-4 pb-xl-2 mb-xl-4 text-secondary text-center">
        The World's Premium Brands In One Destination.
      </p>

      <div className="position-relative">
        <Swiper
          className="swiper-container js-swiper-slider"
          {...swiperOptions}
        >
          {categories8.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <Image
                loading="lazy"
                className="w-100 mb-3"
                src={elm.imgSrc}
                width="330"
                height="400"
                style={{ height: "fit-content" }}
                alt="image"
              />
              <div className="text-center">
                <Link
                  href="/shop-1"
                  className="menu-link h6 fw-medium text-uppercase"
                >
                  {elm.altText}
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
