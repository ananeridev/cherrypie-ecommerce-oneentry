"use client";
import React from "react";

export default function OrderTrack() {
  return (
    <section className="shop-checkout container">
      <div className="order-tracking">
        <form onSubmit={(e) => e.preventDefault()} className="needs-validation">
          <h2 className="page-title">Order Tracking</h2>
          <p>
            To track your order please enter your Order ID in the box below and
            press the "Track" button. This was given to you on your receipt and
            in the confirmation email you should have received.
          </p>
          <div className="form-floating my-4">
            <input
              type="text"
              className="form-control"
              id="order_tracking_id"
              placeholder="Order ID *"
              required
            />
            <label htmlFor="order_tracking_id">Order ID *</label>
          </div>
          <div className="form-floating my-4">
            <input
              type="email"
              className="form-control"
              id="order_tracking_email"
              placeholder="Billing email *"
              required
            />
            <label htmlFor="order_tracking_email">Billing email *</label>
          </div>
          <button type="submit" className="btn btn-primary btn-track w-100">
            TRACK
          </button>
        </form>
      </div>
    </section>
  );
}
