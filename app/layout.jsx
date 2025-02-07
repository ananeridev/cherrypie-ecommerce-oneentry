"use client";
import Svgs from "@/components/common/Svgs";
import "react-tooltip/dist/react-tooltip.css";
import "../public/assets/css/plugins/swiper.min.css";
import "../public/assets/sass/style.scss";
import "rc-slider/assets/index.css";
import "tippy.js/dist/tippy.css";
import LoginFormPopup from "@/components/common/LoginFormPopup";
import { useEffect } from "react";
import ScrollTop from "@/components/common/ScrollTop";
import Context from "@/context/Context";
import QuickView from "@/components/modals/QuickView";
import CartDrawer from "@/components/shopCartandCheckout/CartDrawer";
import SiteMap from "@/components/modals/SiteMap";
import NewsLetter from "@/components/modals/NewsLetter";
import CookieContainer from "@/components/common/CookieContainer";
import MobileHeader from "@/components/headers/MobileHeader";
import SizeGuide from "@/components/modals/SizeGuide";
import Delivery from "@/components/modals/Delivery";
import CustomerLogin from "@/components/asides/CustomerLogin";
import ShopFilter from "@/components/asides/ShopFilter";
import ProductDescription from "@/components/asides/ProductDescription";
import ProductAdditionalInformation from "@/components/asides/ProductAdditionalInformation";
import ProductReviews from "@/components/asides/ProductReviews";
import MobileFooter1 from "@/components/footers/MobileFooter1";

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Lora:wght@400;500;600;700&family=Poppins:wght@400&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Average+Sans:400"
          rel="stylesheet"
          property="stylesheet"
          media="all"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Svgs />
        <Context>
          <MobileHeader />
          {children}
          <MobileFooter1 />
          {/* //modals and asides */}
          <LoginFormPopup />
          <QuickView />
          {/* <NewsLetter /> */}
          <CookieContainer />
          <SizeGuide />
          <Delivery />
          <CartDrawer />
          <SiteMap />
          <CustomerLogin />
          <ShopFilter />
          <ProductDescription />
          <ProductAdditionalInformation />
          <ProductReviews />
        </Context>
        <div className="page-overlay" id="pageOverlay"></div>
        <ScrollTop />
      </body>
    </html>
  );
}
