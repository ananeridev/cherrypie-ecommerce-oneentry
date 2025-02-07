import { banners } from "@/data/banner";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GridBanner() {
  return (
    <section className="grid-banner container mb-3">
      <div className="row">
        {banners.map((elm, i) => (
          <div key={i} className="col-lg-4">
            <div className="grid-banner__item position-relative mb-3 border-radius-4">
              <Image
                loading="lazy"
                className="w-100 h-auto"
                src={elm.imageSrc}
                width="450"
                height="300"
                alt="image"
              />
              <div className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2">
                <h3 className="fw-bold mb-1">{elm.title}</h3>
                <p className="mb-2 text-secondary">{elm.description}</p>
                <Link
                  href="/shop-1"
                  className="btn-link text-uppercase fw-medium"
                >
                  Shop Now
                </Link>
              </div>
              {/* <!-- /.content_abs content_top content_left content_top-md content_left-md pt-2 px-2 --> */}
            </div>
          </div>
        ))}

        {/* <!-- /.col-lg-4 --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
