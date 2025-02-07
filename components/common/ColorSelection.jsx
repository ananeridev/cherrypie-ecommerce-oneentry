"use client";

import { useState } from "react";

const swatchColors = [
  {
    href: "#",
    className: "",
    style: { color: "#bababa" },
  },
  {
    href: "#",
    className: "swatch-color pc__swatch-color",
    style: { color: "#d76b67" },
  },
  {
    href: "#",
    className: "swatch-color pc__swatch-color",
    style: { color: "#bfdcc4" },
  },
];

export default function ColorSelection({}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      {swatchColors.map((elm, i) => (
        <a
          key={i}
          onClick={() => setCurrentIndex(i)}
          className={`swatch-color pc__swatch-color  ${
            i == currentIndex ? "swatch_active" : ""
          }`}
          style={elm.style}
        ></a>
      ))}
    </>
  );
}
