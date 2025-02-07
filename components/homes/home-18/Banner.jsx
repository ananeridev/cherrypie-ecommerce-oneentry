import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="banner container">
      <div className="row">
        <div className="col-lg-7">
          <Image
            loading="lazy"
            src="/assets/images/home/demo19/banner-1.jpg"
            width="810"
            height="600"
            alt="image"
            className="w-100 h-auto"
          />
        </div>
        <div className="col-lg-5 py-5 d-flex flex-column align-items-center justify-content-center">
          <div className="px-3 px-xl-5">
            <h2 className="fs-30 fw-semi-bold text-uppercase mb-4">
              As an official stockist of all brands, we offer
              <br />
              <span className="theme-color">watches for men & ladies.</span>
            </h2>
            <p className="text-secondary mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Many desktop
              publishing packages and web.
            </p>
            <p className="mb-0">
              <Link
                href="/shop-1"
                className="btn-link btn-link_md default-underline text-uppercase fw-semi-bold fs-13"
              >
                View More
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
