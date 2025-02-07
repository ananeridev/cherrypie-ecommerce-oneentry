import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import OrderTrack from "@/components/shopCartandCheckout/OrderTrack";
import React from "react";

export default function () {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <OrderTrack />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
