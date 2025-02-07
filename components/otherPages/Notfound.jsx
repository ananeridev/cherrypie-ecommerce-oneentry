import Link from "next/link";
import React from "react";

export default function Notfound() {
  return (
    <section className="page-not-found">
      <div className="content container">
        <h2 className="mb-3">OOPS!</h2>
        <h3 className="mb-3">Page not found</h3>
        <p className="mb-3">
          Sorry, we couldn't find the page you where looking for. We suggest
          that you return to home page.
        </p>
        <Link
          href={"/"}
          className="btn btn-primary d-flex align-items-center justify-content-center mx-auto"
        >
          GO BACK
        </Link>
      </div>
    </section>
  );
}
