import React from 'react'
import { Select, Space } from 'antd';
import Image from 'next/image';
import { useTranslations } from "next-intl";
import LanguageChange from '../common/LanguageChange';

// https://codepen.io/Blockshot/pen/rNwOYBE
export default function AuthNavbar() {
    const t = useTranslations("navigation");

    return (
        <header>
            <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
                <div>
                    <a href="#">
                        <Image width={200} height={60} src="/assets/images/logo.png" />
                    </a>
                </div>
                <a href="#">
                    <svg xmlns="<http://www.w3.org/2000/svg>" id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </a>
                <div className="hidden w-full md:flex md:items-center md:w-auto " id="menu">
                    <ul className="text-base text-gray-700 pt-4 md:mt-3 md:flex md:justify-between items-center md:pt-0">
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">{t(`home`)}</a>
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">{t(`packages`)}</a>
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">{t(`news`)}</a>
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">{t(`blog`)}</a>
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">{t(`faq`)}</a>
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">{t(`about_us`)}</a>
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">{t(`contact_us`)}</a>
                        </li>
                        <li>
                            <LanguageChange/>
                        </li>
                        <li>
                            <a className="md:px-5 py-4 block hover:text-green-400" href="#">{t(`login`)}</a>
                        </li>
                        <li>
                            <a className="btn-hover color-5 md:px-6 py-3" href="#">{t(`sign_up`)}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}
