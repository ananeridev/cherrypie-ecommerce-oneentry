"use client";
import React from "react";

export default function EditAccount() {
  return (
    <div className="col-lg-9">
      <div className="page-content my-account__edit">
        <div className="my-account__edit-form">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="needs-validation"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="account_first_name"
                    placeholder="First Name"
                    required
                  />
                  <label htmlFor="account_first_name">First Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="account_last_name"
                    placeholder="Last Name"
                    required
                  />
                  <label htmlFor="account_last_name">Last Name</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="account_display_name"
                    placeholder="Display Name"
                    required
                  />
                  <label htmlFor="account_display_name">Display Name</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="email"
                    className="form-control"
                    id="account_email"
                    placeholder="Email Address"
                    required
                  />
                  <label htmlFor="account_email">Email Address</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="my-3">
                  <h5 className="text-uppercase mb-0">Password Change</h5>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="password"
                    className="form-control"
                    id="account_current_password"
                    placeholder="Current password"
                    required
                  />
                  <label htmlFor="account_current_password">
                    Current password
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="password"
                    className="form-control"
                    id="account_new_password"
                    placeholder="New password"
                    required
                  />
                  <label htmlFor="account_new_password">New password</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="password"
                    className="form-control"
                    data-cf-pwd="#account_new_password"
                    id="account_confirm_password"
                    placeholder="Confirm new password"
                    required
                  />
                  <label htmlFor="account_confirm_password">
                    Confirm new password
                  </label>
                  <div className="invalid-feedback">
                    Passwords did not match!
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="my-3">
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
