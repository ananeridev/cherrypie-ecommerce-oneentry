"use client";

import { useEffect, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/thumbs";
import "swiper/css";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
const images = [
  {
    imgSrc: "/assets/images/products/product_0.jpg",
  },
  {
    imgSrc: "/assets/images/products/product_0-1.jpg",
  },
  {
    imgSrc: "/assets/images/products/product_0-2.jpg",
  },
  {
    imgSrc: "/assets/images/products/product_0-3.jpg",
  },
];
import Image from "next/image";
import tippy from "tippy.js";

export default function Slider4() {
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div
      className="product-single__media horizontal-thumbnail product-media-initialized"
      data-media-type="horizontal-thumbnail"
    >
      <div className="product-single__image">
        <Gallery>
          <Swiper
            modules={[Thumbs, Navigation]}
            slidesPerView={1}
            navigation={{ prevEl: ".ssnbp1", nextEl: ".ssnbn1" }}
            thumbs={{ swiper: thumbsSwiper }}
            className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
            style={{ maxWidth: "100%", overflow: "hidden" }}
          >
            {images.map((elm, i) => (
              <SwiperSlide
                key={i}
                className="swiper-slide product-single__image-item"
              >
                <Item
                  original={elm.imgSrc}
                  thumbnail={elm.imgSrc}
                  width="674"
                  height="674"
                >
                  {({ ref, open }) => (
                    <>
                      <Image
                        loading="lazy"
                        className="h-auto w-100"
                        src={elm.imgSrc}
                        width="674"
                        height="674"
                        alt="image"
                      />
                      <a
                        ref={ref}
                        onClick={open}
                        data-fancybox="gallery"
                        // href="/assets/images/products/product_0.jpg"
                        className="item-zoom"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        data-tippy-content="Zoom"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_zoom" />
                        </svg>
                      </a>
                    </>
                  )}
                </Item>
              </SwiperSlide>
            ))}

            <div className="cursor-pointer swiper-button-prev ssnbp1">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_prev_sm" />
              </svg>
            </div>
            <div className="cursor-pointer swiper-button-next ssnbn1">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_next_sm" />
              </svg>
            </div>
          </Swiper>
        </Gallery>
      </div>
      <div className="product-single__thumbnail">
        <Swiper
          className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-free-mode swiper-container-thumbs swiper-thumb-3"
          modules={[Thumbs, FreeMode]}
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
        >
          {images.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="swiper-slide product-single__image-item"
              //   style={{ marginBottom: "10px" }}
            >
              <Image
                loading="lazy"
                className="h-auto"
                src={elm.imgSrc}
                width="104"
                height="104"
                alt="image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
