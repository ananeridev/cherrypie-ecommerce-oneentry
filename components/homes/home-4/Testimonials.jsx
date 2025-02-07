"use client";
import { testimonials } from "@/data/testimonials";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Testimonials() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    modules: [Autoplay, Navigation, Pagination],
    effect: "none",
    loop: true,
    pagination: {
      el: ".testimonial-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonial-carousel__next",
      prevEl: ".testimonial-carousel__prev",
    },
  };
  return (
    <section className="testimonials bg-white">
      <div className="container">
        <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
        <h2 className="section-title text-center fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4">
          Testimonials
        </h2>

        <div className="position-relative">
          <Swiper
            className="swiper-container js-swiper-slider"
            {...swiperOptions}
          >
            {testimonials.map((elm, i) => (
              <SwiperSlide
                key={i}
                className="swiper-slide testimonials__item mb-4 text-center"
              >
                <div className="w-740 mx-auto">
                  <h5 className="fw-normal lh-2rem mb-4">“ {elm.quote} “</h5>
                  <p className="text-secondary mb-3">
                    {elm.author}, {elm.date}
                  </p>
                  <div className="border-circle overflow-hidden w-100px h-100px mx-auto">
                    <Image
                      loading="lazy"
                      src={elm.imgSrc}
                      width="100"
                      height="100"
                      alt="image"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* <!-- /.swiper-wrapper --> */}
          </Swiper>
          {/* <!-- /.swiper-container js-swiper-slider --> */}

          <div className="cursor-pointer products-carousel__prev testimonial-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_prev_md" />
            </svg>
          </div>
          {/* <!-- /.products-carousel__prev --> */}
          <div className="cursor-pointer products-carousel__next testimonial-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_next_md" />
            </svg>
          </div>
          {/* <!-- /.products-carousel__next --> */}

          <div className="testimonial-pagination type2 mt-4 d-flex align-items-center justify-content-center"></div>
          {/* <!-- /.products-pagination --> */}
        </div>
        {/* <!-- /.position-relative --> */}

        <div className="mt-1 pt-4 mt-xl-5 pt-xl-5"></div>
      </div>
    </section>
  );
}
