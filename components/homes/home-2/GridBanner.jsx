import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GridBanner() {
  return (
    <section className="grid-banner container mb-3" id="section-grid-banner">
      <div className="row">
        <div className="col-lg-4">
          <div className="grid-banner__item position-relative mb-3">
            <Image
              loading="lazy"
              className="w-100 h-auto"
              src="/assets/images/home/demo2/grid_banner_1.jpg"
              width="450"
              height="450"
              alt="image"
            />
            <div className="content_abs content_center text-center">
              <h3 className="text-uppercase fw-bold mb-1">New</h3>
              <h3 className="text-uppercase fw-bold mb-1">Horizons</h3>
              <Link
                href="/shop-1"
                className="btn-link default-underline text-uppercase fw-medium"
              >
                Shop Now
              </Link>
            </div>
            {/* <!-- /.content_abs .content_center --> */}
          </div>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <div className="grid-banner__item position-relative mb-3">
            <Image
              loading="lazy"
              className="w-100 h-auto"
              src="/assets/images/home/demo2/grid_banner_2.jpg"
              width="450"
              height="450"
              alt="image"
            />
            <div className="content_abs content_center text-center">
              <h3 className="text-uppercase fw-bold mb-1">Summer</h3>
              <h3 className="text-uppercase fw-bold mb-1">Hats</h3>
              <Link
                href="/shop-1"
                className="btn-link default-underline text-uppercase fw-medium"
              >
                Shop Now
              </Link>
            </div>
            {/* <!-- /.content_abs .content_center --> */}
          </div>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <div className="grid-banner__item position-relative mb-3">
            <Image
              loading="lazy"
              className="w-100 h-auto"
              src="/assets/images/home/demo2/grid_banner_3.jpg"
              width="450"
              height="450"
              alt="image"
            />
            <div className="content_abs content_center text-center">
              <p className="text-white mb-1">Free delivery for Uomo members</p>
              <h3 className="text-uppercase fw-bold text-white mb-1">
                Promotions Up
              </h3>
              <h3 className="text-uppercase fw-bold text-white mb-1">
                To 10% Off
              </h3>
              <Link
                href="/shop-1"
                className="btn-link default-underline text-uppercase text-white fw-medium"
              >
                See More
              </Link>
            </div>
            {/* <!-- /.content_abs .content_center --> */}
          </div>
        </div>
        {/* <!-- /.col-lg-4 --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
