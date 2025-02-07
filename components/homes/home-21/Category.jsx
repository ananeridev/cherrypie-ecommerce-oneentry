"use client";
import { categoryData12 } from "@/data/categories";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Category() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay],
    slidesPerView: 5,
    slidesPerGroup: 1,
    effect: "none",
    loop: false,
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
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 38,
        pagination: false,
      },
    },
  };
  return (
    <section className="category-carousel container">
      <div className="d-flex align-items-center flex-wrap gap-4 mb-3 pb-xl-2 mb-xl-3">
        <h2 className="fw-semi-bold fs-24 mb-3 text-uppercase">
          Shop By Category
        </h2>
        <Link
          className="btn-link btn-link_md default-underline text-uppercase fw-semi-bold ms-md-auto mb-3"
          href="/shop-1"
        >
          See All Products
        </Link>
      </div>
      <div
        id="category_carousel"
        className="position-relative px-3 px-xl-4 py-3 py-xl-4 bg-white border-1"
      >
        <Swiper
          className="swiper-container js-swiper-slider my-2"
          {...swiperOptions}
        >
          {categoryData12.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <Image
                src={elm.imgSrc}
                width={240}
                height={220}
                style={{ height: "fit-content" }}
                alt="image"
                className="d-block w-100 mb-3"
              />
              <h6 className="fw-semi-bold mb-2 text-uppercase">{elm.title}</h6>
              <ul className="list-unstyled text-secondary mb-2">
                {elm.products.map((elm, i) => (
                  <li key={i}>{elm}</li>
                ))}
              </ul>
              <a href="#" className="theme-color btn-link btn-link_md">
                See All Products
              </a>
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}
      </div>
    </section>
  );
}
