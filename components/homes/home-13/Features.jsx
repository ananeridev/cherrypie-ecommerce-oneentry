import { servicePromotions2 } from "@/data/features";
import React from "react";

export default function Features() {
  return (
    <div className="service-promotion horizontal full-width_padding">
      <div className="row justify-content-xl-between px-3 px-xl-0">
        {servicePromotions2.map((elm, i) => (
          <div
            key={i}
            className="col-sm-6 col-lg-3 col-xl-auto mb-5 mb-md-0 d-flex align-items-center justify-content-center gap-3 my-4"
          >
            <div className="service-promotion__icon theme-color">
              <svg
                width="45"
                height="45"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href={`#${elm.icon}`} />
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

        {/* <!-- /.col-md-4 text-center--> */}
      </div>
      {/* <!-- /.row --> */}
    </div>
  );
}
