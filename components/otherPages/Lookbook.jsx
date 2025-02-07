import React from "react";
import Image from "next/image";

export default function Lookbook() {
  return (
    <>
      <section className="lookbook container">
        <h2 className="page-title">LOOKBOOK</h2>
      </section>
      <section className="lookbook-collection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column">
              <a
                href="#"
                className="lookbook-collection__item position-relative flex-grow-1 mb-4 effect border-plus"
              >
                <div className="lookbook-collection__item-image">
                  <Image
                    loading="lazy"
                    src="/assets/images/lookbook/lookbook-1.jpg"
                    width="690"
                    height="399"
                    alt="image"
                  />
                </div>
                <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                  <p className="text-uppercase mb-1 white-color">
                    STARTING AT $19
                  </p>
                  <h3 className="white-color">Women’s T-Shirts</h3>
                </div>
              </a>
              <a
                href="#"
                className="lookbook-collection__item position-relative flex-grow-1 mt-1 mb-4 effect border-plus"
              >
                <div className="lookbook-collection__item-image">
                  <Image
                    loading="lazy"
                    src="/assets/images/lookbook/lookbook-2.jpg"
                    width="690"
                    height="399"
                    alt="image"
                  />
                </div>
                <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                  <p className="text-uppercase mb-1">STARTING AT $21</p>
                  <h3>Slim Fit Cotton Shorts</h3>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="#"
                className="lookbook-collection__item size-lg position-relative mb-4 effect border-plus"
              >
                <div className="lookbook-collection__item-image">
                  <Image
                    loading="lazy"
                    src="/assets/images/lookbook/lookbook-3.jpg"
                    width="690"
                    height="826"
                    alt="image"
                  />
                </div>
                <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                  <p className="text-uppercase mb-1">STARTİNG AT $39</p>
                  <h3>Men’s Sportswear</h3>
                </div>
              </a>
            </div>

            <div className="col-lg-6">
              <a
                href="#"
                className="lookbook-collection__item size-lg position-relative mt-1 mb-4 effect border-plus"
              >
                <div className="lookbook-collection__item-image">
                  <Image
                    loading="lazy"
                    src="/assets/images/lookbook/lookbook-4.jpg"
                    width="690"
                    height="826"
                    alt="image"
                  />
                </div>
                <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                  <p className="text-uppercase mb-1">STARTİNG AT $39</p>
                  <h3>Knee-length Cotton Shorts</h3>
                </div>
              </a>
            </div>

            <div className="col-lg-6 d-flex flex-column">
              <a
                href="#"
                className="lookbook-collection__item position-relative flex-grow-1 mt-1 mb-4 effect border-plus"
              >
                <div className="lookbook-collection__item-image">
                  <Image
                    loading="lazy"
                    src="/assets/images/lookbook/lookbook-5.jpg"
                    width="690"
                    height="399"
                    alt="image"
                  />
                </div>
                <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                  <p className="text-uppercase mb-1">STARTING AT $19</p>
                  <h3>Canvas Trainers</h3>
                </div>
              </a>
              <a
                href="#"
                className="lookbook-collection__item position-relative flex-grow-1 mt-1 mb-4 effect border-plus"
              >
                <div className="lookbook-collection__item-image">
                  <Image
                    loading="lazy"
                    src="/assets/images/lookbook/lookbook-6.jpg"
                    width="690"
                    height="399"
                    alt="image"
                  />
                </div>
                <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                  <p className="text-uppercase mb-1">STARTING AT $21</p>
                  <h3>Slim Fit Cotton Shorts</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
