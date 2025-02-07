"use client";
import React from "react";
import Image from "next/image";

export default function Cta() {
  return (
    <section className="newsletter d-flex flex-column align-items-center justify-content-center position-relative">
      <div className="mb-4 mb-xl-5 mt-1 mt-xl-4 pt-1 pt-xl-5 pb-5"></div>
      <div className="slideshow-bg position-absolute w-100 h-100">
        <Image
          loading="lazy"
          src="/assets/images/home/demo13/newsletter_bg.jpg"
          width="1920"
          height="500"
          alt="Pattern"
          className="slideshow-bg__img object-fit-cover"
        />
      </div>
      <div className="block-newsletter text-center position-relative mt-2 mb-2">
        <h3 className="block__title fs-35 fw-semi-bold mb-2">
          DON'T MISS THE CHANGE TO GET 40% OFF
        </h3>
        <p>Get the latest products and news update daily in fastest.</p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="block-newsletter__form"
        >
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Your email address"
          />
          <button
            className="btn btn-secondary fw-medium theme-bg-color border-0"
            type="submit"
          >
            JOIN
          </button>
        </form>
      </div>
      <div className="mb-4 mb-xl-5 mt-1 mt-xl-4 pt-1 pt-xl-5 pb-5"></div>
    </section>
  );
}
