import { servicesData } from "@/data/features";
import React from "react";

export default function Features() {
  return (
    <section className="service-promotion horizontal bg-grey-f7f5ee">
      <div className="container">
        <div className="pb-2"></div>
        <div className="row">
          {servicesData.map((elm, i) => (
            <div
              key={i}
              className="col-md-6 col-xl-3 mb-5 mb-md-0 d-flex align-items-center justify-content-center gap-3"
            >
              <div className="service-promotion__icon">
                <svg
                  className="theme-color"
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
                <h3 className="service-promotion__title h6 text-uppercase mb-1">
                  {elm.title}
                </h3>
                <p className="service-promotion__content text-secondary mb-0">
                  {elm.content}
                </p>
              </div>
            </div>
          ))}

          {/* <!-- /.col-md-6.col-xl-3 --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="pb-2"></div>
      </div>
    </section>
  );
}
