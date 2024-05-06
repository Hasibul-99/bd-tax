import React from 'react'
import Image from 'next/image';
import { Space } from 'antd';

// https://codepen.io/its7rishi/pen/qBPmENP
export default function Navbar() {
    return (
        <nav className=" shadow-lg">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <a href="#" className="flex items-center py-4 px-2">
                                <Image width={100} height={60} src="/assets/images/logo-2.png" alt="logo" />
                            </a>
                        </div>
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1 gap-x-5 navbar-content">
                            <a href="#" className="py-4 px-2 font-semibold active">
                                <Space>
                                    <img src='/assets/icons/Home.svg' alt="home" />
                                    Home
                                </Space>
                            </a>
                            <a href="#" className="py-4 px-2 font-semibold">
                                <Space>
                                    <img src='/assets/icons/Docs.svg' />
                                    Docs
                                </Space>
                            </a>
                            <a href="#" className="py-4 px-2 font-semibold">
                                <Space>
                                    <img src='/assets/icons/tax-genius.svg' />
                                    Tax Genius
                                </Space>
                            </a>
                            <a href="#" className="py-4 px-2 font-semibold">
                                <Space>
                                    <img src='/assets/icons/message-question.svg' />
                                    Contact Us
                                </Space>
                            </a>
                            <a href="#" className="py-4 px-2 font-semibold">
                                <Space>
                                    <img src='/assets/icons/more.svg' />
                                    More
                                </Space>
                            </a>
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
                    <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
                        <Space>
                            <img src='/assets/icons/Home.svg' />
                            Home
                        </Space></a></li>
                    <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"><Space>
                        <img src='/assets/icons/Docs.svg' />
                        Docs
                    </Space></a></li>
                    <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"><Space>
                        <img src='/assets/icons/tax-genius.svg' />
                        Tax Genius
                    </Space></a></li>
                    <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"><Space>
                        <img src='/assets/icons/message-question.svg' />
                        Contact Us
                    </Space></a></li>
                    <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"><Space>
                        <img src='/assets/icons/more.svg' />
                        More
                    </Space></a></li>
                </ul>
            </div>
        </nav>

    )
}
