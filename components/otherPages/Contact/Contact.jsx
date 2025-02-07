"use client";

import { storesLocations } from "@/data/storeLocations";

export default function Contact() {
  return (
    <section className="contact-us container">
      <div className="mw-930">
        <div className="row mb-5">
          {storesLocations.slice(0, 2).map((elm, i) => (
            <div key={i} className="col-lg-6">
              <h3 className="mb-4">Store in {elm.city}</h3>
              <p className="mb-4">
                {elm.address}
                <br />
                {elm.country}
              </p>
              <p className="mb-4">
                {elm.emailAddress}
                <br />
                {elm.phone}
              </p>
            </div>
          ))}
        </div>
        <div className="contact-us__form">
          <form
            className="needs-validation"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="mb-5">Get In Touch</h3>
            <div className="form-floating my-4">
              <input
                type="text"
                className="form-control"
                id="contact_us_name"
                placeholder="Name *"
                required
              />
              <label htmlFor="contact_us_name">Name *</label>
            </div>
            <div className="form-floating my-4">
              <input
                type="email"
                className="form-control"
                id="contact_us_email"
                placeholder="Email address *"
                required
              />
              <label htmlFor="contact_us_name">Email address *</label>
            </div>
            <div className="my-4">
              <textarea
                className="form-control form-control_gray"
                placeholder="Your Message"
                cols="30"
                rows="8"
                required
              ></textarea>
            </div>
            <div className="my-4">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
