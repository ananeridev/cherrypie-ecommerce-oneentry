import { serviceData } from "@/data/features";
import React from "react";

export default function Features() {
  return (
    <section className="service-promotion horizontal py-0">
      <div className="pb-3 pt-3"></div>
      <div className="container">
        <div className="row">
          {serviceData.map((elm, i) => (
            <div
              key={i}
              className={`col-xl-4 mb-4 mb-xl-0 ${
                i
                  ? " d-flex align-items-center justify-content-center gap-3"
                  : ""
              }`}
            >
              <div className="d-flex align-items-center justify-content-center gap-3 gap-xl-4 bg-white border-1 py-4 px-4 pe-xl-5 w-100">
                <div className="service-promotion__icon theme-color">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href={elm.icon} />
                  </svg>
                </div>
                <div className="service-promotion__content-wrap">
                  <h3 className="service-promotion__title fs-16 fw-semi-bold text-uppercase color-body my-2">
                    {elm.title}
                  </h3>
                  <p className="service-promotion__content text-secondary mb-0">
                    {elm.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* <!-- /.col-md-6.col-xl-3 --> */}

          {/* <!-- /.col-md-6.col-xl-3 --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="pb-2"></div>
      </div>
      <div className="pb-3 pt-3"></div>
    </section>
  );
}
