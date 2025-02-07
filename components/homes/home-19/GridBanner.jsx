import { banners5 } from "@/data/banner";
import React from "react";
import Link from "next/link";

export default function GridBanner() {
  return (
    <section className="grid-banner container mb-3">
      <div className="row">
        {banners5.map((banner, index) => (
          <div className="col-md-4" key={index}>
            <div className="grid-banner__item grid-banner__item_rect grid-banner__item_rect_3 position-relative">
              <div
                className="background-img"
                style={{ backgroundImage: `url(${banner.imgSrc})` }}
              ></div>
              <div className="content_abs d-flex flex-column justify-content-center w-100 h-100 px-3 text-center">
                {banner.title && (
                  <h3 className="text-uppercase text-white font-base fw-normal mb-2">
                    {banner.title}
                  </h3>
                )}
                {banner.promotion && (
                  <p className="mb-2 text-white">{banner.promotion}</p>
                )}
                {banner.buttonText && (
                  <p className="mb-0">
                    <Link
                      href="/shop-1"
                      className="btn-link default-underline text-uppercase text-white fw-normal fs-base w-auto"
                    >
                      {banner.buttonText}
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
        {/* <!-- /.col-md-4 --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
