"use client";
import Image from "next/image";
import { useEffect } from "react";
import tippy from "tippy.js";

export default function Clolor2() {
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);
  return (
    <>
      <input type="radio" name="color" id="swatch-11" />
      <label
        className="swatch swatch-image js-swatch"
        htmlFor="swatch-11"
        aria-label="Red"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-tippy-content="Red"
      >
        <Image
          loading="lazy"
          src="/assets/images/products/swatch_0.jpg"
          width="60"
          height="60"
          alt="image"
        />
      </label>
      <input type="radio" name="color" id="swatch-12" defaultChecked />
      <label
        className="swatch swatch-image js-swatch"
        htmlFor="swatch-12"
        aria-label="Blue"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-tippy-content="Blue"
      >
        <Image
          loading="lazy"
          src="/assets/images/products/swatch_1.jpg"
          width="60"
          height="60"
          alt="image"
        />
      </label>
      <input type="radio" name="color" id="swatch-13" />
      <label
        className="swatch swatch-image js-swatch"
        htmlFor="swatch-13"
        aria-label="Black"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-tippy-content="Black"
      >
        <Image
          loading="lazy"
          src="/assets/images/products/swatch_2.jpg"
          width="60"
          height="60"
          alt="image"
        />
      </label>
    </>
  );
}
