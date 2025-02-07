"use client";
import Link from "next/link";

import { categories4 } from "@/data/categories";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Categories() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Pagination],
    slidesPerView: 8,
    slidesPerGroup: 1,
    effect: "none",
    loop: true,
    pagination: {
      el: "#category_carousel .slideshow-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 6,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 8,
        slidesPerGroup: 2,
        spaceBetween: 40,
      },
    },
  };
  return (
    <section className="category-carousel container">
      <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4">
        <h2 className="section-title fw-bold">Featured Categories</h2>
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
          {categories4.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <Image
                loading="lazy"
                className="w-100 h-auto mb-3"
                src={elm.imageSrc}
                width="141"
                height="141"
                alt="image"
              />
              <div className="text-center">
                <a href="#" className="menu-link fw-medium">
                  {elm.category.split(" ")[0]}
                  <br />
                  {elm.category.split(" ").slice(1).join(" ")}
                </a>
              </div>
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}

        <div className="slideshow-pagination mt-5 d-flex align-items-center justify-content-center"></div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
