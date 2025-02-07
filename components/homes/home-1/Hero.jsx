"use client";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import { slides1 } from "@/data/heroslides";
import Image from "next/image";
import { socialLinks } from "@/data/socials";
export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    modules: [Pagination, EffectFade],
    effect: "fade",
    loop: true,
    pagination: {
      el: ".slideshow-pagination",
      type: "bullets",
      clickable: true,
    },
  };
  return (
    <Swiper
      style={{ maxWidth: "100%", overflow: "hidden" }}
      className="swiper-container js-swiper-slider slideshow full-width_padding swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
      {...swiperOptions}
    >
      {" "}
      {slides1.map((elm, i) => (
        <SwiperSlide
          key={i}
          className="swiper-slide full-width_border border-1"
          style={{ borderColor: "#f5e6e0" }}
        >
          <div className="overflow-hidden position-relative h-100">
            <div
              className="slideshow-bg"
              style={{ backgroundColor: "#f5e6e0" }}
            >
              <Image
                loading="lazy"
                src="/assets/images/slideshow-pattern.png"
                width="1761"
                height="778"
                alt="Pattern"
                className="slideshow-bg__img object-fit-cover"
              />
            </div>
            {/* <!-- <p className="slideshow_markup font-special text-uppercase position-absolute end-0 bottom-0">Summer</p> --> */}
            <div className="slideshow-character position-absolute bottom-0 pos_right-center">
              <Image
                loading="lazy"
                src={elm.characterImg}
                width="400"
                height="733"
                alt="Woman Fashion 1"
                className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 h-auto w-auto"
              />
              <div className="character_markup">
                <p className="text-uppercase font-sofia fw-bold animate animate_fade animate_rtl animate_delay-10">
                  {elm.characterText}
                </p>
              </div>
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text_dash text-uppercase text-red fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                {elm.text1}
              </h6>
              <h2 className="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                {elm.text2}
              </h2>
              {elm.text3 ? (
                <h2 className="text-uppercase h1 fw-bold animate animate_fade animate_btt animate_delay-5">
                  {elm.text3}
                </h2>
              ) : (
                ""
              )}
              {elm.text4 ? (
                <h6 className="text-uppercase mb-5 animate animate_fade animate_btt animate_delay-3">
                  {elm.text4}
                </h6>
              ) : (
                ""
              )}
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
      <div className="container">
        <div className="slideshow-pagination d-flex align-items-center position-absolute bottom-0 mb-5"></div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.container --> */}
      <div className="slideshow-social-follow d-none d-xxl-block position-absolute top-50 start-0 translate-middle-y text-center">
        <ul className="social-links list-unstyled mb-0 text-secondary">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="footer__social-link d-block">
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
      <a
        href="#section-collections-grid_masonry"
        className="slideshow-scroll d-none d-xxl-block position-absolute end-0 bottom-0 text_dash text-uppercase fw-medium"
      >
        Scroll
      </a>
    </Swiper>
  );
}
