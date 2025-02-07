import { banners4 } from "@/data/banner";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="banners container">
      <div className="row">
        {banners4.map((elm, i) => (
          <div key={i} className="col-lg-4">
            <div className="position-relative overflow-hidden border-radius-10">
              <Image
                loading="lazy"
                src={elm.imageSrc}
                width="448"
                height="235"
                style={{ height: "fit-content" }}
                alt="image"
              />
              <div className="content_abs content_center text-left container w-100 px-4 mx-3">
                <h3 className="text-uppercase fs-20 fw-semi-bold text-white">
                  {elm.title}
                  <br />
                  {elm.subtitle}
                </h3>
                <Link
                  href="/shop-1"
                  className="btn-link default-underline text-uppercase fw-semi-bold text-white fs-13"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
