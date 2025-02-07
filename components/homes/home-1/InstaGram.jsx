import { instagramImages } from "@/data/instagramIds";
import React from "react";
import Image from "next/image";

export default function InstaGram() {
  return (
    <section className="instagram container">
      <h2 className="section-title text-uppercase text-center mb-4 pb-xl-2 mb-xl-4">
        @UOMO
      </h2>

      <div className="row row-cols-3 row-cols-md-4 row-cols-xl-6">
        {instagramImages.map((elm, i) => (
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
