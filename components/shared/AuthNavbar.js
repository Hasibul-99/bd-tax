'use client'

import { useTranslations } from "next-intl";
import Image from 'next/image';
import Link from "next/link";
import LanguageChange from '../common/LanguageChange';
import { usePathname } from 'next/navigation'

// https://codepen.io/Blockshot/pen/rNwOYBE
export default function AuthNavbar({ locale }) {
    const pathname = usePathname()
    const t = useTranslations("navigation");

    const handelToggle = () => {
        const authMenu = document.querySelector('#menu');
        authMenu.classList.toggle('hidden');
    }

    const isActiveUrl = (url) => {
        return url === pathname;
    }

    return (
        <header className='container mx-auto'>
            <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 text-lg text-gray-700 bg-white">
                <div>
                    <Link href={`/${locale}`}>
                        <Image width={100} height={60} src="/assets/images/logo-2.png" alt="logo" />
                    </Link>
                </div>
                {/* <Link href={`#`}> */}
                <svg xmlns="<http://www.w3.org/2000/svg>" id="menu-button" onClick={() => { handelToggle() }} className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* </Link> */}
                <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                    <ul className="text-gray-700 pt-4 md:mt-3 md:flex md:justify-between items-center md:pt-0 text-sm">
                        <li>
                            <Link href={`/${locale}/home`} className="md:px-5 py-4 block hover:text-green-400">{t(`home`)}</Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/`} className="md:px-5 py-4 block hover:text-green-400">{t(`packages`)}</Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/faq`} className="md:px-5 py-4 block hover:text-green-400">{t(`news`)}</Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/faq`} className="md:px-5 py-4 block hover:text-green-400">{t(`blog`)}</Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/faq`} className="md:px-5 py-4 block hover:text-green-400">{t(`faq`)}</Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/about-us`} className="md:px-5 py-4 block hover:text-green-400">{t(`about_us`)}</Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/contact-us`} className="md:px-5 py-4 block hover:text-green-400">{t(`contact_us`)}</Link>
                        </li>
                        <li>
                            <LanguageChange />
                        </li>
                        <li>
                            <Link href={`/${locale}/signin`} className={isActiveUrl(`/${locale}/signin`) ? "btn-hover color-5 md:px-6 py-3" : "md:px-5 py-4 block hover:text-green-400"}>{t(`login`)}</Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/signup`} className={isActiveUrl(`/${locale}/signup`) ? "btn-hover color-5 md:px-6 py-3" : "md:px-5 py-4 block hover:text-green-400"}>{t(`sign_up`)}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}
