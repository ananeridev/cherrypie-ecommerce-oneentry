"use client";

import { useEffect } from "react";
import tippy from "tippy.js";

export default function Size() {
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);
  return (
    <>
      <label
        className="swatch js-swatch"
        htmlFor="swatch-1"
        aria-label="Extra Small"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-tippy-content="Extra Small"
      >
        XS
      </label>
      <input type="radio" name="size" id="swatch-2" defaultChecked />
      <label
        className="swatch js-swatch"
        htmlFor="swatch-2"
        aria-label="Small"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-tippy-content="Small"
      >
        S
      </label>
      <input type="radio" name="size" id="swatch-3" />
      <label
        className="swatch js-swatch"
        htmlFor="swatch-3"
        aria-label="Middle"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-tippy-content="Middle"
      >
        M
      </label>
      <input type="radio" name="size" id="swatch-4" />
      <label
        className="swatch js-swatch"
        htmlFor="swatch-4"
        aria-label="Large"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-tippy-content="Large"
      >
        L
      </label>
      <input type="radio" name="size" id="swatch-5" />
      <label
        className="swatch js-swatch"
        htmlFor="swatch-5"
        aria-label="Extra Large"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-tippy-content="Extra Large"
      >
        XL
      </label>
    </>
  );
}
