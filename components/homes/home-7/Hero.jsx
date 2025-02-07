"use client";
import { slidesData2 } from "@/data/heroslides";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 4,
    slidesPerGroup: 1,
    effect: "none",
    loop: true,
    modules: [Autoplay],
    pagination: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 1,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 1,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 1,
      },
    },
  };
  return (
    <Swiper
      className="swiper-container js-swiper-slider slideshow"
      {...swiperOptions}
    >
      {slidesData2.map(
        ({ id, imgSrc, title, subMenuLinks, width, height }, i) => (
          <SwiperSlide className="swiper-slide" key={i}>
            <div className="overflow-hidden position-relative h-100">
              <div className="slideshow-bg">
                <Image
                  loading="lazy"
                  src={imgSrc}
                  width={width}
                  height={height}
                  className="slideshow-bg__img object-fit-cover"
                  alt="image"
                />
              </div>
              <div className="slideshow-text container position-absolute start-0 bottom-0 px-3 mx-2 mb-3 px-xl-5 mb-xl-5">
                {subMenuLinks && (
                  <ul className="sub-menu__list list-unstyled">
                    {subMenuLinks.map(({ text, link }, index) => (
                      <li className="sub-menu__item" key={index}>
                        <Link href={link} className="menu-link menu-link_us-s">
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <h2 className="text-uppercase mb-0">{title}</h2>
              </div>
            </div>
          </SwiperSlide>
        )
      )}

      {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}
    </Swiper>
  );
}
