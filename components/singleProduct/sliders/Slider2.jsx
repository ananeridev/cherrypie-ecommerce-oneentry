"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

export default function Slider2() {
  return (
    <div
      className="product-single__media vertical-dot product-media-initialized w-100"
      data-media-type="vertical-dot"
    >
      <div className="product-single__image ">
        <Swiper
          slidesPerView={1}
          grabCursor
          modules={[Pagination]}
          pagination={{
            el: ".sps2",
            clickable: true,
          }}
          className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events w-100 overflow-hidden"
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
                width="579"
                height="579"
                alt="image"
              />
            </SwiperSlide>
          ))}

          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets sps2"></div>
        </Swiper>
      </div>
    </div>
  );
}
