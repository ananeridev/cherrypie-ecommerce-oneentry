import { servicePromotionsData3 } from "@/data/features";
import React from "react";

export default function Features() {
  return (
    <section className="service-promotion horizontal">
      <div className="container">
        <div className="pb-2"></div>
        <div className="row">
          {servicePromotionsData3.map((elm, i) => (
            <div
              key={i}
              className="col-md-6 col-xl-3 mb-5 mb-md-0 d-flex align-items-center justify-content-center gap-3"
            >
              <div
                className="service-promotion__icon"
                style={{ color: elm.color }}
              >
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
                <h3 className="service-promotion__title fs-15 fw-bold text-uppercase mb-1 theme-color">
                  {elm.title}
                </h3>
                <p className="service-promotion__content text-secondary mb-0 fs-13">
                  {elm.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pb-2"></div>
      </div>
    </section>
  );
}
