import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="banner container full-screen py-4 py-xl-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="mb-4">
              <h2 className="fs-30 fw-semi-bold text-uppercase mb-4">
                Our Story
              </h2>
              <p className="fs-13 text-secondary mb-4">
                For us, Venedor is much more than a brand name; it is a way of
                being, a design philosophy,
              </p>
              <p className="fs-13 text-secondary mb-4">
                a community and much more. Along the way, some core values that
                unite the entire Venedor community have defined everything we
                do. We value resourcefulness, seeking adventure, and living in
                the moment.
              </p>
              <p className="mb-0">
                <Link
                  href="/about"
                  className="btn-link btn-link_md default-underline text-uppercase fw-semi-bold fs-13"
                >
                  Read More
                </Link>
              </p>
            </div>
          </div>
          <div className="col-xl-2"></div>
          <div className="col-lg-6 col-xl-5">
            <Image
              loading="lazy"
              src="/assets/images/home/demo23/banner-3.jpg"
              width="580"
              height="750"
              alt="Pattern"
              className="w-100 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
