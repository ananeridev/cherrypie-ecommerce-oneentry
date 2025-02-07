import { bannersData2 } from "@/data/banner";
import React from "react";
import Image from "next/image";

export default function GridBanner() {
  return (
    <section className="grid-banner container mb-3">
      <div className="row">
        {bannersData2.map((elm, i) => (
          <div key={i} className="col-lg-4">
            <div className="grid-banner__item position-relative mb-3">
              <Image
                loading="lazy"
                className="w-100 h-auto"
                src={elm.imgSrc}
                width="450"
                height="600"
                alt="image"
              />
              <div className="content_abs bottom-0 left-0 right-0 mx-3 mx-md-4 mx-xl-5 py-2 bg-white mb--1">
                <h3 className="my-2 pt-1 text-center">{elm.altText}</h3>
              </div>
              {/* <!-- /.content_abs .content_center --> */}
            </div>
          </div>
        ))}

        {/* <!-- /.col-lg-4 --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
