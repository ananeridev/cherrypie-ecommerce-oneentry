"use client";
import { products17 } from "@/data/products/fashion";
import Link from "next/link";
import React from "react";
import { Tooltip } from "react-tooltip";
import Image from "next/image";

export default function Lookbook() {
  return (
    <section className="lookbook-products position-relative">
      <Image
        className="w-100 h-auto"
        loading="lazy"
        src="/assets/images/home/demo9/lookbook-bg.jpg"
        width="1903"
        height="709"
        alt="image"
      />
      <h2
        className="section-title position-absolute position-top-center fw-normal text-center"
        style={{ top: "13.3%" }}
      >
        LIVING ROOM FURNITURE
        <br />
        <span className="h2 fw-normal">Discount 50%</span>
      </h2>
      {products17.map(({ id, style, imgSrc, price, title }) => (
        <React.Fragment key={id}>
          <button
            className="popover-point type2 position-absolute"
            style={style}
            data-tooltip-id={id.toString()}
          >
            <span>+</span>
          </button>
          <Tooltip
            place="right-start"
            className="example"
            render={({ content, activeAnchor }) => (
              <div className="popover-product">
                <Link href={`/product1_simple/${id}`}>
                  <Image
                    width={330}
                    height={400}
                    loading="lazy"
                    className="mb-3"
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
    </section>
  );
}
