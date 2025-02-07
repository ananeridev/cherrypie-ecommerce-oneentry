"use client";
import React, { useState, useEffect } from "react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="scrollTop"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`end-0 ${isVisible ? "" : "visually-hidden"}`}
    >
      {/* Your scroll to top content */}
    </div>
  );
}
