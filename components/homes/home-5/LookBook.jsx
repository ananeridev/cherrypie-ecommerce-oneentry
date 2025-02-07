import { lookbookItems } from "@/data/products/fashion";
import React from "react";
import Image from "next/image";

export default function LookBook() {
  return (
    <section className="lookbook">
      <div className="container">
        <h2 className="section-title fw-normal text-center mb-3 pb-xl-3 mb-xl-4">
          LookBook
        </h2>
        <div className="row">
          {lookbookItems.map((elm, i) => (
            <div key={i} className="col-md-6 col-xl-3">
              <div className="lookbook-item position-relative">
                <Image
                  loading="lazy"
                  className="h-auto"
                  src={elm.imgSrc}
                  width="330"
                  height="430"
                  alt="image"
                />
                <div className="position-absolute left-0 bottom-0 width-100 px-3 mx-3 mb-3 pb-2">
                  <p className="mb-1 text-uppercase text-white">
                    {elm.category}
                  </p>
                  <h5 className="mb-0 text-white">{elm.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
