"use client";

import { blogs2 } from "@/data/blogs";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Blogs() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 4,
    slidesPerGroup: 2,

    effect: "none",
    loop: true,
    modules: [Autoplay, Pagination],
    pagination: {
      el: ".blog-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="blog-carousel bg-yellow">
      <div className="container">
        <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

        <h2 className="section-title text-center fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4">
          Latest in Blog
        </h2>

        <div className="position-relative">
          <Swiper
            className="swiper-container js-swiper-slider"
            {...swiperOptions}
          >
            {blogs2.map((elm, i) => (
              <SwiperSlide
                key={i}
                className="swiper-slide blog-grid__item bg-white"
              >
                <div className="blog-grid__item-image">
                  <Image
                    loading="lazy"
                    className="h-auto"
                    src={elm.imgSrc}
                    width="330"
                    height="220"
                    alt="image"
                  />
                </div>
                <div className="blog-grid__item-detail text-center px-3 px-xl-5 pb-4">
                  <div className="blog-grid__item-meta justify-content-center">
                    <span className="blog-grid__item-meta__author">
                      {elm.author}
                    </span>
                    <span className="blog-grid__item-meta__date">
                      {elm.date}
                    </span>
                  </div>
                  <div className="blog-grid__item-title mb-0">
                    <Link
                      style={{ fontSize: "1.125rem" }}
                      href={`/blog_single/${elm.id}`}
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

          <div className="blog-pagination type2 mt-4 d-flex align-items-center justify-content-center"></div>
          {/* <!-- /.products-pagination --> */}
        </div>
        {/* <!-- /.position-relative --> */}

        <div className="mt-1 pt-4 mt-xl-5 pt-xl-5"></div>
      </div>
    </section>
  );
}
