import React from "react";

export default function Pagination1() {
  return (
    <div
      className="progress progress_uomo mb-3 ms-auto me-auto"
      style={{ width: "300px" }}
    >
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "39%" }}
        aria-valuenow="39%"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}
