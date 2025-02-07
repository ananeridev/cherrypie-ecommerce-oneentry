import { instagramImages } from "@/data/instagramIds";
import React from "react";
import Image from "next/image";

export default function Instagram() {
  return (
    <section className="instagram container">
      <div className="d-flex justify-content-center flex-wrap mb-3 mb-xl-5">
        <h2 className="h3 fw-bold theme-color text-uppercase">
          UOMO Baby on Instagram
        </h2>
      </div>

      <div className="row row-cols-3 row-cols-md-4 row-cols-xl-6">
        {instagramImages.slice(0, 12).map((elm, i) => (
          <div key={i} className="instagram__tile">
            <a
              href="https://instagram.com"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <Image
                loading="lazy"
                className="instagram__img"
                src={elm.src}
                width="230"
                height="230"
                alt="Insta image 1"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
