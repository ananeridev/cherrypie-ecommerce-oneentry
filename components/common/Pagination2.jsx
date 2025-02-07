"use client";
import React, { useState } from "react";

export default function Pagination2({ totalPages = 4 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav
      className="shop-pages d-flex justify-content-between mt-3"
      aria-label="Page navigation"
    >
      <a
        href="#"
        className={`btn-link d-inline-flex align-items-center ${
          currentPage === 1 ? "disabled" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          handlePrevClick();
        }}
      >
        <svg
          className="me-1"
          width="7"
          height="11"
          viewBox="0 0 7 11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="#icon_prev_sm" />
        </svg>
        <span className="fw-medium">PREV</span>
      </a>
      <ul className="pagination mb-0">
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index} className="page-item">
            <a
              className={`btn-link px-1 mx-2 ${
                currentPage === index + 1 ? "btn-link_active" : ""
              }`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageClick(index + 1);
              }}
            >
              {index + 1}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`btn-link d-inline-flex align-items-center ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          handleNextClick();
        }}
      >
        <span className="fw-medium me-1">NEXT</span>
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="#icon_next_sm" />
        </svg>
      </a>
    </nav>
  );
}
