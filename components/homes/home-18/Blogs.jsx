"use client";

import { blogs10 } from "@/data/blogs";
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
      992: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="blog-carousel container">
      <h2 className="section-title text-uppercase fs-30 fw-semi-bold text-center mb-2">
        Latest News
      </h2>
      <p className="fs-13 mb-3 pb-2 pb-xl-3 text-secondary text-center">
        The World's Premium Brands In One Destination.
      </p>

      <div className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {blogs10.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide blog-grid__item mb-4">
              <div className="blog-grid__item-image">
                <Image
                  loading="lazy"
                  className="h-auto"
                  src={elm.imgSrc}
                  width="331"
                  height="300"
                  alt="image"
                />
              </div>
              <div className="blog-grid__item-detail">
                <div className="blog-grid__item-meta text-lowercase">
                  <span className="blog-grid__item-meta__author">
                    By {elm.author}
                  </span>
                  <span className="blog-grid__item-meta__date">{elm.date}</span>
                </div>
                <div className="blog-grid__item-title mb-2">
                  <Link
                    href={`/blog_single/${elm.id}`}
                    className="fs-15 text-uppercase fw-semi-bold"
                  >
                    {elm.title}
                  </Link>
                </div>
                <div className="blog-grid__item-content mb-2">
                  <p className="text-secondary">{elm.content}</p>
                  <Link
                    href={`/blog_single/${elm.id}`}
                    className="btn-link btn-link_md default-underline fs-13 text-uppercase fw-semi-bold"
                  >
                    Read More
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
