"use client";
import Link from "next/link";

import { slidesData } from "@/data/heroslides";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { socialLinks } from "@/data/socials";

export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, EffectFade, Pagination],

    slidesPerView: 1,
    effect: "fade",
    loop: true,
  };
  return (
    <Swiper
      pagination={{
        bulletActiveClass: "swiper-pagination-bullet-active",
        el: ".spbh5",
        clickable: true,
        renderBullet: function (index, className) {
          return ` <span class="swiper-pagination-bullet ${className}">0${
            index + 1
          }</span>`;
        },
      }}
      className="swiper-container js-swiper-slider slideshow full-width_padding swiper-number-pagination swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
      {...swiperOptions}
    >
      {slidesData.map((elm, i) => (
        <SwiperSlide key={i} className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-bg">
              <Image
                loading="lazy"
                src={elm.src}
                width="1783"
                height="800"
                alt="image"
                className="slideshow-bg__img object-fit-cover object-position-right"
              />
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                {elm.title}
              </h6>
              <h2 className="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                {elm.subtitle}
              </h2>
              <Link
                href="/shop-1"
                className="btn-link btn-link_lg default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7"
              >
                Discover More
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}

      <div className="container">
        <div className="spbh5 slideshow-pagination slideshow-number-pagination d-flex align-items-center position-absolute bottom-0 mb-5 position-xxl-right-center swiper-pagination-clickable swiper-pagination-bullets"></div>
      </div>
      {/* <!-- /.products-pagination --> */}

      <div className="slideshow-social-follow d-none d-xxl-block position-absolute top-50 start-0 translate-middle-y text-center">
        <ul className="social-links list-unstyled mb-0 text-secondary">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="footer__social-link d-block ">
                <svg
                  className={link.className}
                  width={link.width}
                  height={link.height}
                  viewBox={link.viewBox}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href={link.icon} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        {/* <!-- /.social-links list-unstyled mb-0 text-secondary --> */}
        <span className="slideshow-social-follow__title d-block mt-5 text-uppercase fw-medium text-secondary">
          Follow Us
        </span>
      </div>
      {/* <!-- /.slideshow-social-follow --> */}
    </Swiper>
  );
}
