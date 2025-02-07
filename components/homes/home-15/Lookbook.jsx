"use client";
import Link from "next/link";
import { products34 } from "@/data/products/cosmetics";

import React from "react";
import { Tooltip } from "react-tooltip";
import Image from "next/image";

export default function Lookbook() {
  return (
    <section className="lookbook-products container">
      <div className="position-relative">
        <Image
          loading="lazy"
          src="/assets/images/home/demo15/banner-1.jpg"
          className="w-100 h-auto"
          width="1410"
          height="600"
          alt="image"
        />
        <div className="content d-none d-lg-block text-center py-5 px-5 bg-white position-absolute position-center">
          <h3 className="fs-22 fw-medium text-uppercase mb-2">
            Bring Out The Hidden Beauty
          </h3>
          <p className="fs-15 color-gray-5a5a5a mb-2">
            Get styled with the high-fashion products and transform yourself.
          </p>
          <Link
            href="/shop-1"
            className="btn-link btn-link_md default-underline text-uppercase fw-medium"
          >
            Shop Now
          </Link>
        </div>

        {products34.map(({ id, style, imgSrc, price, title }) => (
          <React.Fragment key={id}>
            <button
              className="popover-point type3 position-absolute"
              style={style}
              data-tooltip-id={id.toString()}
            >
              <span>+</span>
            </button>
            <Tooltip
              className="example"
              render={({ content, activeAnchor }) => (
                <div className="popover-product">
                  <Link href={`/product1_simple/${id}`}>
                    <Image
                      loading="lazy"
                      className="mb-3"
                      width={330}
                      height={400}
                      src={imgSrc}
                      alt="image"
                    />
                  </Link>
                  <p className="fw-medium mb-0">
                    <Link href={`/product1_simple/${id}`}>{title}</Link>
                  </p>
                  <p className="mb-0">${price}</p>
                </div>
              )}
              openOnClick
              id={id.toString()}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
