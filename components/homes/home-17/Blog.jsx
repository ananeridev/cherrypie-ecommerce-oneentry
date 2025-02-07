"use client";

import { blogs9 } from "@/data/blogs";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Blog() {
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
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="blog-carousel container">
      <div className="d-flex justify-content-center flex-wrap mb-3 mb-xl-5">
        <h2 className="section-title fw-semi-bold fs-30 theme-color text-uppercase">
          Recent News Articles
        </h2>
      </div>

      <div className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
          data-settings=""
        >
          {blogs9.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="swiper-slide blog-grid__item bg-white border-radius-8"
            >
              <div className="blog-grid__item-image mb-0">
                <Image
                  loading="lazy"
                  className="h-auto"
                  src={elm.imgSrc}
                  width="329"
                  height="220"
                  alt="image"
                />
              </div>
              <div className="blog-grid__item-detail px-4 py-4">
                <div className="blog-grid__item-meta gap-2 mb-3">
                  <span className="blog-grid__item-meta__date">{elm.date}</span>
                  <span>&middot;</span>
                  <span className="blog-grid__item-meta__comment">
                    {elm.commentCount} Comment
                  </span>
                </div>
                <div className="blog-grid__item-title mb-2">
                  <Link
                    href={`/blog_single/${elm.id}`}
                    className="theme-color text-uppercase fs-15 fw-semi-bold"
                  >
                    {elm.title}
                  </Link>
                </div>
                <div className="blog-grid__item-content">
                  <p className="mb-4">{elm.content}</p>
                  <Link
                    href={`/blog_single/${elm.id}`}
                    className="btn-link text-uppercase fs-13 fw-semi-bold theme-color d-inline-flex align-items-center"
                  >
                    <span>Read More</span>
                    <svg
                      className="ms-2"
                      width="12"
                      height="12"
                      viewBox="0 0 25 25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_next_md"></use>
                    </svg>
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
