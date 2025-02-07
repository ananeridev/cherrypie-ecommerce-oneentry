import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Collections() {
  return (
    <section className="collections">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Image
              className="d-block w-100 h-auto mb-4"
              src="/assets/images/home/demo21/banner-1.jpg"
              alt="image"
              width="689"
              height="600"
            />
            <p className="fs-15 text-uppercase mb-2 theme-color-secondary text-center">
              CLOTHES FOR YOUR BUNDLE OF JOY
            </p>
            <div className="text-center mb-3 mb-xl-5">
              <h3>
                <Link
                  href="/shop-1"
                  className="theme-color fw-bold text-uppercase"
                >
                  baby boy collectıon
                </Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5 d-flex align-items-center justify-content-center">
            <div className="ms-lg-4">
              <Image
                className="d-block w-100 h-auto mb-4"
                src="/assets/images/home/demo21/banner-2.jpg"
                alt="image"
                width="636"
                height="458"
              />
              <p className="fs-15 text-uppercase mb-2 theme-color-secondary text-center">
                CLOTHES FOR YOUR BUNDLE OF JOY
              </p>
              <div className="text-center mb-3 mb-xl-5">
                <h3>
                  <Link
                    href="/shop-1"
                    className="theme-color fw-bold text-uppercase"
                  >
                    baby gırl colectıon
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
