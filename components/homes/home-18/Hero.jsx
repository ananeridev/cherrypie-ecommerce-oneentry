"use client";
import Link from "next/link";

import { heroSlides14 } from "@/data/heroslides";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay],
    slidesPerView: 6,
    slidesPerGroup: 1,
    effect: "none",
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: false,
      },
    },
  };
  return (
    <section className="position-relative">
      <div className="slideshow-bg position-absolute left-0 top-0 w-100">
        <Image
          loading="lazy"
          src="/assets/images/home/demo19/slider_bg_1.jpg"
          width="1920"
          height="1260"
          alt="Pattern"
          className="slideshow-bg__img object-fit-cover"
        />
      </div>
      <div className="content container mb-0 position-relative pt-3 pt-xl-5">
        <div className="pt-3 pb-3 pt-xl-5 pb-xl-5 mt-3 mt-xl-5"></div>
        <div className="pt-3 pb-3 pt-xl-5 pb-xl-5 mt-3 mt-xl-5"></div>
        <p className="text-uppercase fs-13 fw-normal text-center text-white">
          UOMO WATCH VIDEO
        </p>
        <h2 className="text-uppercase h1 fw-semi-bold text-center text-white lh-1 mb-4">
          New Watches
          <br />
          2024
        </h2>
        <div className="d-flex align-items-center text-center justify-content-center">
          <Link
            href="/shop-1"
            className="btn btn-outline-primary border-0 fs-13 fw-semi-bold text-uppercase"
          >
            Shop Now
          </Link>
        </div>
        <div className="pt-3 pb-3 pt-xl-5 pb-xl-5 mt-xl-4"></div>
        <div className="position-relative">
          <Swiper
            className="swiper-container js-swiper-slider "
            {...swiperOptions}
          >
            {heroSlides14.map((elm, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <Image
                  loading="lazy"
                  className="w-100 h-auto mb-3 d-block"
                  src={elm.imgSrc}
                  width="330"
                  height="400"
                  alt="image"
                />
                <div className="text-left">
                  <Link
                    href="/shop-1"
                    className="menu-link menu-link_us-s fw-semi-bold fs-18 text-white text-uppercase"
                  >
                    {elm.title}
                  </Link>
                </div>
              </SwiperSlide>
            ))}

            {/* <!-- /.swiper-wrapper --> */}
          </Swiper>
          {/* <!-- /.swiper-container js-swiper-slider --> */}
        </div>
        {/* <!-- /.position-relative --> */}
        <div className="pt-3 pb-3 pt-xl-5"></div>
      </div>
    </section>
  );
}
