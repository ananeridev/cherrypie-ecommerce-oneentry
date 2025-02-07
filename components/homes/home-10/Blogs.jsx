"use client";
import { blogs4 } from "@/data/blogs";
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
    },
  };
  return (
    <section className="blog-carousel container">
      <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4">
        <h2 className="section-title fw-normal text-center">Latest News</h2>
        <Link
          className="btn-link btn-link_md default-underline text-uppercase fw-medium"
          href="/blog_list1"
        >
          Read all articles
        </Link>
      </div>

      <div className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {blogs4.map((elm, i) => (
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
                <div className="blog-grid__item-title blog-title-3 mb-0">
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
    </section>
  );
}
