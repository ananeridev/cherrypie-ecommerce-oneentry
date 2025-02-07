"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetchMenu } from "@/data/oneentry/service";

export default function Nav() {
  const pathname = usePathname();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function loadMenu() {
      try {
        const data = await fetchMenu();
        if (data && data.pages) {
          setMenuItems(
            data.pages.map((page) => ({
              href: page.pageUrl,
              title: page.localizeInfos?.title,
              subPages: page.subPages || []
            }))
          );
        }
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    }
    loadMenu();
  }, []);

  const isMenuActive = (href) => pathname.startsWith(href);

  return (
    <nav>
      <ul className="navigation__list">
        {menuItems.map((menu, index) => (
          <li key={index} className="navigation__item">
            <Link
              href={menu.href}
              className={`navigation__link ${isMenuActive(menu.href) ? "menu-active" : ""}`}
            >
              {menu.title}
            </Link>
            {menu.subPages.length > 0 && (
              <div className="box-menu" style={{ width: "800px" }}>
                <ul className="sub-menu__list list-unstyled">
                  {menu.subPages.map((sub, i) => (
                    <li key={i} className="sub-menu__item">
                      <Link
                        href={sub.pageUrl}
                        className={`menu-link ${isMenuActive(sub.pageUrl) ? "menu-active" : ""}`}
                      >
                        {sub.localizeInfos?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
