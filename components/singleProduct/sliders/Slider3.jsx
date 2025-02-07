"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  {
    imgSrc: "/assets/images/products/product_0-4.png",
  },
  {
    imgSrc: "/assets/images/products/product_0-4.png",
  },
  {
    imgSrc: "/assets/images/products/product_0-4.png",
  },
  {
    imgSrc: "/assets/images/products/product_0-4.png",
  },
];
import Image from "next/image";

export default function Slider3() {
  return (
    <div
      className="product-single__media vertical-dot product-media-initialized"
      data-media-type="vertical-dot"
    >
      <div className="product-single__image">
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: ".sps3",
            clickable: true,
          }}
          slidesPerView={1}
          grabCursor
          className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
        >
          {images.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="swiper-slide product-single__image-item"
            >
              <Image
                loading="lazy"
                className="h-auto"
                src={elm.imgSrc}
                width="724"
                height="859"
                alt="image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets  sps3"></div>
      </div>
    </div>
  );
}
