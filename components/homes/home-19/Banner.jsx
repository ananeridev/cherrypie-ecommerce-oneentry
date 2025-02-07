import React from "react";
import Link from "next/link";
import CountDownComponent from "@/components/common/CountDownComponent";

export default function Banner() {
  return (
    <section
      className="deal-timer position-relative d-flex align-items-center overflow-hidden container mx-auto"
      style={{ backgroundColor: "#ebebeb" }}
    >
      <div
        className="background-img"
        style={{
          backgroundImage: `url('/assets/images/home/demo20/banner-4.jpg')`,
        }}
      ></div>

      <div className="deal-timer-wrapper container px-2 px-md-3 px-lg-4 px-xl-5 position-relative">
        <div className="px-2 px-md-3 px-lg-4 px-xl-5">
          <div className="px-2 px-md-3 px-lg-4 px-xl-5">
            <div className="deal-timer__content pb-2 mb-3 mb-xl-3 mb-xxl-4">
              <p className="text_dash text-uppercase text-red fw-normal theme-color">
                Deal of the week
              </p>
              <h3 className="fs-60 fw-normal">Summer Collection</h3>
              <Link
                href="/shop-1"
                className="btn-link default-underline text-uppercase fw-medium mt-3"
              >
                Shop Now
              </Link>
            </div>

            <div className="position-relative d-flex align-items-center text-center pt-xxl-4 js-countdown">
              <CountDownComponent />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.deal-timer-wrapper --> */}
    </section>
  );
}
