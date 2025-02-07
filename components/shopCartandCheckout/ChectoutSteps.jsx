"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const steps = [
  {
    id: 1,
    href: "/shop_cart",
    number: "01",
    title: "Shopping Bag",
    description: "Manage Your Items List",
  },
  {
    id: 2,
    href: "/shop_checkout",
    number: "02",
    title: "Shipping and Checkout",
    description: "Checkout Your Items List",
  },
  {
    id: 3,
    href: "/shop_order_complete",
    number: "03",
    title: "Confirmation",
    description: "Review And Submit Your Order",
  },
];
export default function ChectoutSteps() {
  const [activePathIndex, setactivePathIndex] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    const activeTab = steps.filter((elm) => elm.href == pathname)[0];
    const activeTabIndex = steps.indexOf(activeTab);
    setactivePathIndex(activeTabIndex);
  }, [pathname]);
  return (
    <div className="checkout-steps">
      {steps.map((elm, i) => (
        <Link
          key={i}
          href={elm.href}
          className={`checkout-steps__item  ${
            activePathIndex >= i ? "active" : ""
          }`}
        >
          <span className="checkout-steps__item-number">{elm.number}</span>
          <span className="checkout-steps__item-title">
            <span>{elm.title}</span>
            <em>{elm.description}</em>
          </span>
        </Link>
      ))}
    </div>
  );
}
