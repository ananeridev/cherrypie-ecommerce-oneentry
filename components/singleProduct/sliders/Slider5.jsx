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
const playVideo = () => {
  const video = document.getElementById("video_banner_5");
  if (video.paused || video.ended) {
    // If paused or ended, play the video
    video.play();
    // Change button text to Pause
  } else {
    video.pause();
  }
};

import Image from "next/image";
import tippy from "tippy.js";

export default function Slider5() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);
  return (
    <div
      className="product-single__media vertical-thumbnail product-media-initialized"
      data-media-type="vertical-thumbnail"
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
            <SwiperSlide
              className="swiper-slide product-single__image-item"
              style={{ height: "unset" }}
            >
              <Item
                content={
                  <video autoPlay className="product-video">
                    <source src="/assets/videos/video_2.mp4" />
                  </video>
                }
                original="/assets/videos/video_2.mp4"
                thumbnail="/assets/videos/video_2.mp4"
                width="674"
                height="674"
                type="video"
              >
                {({ ref, open }) => (
                  <>
                    <a onClick={open}>
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
                    {/* <a title="360 Product View">
                      <svg
                        className="d-block"
                        width="40"
                        height="30"
                        viewBox="0 0 40 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_degree" />
                      </svg>
                    </a> */}
                    <button
                      onClick={playVideo}
                      className={`view-video btn-video-player ${
                        isPlaying ? "playing" : ""
                      }`}
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      data-tippy-content="View Video"
                    >
                      <svg
                        className="btn-play"
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_play" />
                      </svg>
                      <svg
                        className="btn-pause"
                        width="14"
                        height="22"
                        viewBox="0 0 14 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_pause" />
                      </svg>
                    </button>
                    <video
                      ref={ref}
                      id="video_banner_5"
                      className="product-video"
                      onPlay={handlePlay}
                      onPause={handlePause}
                    >
                      <source src="/assets/videos/video_2.mp4" />
                    </video>
                  </>
                )}
              </Item>
            </SwiperSlide>
            {images.slice(1, 4).map((elm, i) => (
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
          breakpoints={{
            0: {
              direction: "horizontal",
              slidesPerView: 4,
            },
            992: {
              direction: "vertical",
            },
          }}
          className="swiper-container swiper-container-initialized swiper-container-pointer-events swiper-container-free-mode swiper-container-thumbs swiper-container-horizontal"
          modules={[Thumbs, FreeMode]}
          onSwiper={setThumbsSwiper}
          freeMode
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
