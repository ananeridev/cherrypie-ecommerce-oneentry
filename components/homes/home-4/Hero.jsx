"use client";
import { slides4 } from "@/data/heroslides";
import Link from "next/link";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { socialLinks } from "@/data/socials";

export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Navigation, EffectFade],
    navigation: {
      nextEl: ".slideshow__next",
      prevEl: ".slideshow__prev",
    },
    slidesPerView: 1,
    effect: "fade",
    loop: true,
  };
  return (
    <Swiper
      className="swiper-container js-swiper-slider slideshow h-xs-25rem bg-white swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
      {...swiperOptions}
    >
      {slides4.map((elm, i) => (
        <SwiperSlide key={i} className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-character position-absolute bottom-0 pos_right-center">
              <div className="character_bg position-absolute position-center">
                <Image
                  loading="lazy"
                  src={elm.markImg}
                  width="690"
                  height="690"
                  alt="image"
                  className="animate animate_fade animate_btt animate_delay-5 w-auto h-auto"
                />
              </div>
              <Image
                loading="lazy"
                src={elm.bgImg}
                width={elm.characterImgWidth}
                height={elm.characterImgHeight}
                alt="image"
                className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto"
              />
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h2 className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                {elm.title}
              </h2>
              <p className="fs-6 mb-4 pb-2 animate animate_fade animate_btt animate_delay-5">
                {elm.description}
              </p>
              <Link
                href="/shop-1"
                className="btn-link btn-link_lg default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7"
              >
                Discover Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* <!-- /.slideshow-item --> */}

      {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}

      <div className="container">
        <div className="slideshow-navigation d-flex align-items-center position-absolute bottom-0 mb-5">
          <div className="cursor-pointer slideshow__prev border-0">PREV</div>
          {/* <!-- /.products-carousel__prev --> */}
          <div className="cursor-pointer slideshow__next border-0">NEXT</div>
          {/* <!-- /.products-carousel__next --> */}
        </div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.container --> */}

      <div className="slideshow-social-follow d-none d-xxl-block position-absolute top-50 end-0 translate-middle-y text-center mx-4">
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
