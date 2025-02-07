import { bannerItem2 } from "@/data/banner";
import React from "react";
import Link from "next/link";

export default function GridBanner() {
  return (
    <section className="grid-banner container mb-3">
      <div className="row">
        {bannerItem2.map((elm, i) => (
          <div key={i} className="col-md-4">
            <div className="grid-banner__item grid-banner__item_rect grid-banner__item_rect_3 position-relative">
              <div
                className="background-img"
                style={{ backgroundImage: `url(${elm.imgSrc})` }}
              ></div>
              <div className="content_abs content_left d-flex flex-column justify-content-center h-100">
                <h3 className="text-uppercase text-white fs-35 fw-bold mb-3">
                  {elm.title.split(" ").slice(0, 2).join(" ")}
                  <br />
                  {elm.title.split(" ").slice(2).join(" ")}
                </h3>
                <p className="mb-0">
                  <Link
                    href="/shop-1"
                    className="btn-link default-underline text-uppercase text-white fw-bold fs-base w-auto"
                  >
                    Shop Now
                  </Link>
                </p>
              </div>
              {/* <!-- /.content_abs content_left d-flex flex-column justify-content-center h-100 --> */}
            </div>
          </div>
        ))}

        {/* <!-- /.col-md-4 --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
