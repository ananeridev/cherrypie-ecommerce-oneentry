import { gridBannerItems } from "@/data/categories";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CategoryBanner() {
  return (
    <section className="grid-banner container">
      <div className="row">
        <div className="col-md-6">
          {gridBannerItems.slice(0, 2).map((elm, i) => (
            <div key={i}>
              <div className="grid-banner__item position-relative">
                <Image
                  loading="lazy"
                  className="w-100 h-auto"
                  src={elm.imgSrc}
                  width={elm.imgWidth}
                  height={elm.imgHeight}
                  alt="image"
                />
                <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg">
                  <p className="text-uppercase mb-0">{elm.category}</p>
                  <h3 className="mb-2">{elm.title}</h3>
                  <Link
                    href="/shop-1"
                    className="btn-link default-underline text-uppercase fw-medium"
                  >
                    Shop Now
                  </Link>
                </div>
                {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
              </div>
              <div className="pb-4 pt-1"></div>
            </div>
          ))}
        </div>

        <div className="col-md-6">
          {gridBannerItems.slice(2, 4).map((elm, i) => (
            <div key={i}>
              <div className="grid-banner__item position-relative">
                <Image
                  loading="lazy"
                  className="w-100 h-auto"
                  src={elm.imgSrc}
                  width={elm.imgWidth}
                  height={elm.imgHeight}
                  alt="image"
                />
                <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg">
                  <p className="text-uppercase mb-0">{elm.category}</p>
                  <h3 className="mb-2">{elm.title}</h3>
                  <Link
                    href="/shop-1"
                    className="btn-link default-underline text-uppercase fw-medium"
                  >
                    Shop Now
                  </Link>
                </div>
                {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
              </div>
              <div className="pb-4 pt-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
