import React from "react";
import Link from "next/link";

export default function NewArrival() {
  return (
    <section className="image-banner">
      <div
        className="background-img"
        style={{
          backgroundImage: `url(/assets/images/home/demo19/banner-2.jpg)`,
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="image-banner__content container py-3">
        <h2 className="text-white h1 fw-semi-bold mb-3 mb-xl-4">
          NEW ARRIVALS
        </h2>
        <Link
          href="/shop-1"
          className="btn btn-outline-primary border-0 fs-13 text-uppercase fw-semi-bold btn-50 d-inline-flex align-items-center justify-content-center"
        >
          <span>Shop Now</span>
        </Link>
      </div>
    </section>
  );
}
