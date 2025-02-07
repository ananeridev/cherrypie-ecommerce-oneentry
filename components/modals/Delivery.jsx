import React from "react";

export default function Delivery() {
  return (
    <div
      className="modal fade"
      id="deliveryModal"
      tabIndex="-1"
      aria-labelledby="deliveryModal"
      aria-hidden="true"
    >
      <div className="modal-dialog delivery-modal">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delivery</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="delivery-modal__wrapper">
              <div className="d-flex align-items-center justify-content-between">
                <h6>Next day delivery in store</h6>
                <span className="third-color">FREE</span>
              </div>
              <p>Buy before 6pm to receive your order next day.</p>
              <div className="d-flex align-items-center justify-content-between">
                <h6>Next day delivery</h6>
                <span>4 USD</span>
              </div>
              <p>
                Orders before 6pm from Monday to Saturday (or before 1pm on
                Sunday) will be delivered Next working day (except Northern
                Ireland and Highlands).
                <br />
                Orders placed after 6pm (after 1pm on Sunday) or for Northern
                Ireland and Highlands will be delivered in 2 working days.
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <h6>Drop Point</h6>
                <span>8 USD</span>
              </div>
              <p>
                In 2-3 working days. Pick up your parcel in one of the many
                different collection points available and during a wide range of
                hours.
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <h6>Same day delivery in London:</h6>
                <span>9 USD</span>
              </div>
              <p>
                Place your order before 13:00 to get it today!.
                <br />
                If you order later on, you’ll receive it the next day and if you
                order on Sunday, you’ll receive it the next working day.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.modal-dialog --> */}
    </div>
  );
}
