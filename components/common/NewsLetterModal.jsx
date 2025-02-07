"use client";
import React from "react";
import Image from "next/image";

export default function NewsLetterModal() {
  return (
    <div
      className="modal fade"
      id="newsletterPopup"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog newsletter-popup modal-dialog-centered">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="row p-0 m-0">
            <div className="col-md-6 p-0 d-none d-md-block">
              <div className="newsletter-popup__bg h-100 w-100">
                <Image
                  loading="lazy"
                  width={450}
                  height={550}
                  src="/assets/images/newsletter-popup.jpg"
                  className="h-100 w-100 object-fit-cover d-block"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-md-6 p-0 d-flex align-items-center">
              <div className="block-newsletter w-100">
                <h3 className="block__title">Sign Up to Our Newsletter</h3>
                <p>
                  Be the first to get the latest news about trends, promotions,
                  and much more!
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="footer-newsletter__form position-relative bg-body"
                >
                  <input
                    className="form-control border-2"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                  />
                  <input
                    className="btn-link fw-medium bg-transparent position-absolute top-0 end-0 h-100"
                    type="submit"
                    defaultValue="JOIN"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
