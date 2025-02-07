"use client";
import { dashboardMenuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function DashboardSidebar() {
  const pathname = usePathname();
  return (
    <div className="col-lg-3">
      <ul className="account-nav">
        {dashboardMenuItems.map((elm, i) => (
          <li key={i}>
            <Link
              href={elm.href}
              className={`menu-link menu-link_us-s ${
                pathname == elm.href ? "menu-link_active" : ""
              } `}
            >
              {elm.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
