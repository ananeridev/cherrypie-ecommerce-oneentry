import { shopCategories } from "@/data/categories";
import React from "react";
import Image from "next/image";

export default function Categories() {
  return (
    <section
      className="full-width_padding"
      style={{ backgroundColor: "#faf9f8" }}
    >
      <div className="shop-categories position-relative">
        <h2 className="h3 pb-3 mb-4 fw-normal text-uppercase text-center">
          You Might Like
        </h2>

        <div className="shop-categories__list d-flex align-items-center flex-wrap justify-content-center">
          {shopCategories.map((elm, i) => (
            <a key={i} href="#" className="shop-categories__item mb-3">
              <Image
                loading="lazy"
                src={elm.imgSrc}
                width="120"
                height="120"
                alt="Women Tops"
                className="shop-categories__item-img rounded-circle"
              />
              <h6 className="pt-1 mt-3 mt-xl-4 mb-0 text-center">
                {elm.category.split(" ").slice(0, 1).join(" ")}
                <br />
                {elm.category.split(" ").slice(1).join(" ")}
              </h6>
            </a>
          ))}
        </div>
      </div>
      {/* <!-- /.shop-categories position-relative --> */}
    </section>
  );
}
