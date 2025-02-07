import { bannerItems } from "@/data/banner";
import React from "react";
import Link from "next/link";

export default function GridBanner() {
  return (
    <section className="grid-banner full-width_padding mb-3">
      <div className="row">
        {bannerItems.map((elm, i) => (
          <div key={i} className="col-md-6">
            <div className="grid-banner__item grid-banner__item_rect grid-banner__item_rect_2 position-relative">
              <div
                className="background-img"
                style={{ backgroundImage: `url(${elm.imgSrc})` }}
              ></div>
              <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg">
                <h6 className="text-uppercase text-white fs-base fw-medium mb-2">
                  Collection
                </h6>
                <h3 className="text-uppercase text-white fs-20 mb-3">
                  {elm.title}
                </h3>
                <Link
                  href="/shop-1"
                  className="btn-link default-underline text-uppercase text-white fw-medium"
                >
                  Shop Now
                </Link>
              </div>
              {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
            </div>
          </div>
        ))}
        {/* <!-- /.col-md-6 --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
