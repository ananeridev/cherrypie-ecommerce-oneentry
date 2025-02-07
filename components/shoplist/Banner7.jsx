import { categories3 } from "@/data/categories";
import React from "react";
import Image from "next/image";

export default function Banner7() {
  return (
    <section className="full-width_padding">
      <div
        className="full-width_border border-2"
        style={{ borderColor: "#eee" }}
      >
        <div className="shop-banner position-relative">
          <div className="background-img" style={{ backgroundColor: "#eee" }}>
            <Image
              loading="lazy"
              src="/assets/images/slideshow-pattern.png"
              width="1759"
              height="420"
              alt="Pattern"
              className="slideshow-bg__img object-fit-cover"
            />
          </div>

          <div className="shop-categories position-relative">
            <h2 className="h1 stroke-text smooth-16 text-uppercase text-center fw-bold mb-3 mb-xl-4">
              Shop
            </h2>

            <div className="shop-categories__list d-flex align-items-center flex-wrap justify-content-center">
              {categories3.slice(0, 8).map((elm, i) => (
                <a
                  key={i}
                  href="#"
                  className="d-block shop-categories__item_sm mb-3"
                >
                  <div className="shop-categories__item-img rounded-circle bg-white d-flex align-items-center justify-content-center">
                    <Image
                      loading="lazy"
                      className="w-100  h-auto"
                      src={elm.imgSrc}
                      width="124"
                      height="124"
                      alt="image"
                    />
                  </div>
                  <h6 className="pt-1 mt-3 mt-xl-4 mb-0 text-center">
                    {elm.name}
                  </h6>
                </a>
              ))}
            </div>
          </div>
          {/* <!-- /.shop-categories position-relative --> */}
        </div>
        {/* <!-- /.shop-banner --> */}
      </div>
    </section>
  );
}
