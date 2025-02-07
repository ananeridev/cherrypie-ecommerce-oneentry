"use client";

import { useState } from "react";

export default function CookieContainer() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div
          className="cookieConsentContainer"
          style={{ opacity: 1, display: "block" }}
        >
          <div className="cookieDesc">
            <p>
              In order to provide you a personalized shopping experience, our
              site uses cookies. By continuing to use this site, you are
              agreeing to our cookie policy.
            </p>
          </div>
          <div className="cookieButton">
            <a onClick={() => setShow(false)}>Accept</a>
          </div>
        </div>
      )}
    </>
  );
}
