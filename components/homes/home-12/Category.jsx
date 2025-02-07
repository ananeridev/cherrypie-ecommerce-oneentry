"use client";
import Link from "next/link";

import { categories5 } from "@/data/categories";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Category() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay],
    slidesPerView: 8,
    slidesPerGroup: 1,
    effect: "none",
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 2,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 2,
        spaceBetween: 28,
      },
    },
  };
  return (
    <section className="category-carousel bg-grey-f7f5ee">
      <div className="container">
        <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>

        <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4 gap-4">
          <h2 className="section-title fw-normal">Shop By Category</h2>
          <Link
            className="btn-link btn-link_md default-underline text-uppercase fw-medium"
            href="/shop-12"
          >
            Shop All Categories
          </Link>
        </div>

        <div id="category_carousel" className="position-relative">
          <Swiper
            {...swiperOptions}
            className="swiper-container js-swiper-slider"
          >
            {categories5.map((elm, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <Image
                  loading="lazy"
                  className="w-100 h-auto mb-3"
                  src={elm.imageSrc}
                  width="260"
                  height="220"
                  alt="image"
                />
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium pb-0">
                    {elm.name}
                  </a>
                  {elm.productCount && (
                    <p className="mb-0 text-secondary">
                      {elm.productCount} Products
                    </p>
                  )}
                </div>
              </SwiperSlide>
            ))}

            {/* <!-- /.swiper-wrapper --> */}
          </Swiper>
          {/* <!-- /.swiper-container js-swiper-slider --> */}
        </div>
        {/* <!-- /.position-relative --> */}

        <div className="mt-3 mt-xl-5 pb-3 pt-1 pb-xl-5"></div>
      </div>
    </section>
  );
}
