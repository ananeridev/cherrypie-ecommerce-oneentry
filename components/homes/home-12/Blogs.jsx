"use client";

import { blogs5 } from "@/data/blogs";
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
    <section className="category-carousel bg-grey-f7f5ee">
      <div className="container">
        <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>

        <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4 gap-4">
          <h2 className="section-title fw-normal">Latest in Blog</h2>
          <Link
            className="btn-link btn-link_md default-underline text-uppercase fw-medium"
            href="/blog_list1"
          >
            See All Blog
          </Link>
        </div>

        <div className="position-relative">
          <Swiper
            {...swiperOptions}
            className="swiper-container js-swiper-slider"
          >
            {blogs5.map((elm, i) => (
              <SwiperSlide
                key={i}
                className="swiper-slide blog-grid__item mb-0 bg-white"
              >
                <div className="blog-grid__item-image mb-0">
                  <Image
                    loading="lazy"
                    className="h-auto"
                    src={elm.imgSrc}
                    width="330"
                    height="220"
                    alt="image"
                  />
                </div>
                <div className="blog-grid__item-detail px-4 py-4">
                  <div className="blog-grid__item-meta">
                    <span className="blog-grid__item-meta__author">
                      By {elm.author}
                    </span>
                    <span className="blog-grid__item-meta__date">
                      {elm.date}
                    </span>
                  </div>
                  <div className="blog-grid__item-title mb-0 me-3 me-xxl-5 blog-title">
                    <Link href={`/blog_single/${elm.id}`}>{elm.title}</Link>
                  </div>
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
