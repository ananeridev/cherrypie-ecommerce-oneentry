import { instagramImages } from "@/data/instagramIds";
import React from "react";
import Image from "next/image";

export default function Instagram() {
  return (
    <section className="position-relative full-width_padding">
      <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
        Shop Our <strong>Instagram</strong>
      </h2>

      <div className="row row-cols-2 row-cols-md-4 row-cols-xl-8 px-3 px-xl-0">
        {instagramImages.slice(0, 8).map((elm, i) => (
          <div key={i} className="instagram__tile px-3 py-3">
            <a
              href="https://instagram.com"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <Image
                loading="lazy"
                className="instagram__img"
                src={elm.src}
                width="232"
                height="232"
                alt="Insta image 20"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
