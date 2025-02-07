"use client";

import { testimonials2 } from "@/data/testimonials";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Testimonials() {
  const swiperOptions = {
    autoplay: false,
    slidesPerView: 3,
    slidesPerGroup: 1,
    centeredSlides: true,
    effect: "none",
    loop: true,
    navigation: false,
    modules: [Pagination],
    pagination: {
      el: "#testimonials .slideshow-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 14,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="testimonial-carousel full-width_padding bg-white">
      <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>

      <div className="d-flex justify-content-center flex-wrap mb-3 mb-xl-5">
        <h2 className="section-title fw-semi-bold fs-30 theme-color text-uppercase">
          Testimonials From Our Customers
        </h2>
      </div>

      <div id="testimonials" className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {testimonials2.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide testimonial-card">
              <h3>{elm.title}</h3>
              <p>{elm.content}</p>
              <div className="user-info">
                <div className="user-avatar">
                  <Image
                    width={70}
                    height={70}
                    src={elm.user.avatar}
                    alt="image"
                  />
                </div>
                <div className="user-detail">
                  <h4>{elm.user.name}</h4>
                  <p>{elm.user.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}

        <div className="slideshow-pagination mt-4 mt-xl-5 d-flex align-items-center justify-content-center theme-color"></div>
      </div>
      {/* <!-- /.position-relative --> */}

      <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
    </section>
  );
}
