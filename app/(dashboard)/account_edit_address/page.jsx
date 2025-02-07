import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import DashboardSidebar from "@/components/otherPages/DashboardSidebar";
import EditAddress from "@/components/otherPages/EditAddress";
import React from "react";

export const metadata = {
  title: "Dashboard Edit Address || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function AccountEditAddressPage() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <section className="my-account container">
          <h2 className="page-title">Addresses</h2>
          <div className="row">
            <DashboardSidebar />
            <EditAddress />
          </div>
        </section>
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
