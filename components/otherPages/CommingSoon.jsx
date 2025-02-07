"use client";
import React from "react";
import CountDownComponent from "../common/CountDownComponent";

export default function CommingSoon() {
  return (
    <section className="coming-soon">
      <div className="content container">
        <h2 className="mb-3">COMING SOON</h2>
        <p className="mb-5">
          Sorry, we couldn't find the page you where looking for. We suggest
          that you return to home page.
        </p>
        <div className="js-countdown mb-5">
          <CountDownComponent />
        </div>
        <div className="block-newsletter">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="block-newsletter__form"
          >
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Your email address"
            />
            <button className="btn btn-secondary" type="submit">
              JOIN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
