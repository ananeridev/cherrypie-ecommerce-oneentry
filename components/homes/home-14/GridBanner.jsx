import { gridBannerItems } from "@/data/banner";
import React from "react";
import Image from "next/image";

export default function GridBanner() {
  return (
    <section className="grid-banner container">
      <div className="row">
        {gridBannerItems.map((elm, i) => (
          <div key={i} className="col-lg-4">
            <div className="grid-banner__item position-relative mb-3">
              <Image
                loading="lazy"
                className="w-100 h-auto"
                src={elm.imgSrc}
                width="450"
                height="450"
                alt="image"
              />
              <div className="content_abs bottom-0 mx-3 mx-xl-4 mb-3 mb-xl-4 pb-2 px-2">
                <h3 className="theme-color fw-semi-bold">
                  {elm.title.split(" ")[0]}
                  <br />
                  {elm.title.split(" ").slice(1).join(" ")}
                </h3>
                <p className="theme-color fs-20 fw-medium mb-4">${elm.price}</p>
                <button className="btn btn-outline-primary border-0 fs-12 btn-40 border-circle text-uppercase theme-bg-color text-white px-4 py-2 fw-semi-bold">
                  <span>Shop Now</span>
                </button>
              </div>
              {/* <!-- /.content_abs .content_center --> */}
            </div>
          </div>
        ))}

        {/* <!-- /.col-lg-4 --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
