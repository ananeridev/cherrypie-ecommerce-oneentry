"use client";

import Link from "next/link";

export default function ResetPassword() {
  return (
    <section className="login-register container">
      <h2 className="section-title text-center fs-3 mb-xl-5">
        Reset Your Password
      </h2>
      <p>We will send you an email to reset your password</p>
      <div className="reset-form">
        <form onSubmit={(e) => e.preventDefault()} className="needs-validation">
          <div className="form-floating mb-3">
            <input
              name="login_email"
              type="email"
              className="form-control form-control_gray"
              placeholder="Email address *"
              required
            />
            <label>Email address *</label>
          </div>

          <button
            className="btn btn-primary w-100 text-uppercase"
            type="submit"
          >
            Submit
          </button>

          <div className="customer-option mt-4 text-center">
            <span className="text-secondary">Back to</span>
            <Link href="/login_register" className="btn-text js-show-register">
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
