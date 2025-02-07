"use client";
import Link from "next/link";
import { blogs6 } from "@/data/blogs";
import Image from "next/image";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <div className="d-flex align-items-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4">
        <h2 className="section-title fw-semi-bold fs-30 theme-color">
          Our Blog
        </h2>

        <Link
          className="btn-link btn-link_md default-underline text-uppercase fw-semi-bold theme-color"
          href="/blog_list1"
        >
          View All Posts
        </Link>
      </div>

      <div className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {blogs6.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide blog-grid__item mb-4">
              <div className="blog-grid__item-image">
                <Image
                  loading="lazy"
                  className="h-auto"
                  src={elm.imgSrc}
                  width="450"
                  height="300"
                  alt="image"
                />
              </div>
              <div className="blog-grid__item-detail">
                <div className="blog-grid__item-meta">
                  <span className="blog-grid__item-meta__author">
                    By {elm.author}
                  </span>
                  <span className="blog-grid__item-meta__date">{elm.date}</span>
                </div>
                <div className="blog-grid__item-title mb-0 blog-title">
                  <Link href={`/blog_single/${elm.id}`} className="theme-color">
                    {elm.title}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}

        <div className="blog-pagination type2 mt-4 d-flex align-items-center justify-content-center"></div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
