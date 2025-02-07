import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="banner position-relative full-screen pt-5 d-flex align-items-center justify-content-center">
      <Image
        loading="lazy"
        width="1920"
        height="960"
        src="/assets/images/home/demo23/banner-2-bg.jpg"
        alt="image"
        className="position-absolute w-100 h-100 left-0 top-0 object-fit-cover"
      />
      <div className="container py-3 py-xl-5 position-relative">
        <h2 className="fs-30 fw-semi-bold text-uppercase text-center">
          WHAT’S NEW?
        </h2>
        <p className="text-center text-secondary mb-4 mb-xl-5">
          The World's Premium Brands In One Destination.
        </p>
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <Image
              loading="lazy"
              width="700"
              height="700"
              src="/assets/images/home/demo23/banner-2-item.png"
              alt="image"
              className="w-100 h-auto mb-4 mb-xl-5"
            />
          </div>
          <div className="col-sm-6 col-lg-3 order-lg--1 d-flex align-items-center">
            <div className="">
              <div className="mb-4">
                <h3 className="fs-18 fw-semi-bold mb-2">Perfect Accessory</h3>
                <p className="text-secondary fs-13">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="fs-18 fw-semi-bold mb-2">Slim Design</h3>
                <p className="text-secondary fs-13">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="fs-18 fw-semi-bold mb-2">High Quality</h3>
                <p className="text-secondary fs-13">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="fs-18 fw-semi-bold mb-2">Durable materials</h3>
                <p className="text-secondary fs-13">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 d-flex align-items-center">
            <div className="text-sm-end">
              <div className="mb-4">
                <h3 className="fs-18 fw-semi-bold mb-2">Stainless Steel</h3>
                <p className="text-secondary fs-13">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="fs-18 fw-semi-bold mb-2">Satin black finish</h3>
                <p className="text-secondary fs-13">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="fs-18 fw-semi-bold mb-2">Adjustable length</h3>
                <p className="text-secondary fs-13">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="fs-18 fw-semi-bold mb-2">Steel lugs</h3>
                <p className="text-secondary fs-13">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
