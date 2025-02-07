import React from "react";
import Image from "next/image";

export default function Reviews() {
  return (
    <div className="blog-single__reviews-list">
      <div className="blog-single__reviews-item">
        <div className="customer-avatar">
          <Image
            loading="lazy"
            width={80}
            height={80}
            src="/assets/images/avatar.jpg"
            alt="image"
          />
        </div>
        <div className="customer-review">
          <div className="customer-name">
            <h6>Janice Miller</h6>
            <div className="reviews-group d-flex">
              <svg
                className="review-star"
                viewBox="0 0 9 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_star" />
              </svg>
              <svg
                className="review-star"
                viewBox="0 0 9 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_star" />
              </svg>
              <svg
                className="review-star"
                viewBox="0 0 9 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_star" />
              </svg>
              <svg
                className="review-star"
                viewBox="0 0 9 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_star" />
              </svg>
              <svg
                className="review-star"
                viewBox="0 0 9 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_star" />
              </svg>
            </div>
          </div>
          <div className="review-date">April 06, 2023</div>
          <div className="review-text">
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est…
            </p>
          </div>
        </div>
      </div>
      <div className="blog-single__reviews-item">
        <div className="customer-avatar">
          <Image
            loading="lazy"
            width={80}
            height={80}
            src="/assets/images/avatar.jpg"
            alt="image"
          />
        </div>
        <div className="customer-review">
          <div className="customer-name">
            <h6>Benjam Porter</h6>
            <div className="reviews-group d-flex">
              <svg
                className="review-star"
                viewBox="0 0 9 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_star" />
              </svg>
              <svg
                className="review-star"
                viewBox="0 0 9 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_star" />
              </svg>
              <svg
                className="review-star"
                viewBox="0 0 9 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_star" />
              </svg>
              <svg
                className="review-star"
                viewBox="0 0 9 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_star" />
              </svg>
              <svg
                className="review-star"
                viewBox="0 0 9 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_star" />
              </svg>
            </div>
          </div>
          <div className="review-date">April 06, 2023</div>
          <div className="review-text">
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
