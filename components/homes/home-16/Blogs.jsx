"use client";

import { blogs8 } from "@/data/blogs";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Blogs() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay],
    slidesPerView: 3,
    slidesPerGroup: 3,
    effect: "none",
    loop: true,
    pagination: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="blog-carousel container">
      <h2 className="section-title text-uppercase fs-40 fw-bold text-center mb-2">
        Latest Articles
      </h2>
      <p className="fs-15 mb-2 pb-xl-2 mb-xl-4 text-secondary text-center">
        The World's Premium Brands In One Destination.
      </p>

      <div className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
          data-settings=""
        >
          {blogs8.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="swiper-slide blog-grid__item position-relative"
            >
              <div className="blog-grid__item-image mb-0">
                <Image
                  loading="lazy"
                  className="h-auto"
                  src={elm.imgSrc}
                  width="450"
                  height="350"
                  alt="image"
                />
              </div>
              <div className="blog-grid__item-detail position-absolute w-100 h-100 left-0 bottom-0 px-4 px-xl-5 pb-4 pb-xl-5 d-flex flex-column justify-content-end">
                <div className="blog-grid__item-meta text-uppercase">
                  <span className="blog-grid__item-meta__author text-white">
                    By {elm.author}
                  </span>
                  <span className="blog-grid__item-meta__date text-white">
                    {elm.date}
                  </span>
                </div>
                <div className="blog-grid__item-title mb-0">
                  <Link
                    href={`/blog_single/${elm.id}`}
                    className="h6 text-uppercase fs-22 fw-bold text-white"
                  >
                    {elm.title}
                  </Link>
                </div>
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
