import { products14 } from "@/data/products/fashion";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function ProductsGrid() {
  return (
    <section className="products-grid-with-banner container">
      <div className="row">
        <div className="col-md-6 col-lg-5 col-xl-40per">
          <div className="position-relative mb-4">
            <Image
              loading="lazy"
              src="/assets/images/home/demo7/product-banner.jpg"
              width="546"
              height="762"
              className="w-100 h-auto"
              alt="image"
            />
            <div className="content_abs content_top content_left content_bottom-lg content_left-lg">
              <h2 className="fs-40 fw-normal text-uppercase mb-0 font-courgette">
                Sportswear
              </h2>
              <p className="mb-4">Sale Upto 50% On New Coming</p>
              <a className="btn btn-outline-primary border-0 fs-base text-uppercase fw-medium btn-55 d-inline-flex align-items-center">
                <span>Discover Now</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-7 col-xl-60per">
          <div className="row row-cols-2 row-cols-lg-3">
            {products14.map((elm, i) => (
              <div key={i} className="product-card-wrapper overflow-hidden">
                <div className="product-card mb-2 mb-md-3">
                  <div className="pc__img-wrapper">
                    <Link href={`/product1_simple/${elm.id}`}>
                      <Image
                        loading="lazy"
                        src={elm.imgSrc}
                        width="258"
                        height="313"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </Link>
                  </div>

                  <div className="pc__info position-relative bg-body">
                    <div className="position-relative">
                      <h6 className="pc__title">
                        <Link href={`/product1_simple/${elm.id}`}>
                          {elm.title}
                        </Link>
                      </h6>
                      <div className="product-card__price d-flex">
                        <span className="money price">${elm.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- /.row --> */}
        </div>
      </div>
    </section>
  );
}
