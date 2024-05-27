'use client'

import { moreNaveData } from '@/scripts/helper';
import { Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

// https://codepen.io/its7rishi/pen/qBPmENP
export default function Navbar({ locale }) {
    const pathname = usePathname()
    console.log("props", locale);

    const isActiveUrl = (url) => {
        return url === pathname;
    }

    return (
        <nav className=" shadow-lg">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between mx-6 md:mx-0">
                    <div className="flex space-x-7">
                        <div>
                            <a href="/" className="flex items-center py-4 px-2">
                                <Image width={100} height={60} src="/assets/images/logo-2.png" alt="logo" />
                            </a>
                        </div>
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1 gap-x-5 navbar-content">
                            <Link href={`/${locale}/home`} className={`py-4 px-2 font-semibold ${isActiveUrl(`/${locale}/home`) ? 'active' : '' }`}>
                                <Space>
                                    <img src='/assets/icons/Home.svg' alt="home" />
                                    Home
                                </Space>
                            </Link>
                            <Link href={`/${locale}/docs`} className={`py-4 px-2 font-semibold ${isActiveUrl(`/${locale}/docs`) ? 'active' : '' }`}>
                                <Space>
                                    <img src='/assets/icons/docs.svg' />
                                    Docs
                                </Space>
                            </Link>
                            <Link href={`/${locale}/tax-genius`} className={`py-4 px-2 font-semibold ${isActiveUrl(`/${locale}/tax-genius`) ? 'active' : '' }`}>
                                <Space>
                                    <img src='/assets/icons/tax-genius.svg' />
                                    Tax Genius
                                </Space>
                            </Link>
                            <Link href={`/${locale}/contact-us`} className={`py-4 px-2 font-semibold ${isActiveUrl(`/${locale}/contact-us`) ? 'active' : '' }`}>
                                <Space>
                                    <img src='/assets/icons/message-question.svg' />
                                    Contact Us
                                </Space>
                            </Link>
                            <Link href={`/${locale}/more/profile`} className={`py-4 px-2 font-semibold ${isActiveUrl(`/${locale}/more/`) ? 'active' : '' }`}>
                                <Space>
                                    <img src='/assets/icons/more.svg' />
                                    More
                                </Space>
                            </Link>
                        </div>
                    </div>
                    {/* Secondary Navbar items */}
                    <div className="hidden md:flex items-center space-x-3 ">
                        <a href="#" className="py-2 px-2 font-medium">
                            <img src='/assets/icons/Group.svg' />
                        </a>
                        <a href="#" className="py-2 px-2 font-medium">
                            <img src='/assets/icons/Frame.svg' />
                        </a>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button">
                            <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 " x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile menu */}
            <div className="hidden mobile-menu">
                <ul className>
                    <li className="active">
                        <Link href={`/${locale}/home`} className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
                            <Space>
                                <img src='/assets/icons/Home.svg' />
                                Home
                            </Space>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/docs`} className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"><Space>
                            <img src='/assets/icons/docs.svg' />
                            Docs
                        </Space>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/tax-genius`} className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"><Space>
                            <img src='/assets/icons/tax-genius.svg' />
                            Tax Genius
                        </Space>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/contact-us`} className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"><Space>
                            <img src='/assets/icons/message-question.svg' />
                            Contact Us
                        </Space>
                        </Link>
                    </li>
                    {
                        moreNaveData.map(item => <li key={item.id}>
                            <Link href={`/${locale}+ ${item.url}`} className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"><Space>
                                <img src={item.icon} alt={item.name} />
                                {item.name}
                            </Space>
                            </Link>
                        </li>)
                    }
                </ul>
            </div>
        </nav>

    )
}
