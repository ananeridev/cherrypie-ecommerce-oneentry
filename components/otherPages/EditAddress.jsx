import React from "react";

export default function EditAddress() {
  return (
    <div className="col-lg-9">
      <div className="page-content my-account__address">
        <p className="notice">
          The following addresses will be used on the checkout page by default.
        </p>
        <div className="my-account__address-list">
          <div className="my-account__address-item">
            <div className="my-account__address-item__title">
              <h5>Billing Address</h5>
              <a href="#">Edit</a>
            </div>
            <div className="my-account__address-item__detail">
              <p>Daniel Robinson</p>
              <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
              <p>United States</p>
              <br />
              <p>sale@uomo.com</p>
              <p>+1 246-345-0695</p>
            </div>
          </div>
          <div className="my-account__address-item">
            <div className="my-account__address-item__title">
              <h5>Shipping Address</h5>
              <a href="#">Edit</a>
            </div>
            <div className="my-account__address-item__detail">
              <p>Daniel Robinson</p>
              <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
              <p>United States</p>
              <br />
              <p>sale@uomo.com</p>
              <p>+1 246-345-0695</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
