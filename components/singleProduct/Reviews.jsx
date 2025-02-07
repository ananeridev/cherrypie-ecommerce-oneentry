"use client";
import React, { useState } from "react";
import Image from "next/image";
const reviews = [
  {
    name: "Janice Miller",
    date: "April 06, 2023",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…",
    rating: 5,
    avatar: "/assets/images/avatar.jpg",
  },
  {
    name: "Benjam Porter",
    date: "April 06, 2023",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…",
    rating: 5,
    avatar: "/assets/images/avatar.jpg",
  },
];
export default function Reviews() {
  const [ratingLength, setratingLength] = useState(0);
  return (
    <>
      <h2 className="product-single__reviews-title">Reviews</h2>
      <div className="product-single__reviews-list">
        {reviews.map((elm, i) => (
          <div key={i} className="product-single__reviews-item">
            <div className="customer-avatar">
              <Image
                loading="lazy"
                width={80}
                height={80}
                src={elm.avatar}
                alt="image"
              />
            </div>
            <div className="customer-review">
              <div className="customer-name">
                <h6>{elm.name}</h6>
                <div className="reviews-group d-flex">
                  {Array.from({ length: elm.rating }).map((_, index) => (
                    <svg
                      key={index}
                      className="review-star"
                      viewBox="0 0 9 9"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_star" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="review-date">{elm.date}</div>
              <div className="review-text">
                <p>{elm.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="product-single__review-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <h5>Be the first to review “Message Cotton T-Shirt”</h5>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="select-star-rating">
            <label>Your rating *</label>
            <span className="star-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <React.Fragment key={index}>
                  {ratingLength >= index + 1 ? (
                    <svg
                      key={index}
                      onClick={() => setratingLength(index + 1)}
                      className="review-star"
                      viewBox="0 0 9 9"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_star" />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => setratingLength(index + 1)}
                      className="star-rating__star-icon"
                      width="12"
                      height="12"
                      fill="#ccc"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </span>
            <input type="hidden" value="" />
          </div>
          <div className="mb-4">
            <textarea
              className="form-control form-control_gray"
              placeholder="Your Review"
              cols="30"
              rows="8"
            ></textarea>
          </div>
          <div className="form-label-fixed mb-4">
            <label className="form-label">Name *</label>
            <input className="form-control form-control-md form-control_gray" />
          </div>
          <div className="form-label-fixed mb-4">
            <label className="form-label">Email address *</label>
            <input className="form-control form-control-md form-control_gray" />
          </div>
          <div className="form-check mb-4">
            <input
              className="form-check-input form-check-input_fill"
              type="checkbox"
              defaultValue=""
            />
            <label className="form-check-label">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <div className="form-action">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
