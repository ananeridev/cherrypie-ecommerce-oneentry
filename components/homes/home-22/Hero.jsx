import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="top-banner position-relative full-screen pt-5 pb-3 pb-xl-5 d-flex align-items-center justify-content-center">
      <Image
        loading="lazy"
        width="1920"
        height="960"
        src="/assets/images/home/demo23/banner-1.jpg"
        alt="image"
        className="position-absolute w-100 h-100 left-0 top-0 object-fit-cover"
      />
      <div className="my-3 my-xl-5 py-3 py-xl-5 px-3 px-xl-5 position-relative">
        <h2 className="fs-80 fw-semi-bold text-uppercase text-white text-center">
          This is
          <br />
          Headphone Pro
        </h2>
        <div className="d-flex align-items-center justify-content-center">
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="btn-link btn-link_lg fs-13 fw-bold text-white mb-0 d-flex align-items-center justify-content-center gap-2"
          >
            <span>Watch the product film</span>
            <svg
              className="btn-play"
              width="12"
              height="16"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_play"></use>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
