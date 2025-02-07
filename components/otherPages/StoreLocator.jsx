"use client";
import React, { useState } from "react";
import StoreMap from "./StoreMap";
import { storesLocations } from "@/data/storeLocations";

export default function StoreLocator() {
  const [getLocation, setLocation] = useState(null);
  return (
    <section className="store-location container">
      <h2 className="page-title">STORE LOCATOR</h2>

      <div className="row">
        <div className="col-lg-4">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="store-location__search">
              <input
                className="store-location__search-input"
                type="text"
                name="search-keyword"
                placeholder="Enter your country or city"
              />
              <button
                className="btn-icon store-location__search-btn"
                type="submit"
              >
                <svg
                  className="d-block"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_search" />
                </svg>
              </button>
            </div>

            <div className="store-location__search-result">
              {storesLocations.map((elm, i) => (
                <div key={i} className="store-location__search-result__item">
                  <h5>Store in {elm.city}</h5>
                  <p>
                    {elm.address}
                    <br />
                    {elm.country}
                    <br />
                    {elm.phone}
                    <br />
                    {elm.hours}
                  </p>
                  <a id="store_selector_1" onClick={() => setLocation(elm)}>
                    See on the map
                  </a>
                </div>
              ))}
            </div>
          </form>
        </div>
        <div className="col-lg-8">
          <div className="google-map__wrapper">
            <StoreMap
              getLocation={getLocation}
              setLocation={setLocation}
              storesLocations={storesLocations}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
