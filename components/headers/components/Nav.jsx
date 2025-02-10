import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menus } from '@/data/oneentry/service'
import { useContextElement } from '@/context/Context'

export default function Nav() {
    const pathname = usePathname()
    const [menuItems, setMenuItems] = useState([])
    const { setCategorie } = useContextElement()

    useEffect(() => {
        async function loadMenu() {
            const data = await Menus.getMenusByMarker('categories')

            if (data && data.pages) {
                setMenuItems(
                    data.pages.map((page) => ({
                        href: page.pageUrl,
                        title: page.localizeInfos?.title,
                        subPages: page.subPages || [],
                    }))
                )
            }
        }

        loadMenu()
    }, [])

    const isMenuActive = (href) => pathname.startsWith(href)

    return (
        <nav>
            <ul className='navigation__list'>
                {menuItems.map((menu, index) => (
                    <li key={index} className='navigation__item'>
                        <Link
                            href={menu.href}
                            className={`navigation__link ${
                                isMenuActive(menu.href) ? 'menu-active' : ''
                            }`}
                            onClick={() => setCategorie(menu.href)}
                        >
                            {menu.title}
                        </Link>
                        {menu.subPages.length > 0 && (
                            <div
                                className='box-menu'
                                style={{ width: '800px' }}
                            >
                                <ul className='sub-menu__list list-unstyled'>
                                    {menu.subPages.map((sub, i) => (
                                        <li key={i} className='sub-menu__item'>
                                            <Link
                                                href={sub.pageUrl}
                                                className={`menu-link ${
                                                    isMenuActive(sub.pageUrl)
                                                        ? 'menu-active'
                                                        : ''
                                                }`}
                                                onClick={() => setCategorie(sub.pageUrl)}
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
    )
}
