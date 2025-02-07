import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="image-banner">
      <div
        className="background-img"
        style={{
          backgroundImage: "url(/assets/images/home/demo2/image_banner_bg.jpg)",
          backgroundPosition: "20% center",
        }}
      ></div>
      <div className="image-banner__content container py-3">
        <h2 className="text-white fw-bold">New Season</h2>
        <p className="text-white mb-4">New Collection Release</p>
        <Link
          href="/shop-1"
          className="btn btn-outline-primary border-0 fs-base text-uppercase fw-medium btn-55 d-inline-flex align-items-center"
        >
          <span className="text_dash_half">Shop Now</span>
        </Link>
      </div>
    </section>
  );
}
