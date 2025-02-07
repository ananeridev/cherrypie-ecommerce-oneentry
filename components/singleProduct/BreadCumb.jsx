import React from "react";

export default function BreadCumb() {
  return (
    <>
      <a href="#" className="menu-link menu-link_us-s text-uppercase fw-medium">
        Home
      </a>
      <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">
        /
      </span>
      <a href="#" className="menu-link menu-link_us-s text-uppercase fw-medium">
        The Shop
      </a>
    </>
  );
}
