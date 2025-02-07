"use client";

import React, { useEffect } from "react";
import tippy from "tippy.js";
const switches = [
  {
    id: "swatch-11",
    label: "Black",
    color: "#222",
    defaultChecked: false,
  },
  {
    id: "swatch-12",
    label: "Red",
    color: "#c93a3e",
    defaultChecked: true,
  },
  {
    id: "swatch-13",
    label: "Grey",
    color: "#e4e4e4",
    defaultChecked: false,
  },
];
export default function Colors({ colors }) {
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);

  const colorsArray = colors?.length ? colors : [...switches];
  return (
    <>
      {colorsArray.map((swatch) => (
        <React.Fragment key={swatch.id}>
          <input
            type="radio"
            name="color"
            id={swatch.id}
            defaultChecked={swatch.defaultChecked}
          />
          <label
            className="swatch swatch-color js-swatch"
            htmlFor={swatch.id}
            aria-label={swatch.label}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-tippy-content={swatch.label}
            style={{ color: swatch.color }}
          ></label>
        </React.Fragment>
      ))}
    </>
  );
}
